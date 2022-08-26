const { resumeInfoCtr } = require("../controller/resumeController");
const hometownRouterArray = [
  {
    reqType: "get",
    path: "/resume/getResumeInfo",
    controller: resumeInfoCtr,
  },
];
module.exports = hometownRouterArray;
