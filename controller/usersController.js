const { registM, find, deleteOne, updateInfo } = require("../model/usersModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const registCtr = async (req, res,) => {
    console.log(req.body);
    let { username, password } = req.body;
    //拦截客户端没有传递用户名和密码的情况
    if (!username || !password) {
        res.send({
            status: false,
            state: 3001,
            msg: '用户姓名和密码不能为空！'
        });
        return
    }
    //判断用户名是否被注册
    let isUnique = await find({ username });
    //find返回的是数组还是false
    if (Array.isArray(isUnique)) {
        //是数组在判断是否有数据
        if (isUnique.length) {
            //数组有长度证明该用户名已存在
            res.send({
                state: false,
                status: 3002,
                msg: '该用户名已被注册！'
            })
        } else {
            //进行数据的插入
            let userInfo = { ...req.body };
            //定义加密杂凑的次数
            const saltRounds = 10;
            let hashPwd = await bcrypt.hash(password, saltRounds);
            userInfo.password = hashPwd;//给加密后的密码覆盖原来的密码，存入数据库中
            //async await 用于等待异步结果
            let result = await registM(userInfo);
            //判断是否注册成功
            if (result) {
                res.send({
                    state: true,
                    status: 200,
                    msg: '注册成功！'
                })
            } else {
                res.send({
                    state: false,
                    status: 3003,
                    msg: '注册失败！'
                })
            }
        }

    } else {
        res.send({
            state: false,
            status: 3001,
            msg: '数据库查询出错！'
        })

    }
}
//登录=>从数据拿数据与用户输入的数据进行对比
const loginCtr = async (req, res) => {
    //从客户端获取用户输入的数据
    let { username, password } = req.body;
    if (!username || !password) {
        res.send({
            state: false,
            status: 3002,
            msg: '用户名或者密码不能为空！'
        })
        return;
    }
    //查找数据库里面是否拥有该用户
    let isExists = await find({ username });
    //查询的结果返回的是数组
    if (Array.isArray(isExists)) {
        //返回的数组有长度证明有该此用户
        if (isExists.length) {
            //返回的数组中包含该用户的所有信息
            //密码校验
            let hashPwd = isExists[0]['password'];
            //调用bcrypt.compare(返回值为Boolean类型)函数进行验证
            let isValidate = await bcrypt.compare(password, hashPwd);
            if (isValidate) {

                /* jsonwebtoken生成
                jwt.sign(payload, secrect, //生成token
                    {
                        expiresIn: 60 * 5 //指定token生效的时间
                    }
                ) */

                //密码校验通过 分发token
                let { email = '', sex = '', age = '', nickname = '', username = '' } = isExists[0];
                let payload = {//用户非敏感信息放到荷载
                    email,
                    sex,
                    age,
                    nickname,
                    username
                }
                //secret一个随机的字符串
                const secret = 'MY_NAME_IS_KANGKANG';
                //生成token
                let token = jwt.sign(payload, secret, {
                    expiresIn: 60 * 5 //token有效时间 60s* 5 =>五分钟
                })

                //通过req.session.xxx挂载session
                req.session.userInfo = payload;

                res.send({
                    state: true,
                    status: 200,
                    msg: '登录成功！',
                    userInfo: payload,
                    token: token
                })

            }
            else {
                res.send({
                    state: false,
                    status: 3002,
                    msg: '密码错误！'
                })
            }
        }
        else {
            res.send({
                state: false,
                status: 3003,
                msg: '用户不存在！'
            })
        }

    }
    else {
        res.send({
            state: false,
            status: 3002,
            msg: '数据库查询出错！'
        })

    }
}
//获取所有用户信息
const getAllUsersCtr = async (req, res) => {
    let result = await find();
    res.send({
        state: true,
        status: 200,
        data: result
    })
}
//删除用户
const deleteUsersCtr = async (req, res) => {
    let { username } = req.body;
    //先查找验证是否有此用户
    let isExists = await find({ username });
    if (Array.isArray(isExists)) {//查询过程成功返回数组
        if (isExists.length) {//数组有长度证明有该用户
            let username = isExists[0]['username'];
            let result = await deleteOne({ username })
            if (result.ok) {
                res.send({
                    state: true,
                    status: 200,
                    msg: `删除成功！成功删除${result.deletedCount}条数据!`
                })
            } else {
                res.send({
                    state: false,
                    status: 3002,
                    msg: "删除失败!"
                })
            }

        } else {
            res.send({
                state: false,
                status: 3001,
                msg: "抱歉，查无此人！"
            })
        }
    } else {
        res.send({
            state: false,
            status: 3002,
            msg: "查询过程出错！"
        })
    }
}
const updateUsersCtr = async (req, res) => {
    //解构

    let { username, updateField, updateContent } = req.body
    console.log("===?" + updateField)
    //先查询需要更改的用户
    let isExists = await find({ username });
    if (Array.isArray(isExists)) {//查询过程成功返回数组
        if (isExists.length) {//数组有长度证明有该用户

            let result = await updateInfo({ username: username }, { $set: { [updateField]: updateContent } })

            console.log({ username: username }, { $set: { [updateField]: updateContent } })

            res.send(result);
        } else {
            res.send({
                state: false,
                status: 3001,
                msg: "抱歉，查无此人！"
            })
        }
    } else {
        res.send({
            state: false,
            status: 3002,
            msg: "查询过程出错！"
        })
    }

}
//模块导出
module.exports = {
    registCtr,
    loginCtr,
    getAllUsersCtr,
    deleteUsersCtr,
    updateUsersCtr
}