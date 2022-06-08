var express = require('express');
var router = express.Router();
const homeRouter = require('./hometowns');
const usersRouter = require('./users');
const allRouterArray = [homeRouter, usersRouter]
const initRouter = (app) => {
    allRouterArray.forEach(element => {
        app.use('/', element.map(item => {
            return router[item.reqType](item.path, item.controller)
        }))
    });
}
module.exports = { initRouter }