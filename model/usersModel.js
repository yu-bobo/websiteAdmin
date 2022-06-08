const { mongoose } = require("../utils/mongoose");
const { connection } = require("mongoose");
const { query } = require("express");
//创建模型=>相当于使用sql语句建表
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    sex: { type: Number, required: false },
    age: { type: Number, required: false },
    nickname: { type: String, required: false },
})

//实例化模型=>创建集合 创建集合名字一定要自带s不然它会自己在末尾加个s
const Collection = mongoose.model('users', userSchema);

//定义一个插入数据的函数
const registM = (userinfo = {}) => {
    let Col = new Collection(userinfo);
    return Col.save()
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            return false;
        })
}
//定义一个find方法用于查询
const find = (query) => {
    return Collection.find(query)
        .then(res => res)
        .catch(err => {
            if (err) { throw err }
            return false;
        })
}
//定义一个删除用户的方法
const deleteOne = (query) => {
    return Collection.deleteOne(query)
        .then(res => res)
        .catch(err => {
            if (err) { throw err }
            return false;
        })
}
//定义一个修改用户信息的方法
const updateInfo = (query) => {
    console.log("===>" + query)
    // db.users.update({username:"lbw"},{$set:{email:"lbw2@qq.com"}})
    return Collection.updateOne(query)
        .then(res => res)
        .catch(err => {
            if (err) { throw err }
            return false;
        })
}

module.exports = {
    registM,
    find,
    deleteOne,
    updateInfo
}
