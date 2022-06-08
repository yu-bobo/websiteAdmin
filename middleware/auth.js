const jwt = require("jsonwebtoken");
const auth = (...param) => (req, res, next) => {
    //判断什么时候需要校验token
    if (req.path === "/users/login" || req.path === "/users/regist" || req.path === "/users/deleteUsers" || req.path === "/users/getAllUsers" || req.path === '/hometown/getHometownInfo') {
        //登录注册不需要要校验
        next();
    }
    else {
        //jwt校验
        /*  let token =req.body["authorization"]||req.query["authorization"]||
         req.headers["authorization"];
         let secret = 'MY_NAME_IS_KANGKANG';
         jwt.verify(token,secret,(err,decode)=>{
             if(err){
                 //校验不通过
                 res.send({
                     state:false,
                     status:3002,
                     msg:"校验失败！"
                 })
             }else{
                 //校验通过放行
                 next();
             }
         }) */

        //session校验
        //只要判断一下session里面是否有userInfo就知道用户是否登入
        if (req.session && req.session.userInfo) {
            console.log(req.session)
            if (req.path !== "/users/verify") {
                next()
            } else {
                res.send({ status: 1, state: true, msg: "欢迎" + req.session.userInfo.username + "再次回来" })
            }
        } else {
            res.send({ status: 0, state: false, msg: "session失效，请重新登入" })
        }
    }
}


module.exports = auth;