var express = require("express")
var router = express.Router()
const homeRouter = require("./hometowns")
const usersRouter = require("./users")
const resumeRouter = require("./resume")
const schoolRouterArray = require("./school")
const allRouterArray = [homeRouter, usersRouter, resumeRouter, schoolRouterArray]
const initRouter = (app) => {
  allRouterArray.forEach((element) => {
    app.use(
      "/",
      element.map((item) => {
        return router[item.reqType](item.path, item.controller)
      })
    )
  })
}
module.exports = { initRouter }
