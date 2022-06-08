var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let auth = require("./middleware/auth")
const {initRouter} = require('./routes/index')
const session = require("express-session")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());//响应的数据格式是json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*', function (req, res, next) {
  //允许客户端携带认证(比如:cookie)
  res.header("Access-Control-Allow-Credentials", "true")
  //允许访问当前服务器的源
  res.header("Access-Control-Allow-Origin", "*")
  //允许的请求头
  res.header("Access-Control-Allow-Headers", "authorization,Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat', //加密的字符串，里面内容可以随便写
  resave: false,//强制保存session,即使它没变化
  saveUninitialized: true, //只要访问服务器,就生成session,如果为ture就是对session对象赋值了才会保存
  cookie: { maxAge: 1000 * 20 }//过期时间
}));

//中间件就是一个函数
app.use(auth())

// 注册路由接口
initRouter(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
