const { schoolInfoCtr } = require("../controller/schoolController")
const schoolRouterArray = [{
  reqType: 'get',
  path: '/school/getSchoolInfo',
  controller: schoolInfoCtr
}]
module.exports = schoolRouterArray
