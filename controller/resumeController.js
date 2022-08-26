const { getResumeInfo } = require("../model/resumeModel");
//获取所有信息
const resumeInfoCtr = async (req, res) => {
  let result = await getResumeInfo();
  res.send({
    state: true,
    status: 200,
    data: result,
  });
};
//模块导出
module.exports = {
  resumeInfoCtr,
};
