const { getSchoolInfo } = require("../model/schoolModel")
//获取所有信息
const schoolInfoCtr = async (req, res) => {
    let result = await getSchoolInfo()
    res.send({
        state: true,
        status: 200,
        data: result
    })
}
//模块导出
module.exports = {
    schoolInfoCtr
}