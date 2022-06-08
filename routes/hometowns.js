
const { hometownInfoCtr } = require("../controller/hometownController");
const hometownRouterArray = [{
    reqType: 'get',
    path: '/hometown/getHometownInfo',
    controller: hometownInfoCtr
}]
module.exports = hometownRouterArray;
