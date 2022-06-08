const { getHometownInfo } = require("../model/hometownsModel")
//获取所有信息
const hometownInfoCtr = async (req, res) => {
    let result = await getHometownInfo();
    res.send({
        state: true,
        status: 200,
        data: result
    })
}
//模块导出
module.exports = {
    hometownInfoCtr
}