const mongoose = require('mongoose');

//连接mongo服务器

mongoose.connect("mongodb://localhost:27017/website", { useNewUrlParser: true, useUnifiedTopology: true })

//mongoose连接会返回一个待定的状态

const db = mongoose.connection;

//使用on方法监听是否连接成功

db.on('open', function () {
    console.log('数据库连接成功')
})

db.on('error', function (err) {
    throw err
})
module.exports = {
    mongoose,
    db
}
