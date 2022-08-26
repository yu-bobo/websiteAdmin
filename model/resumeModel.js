const { mongoose } = require("../utils/mongoose")
const resumeSchema = mongoose.Schema({
  basicInfo: { type: Object, required: true },
  eduExperience: { type: Array, required: true },
  workExperience: { type: Array, required: true },
})

const resumeCol = mongoose.model("resumes", resumeSchema)
// const resumeInfo = {
//   basicInfo: {
//     name: "xxx",
//     age: "25",
//     tel: "15859866589",
//     gender: "男",
//     hobby: "xxx",
//     birthday: "1997.08.05",
//     workStatus: "在岗考虑机会",
//     idCardType: "身份证",
//     idCardNum: "xxxxxxxxxxxxxxxxxx",
//     maritalStatus: "未婚未孕",
//     emergencyContact: "xxxx",
//     emergencyContactTel: "12058966587",
//     householdRegistration: "xxxxxxxxxxx",
//     registerType: "农村",
//     nativePlace: "重庆",
//     nation: "汉族",
//     homeAddress: "xxxxxx",
//   },
//   eduExperience: [
//     {
//       entranceTime: "xxxx-xx-xx",
//       graduateTime: "xxxx-xx-xx",
//       schoolName: "xxxx",
//       stage: "本科",
//       major: "xxxxxxxx",
//     },
//   ],
//   workExperience: [
//     {
//       level: "入",
//       time: "2019-11-12",
//       companyName: "南通启智网络有限公司",
//       positionName: "前端开发工程师",
//       status: "0",
//     },
//     {
//       level: "转",
//       time: "2020-03-12",
//       companyName: "南通启智网络有限公司",
//       positionName: "前端开发工程师",
//       status: "1",
//     },
//     {
//       level: "离",
//       time: "2020-09-20",
//       companyName: "南通启智网络有限公司",
//       positionName: "前端开发工程师",
//       status: "2",
//     },
//   ],
// }
// const collection = new resumeCol(resumeInfo)
// collection
//   .save()
//   .then((res) => {
//     return res
//   })
//   .catch((err) => {
//     console.log(err)
//     return false
//   })
const getResumeInfo = () => {
  return resumeCol
    .find()
    .then((res) => res[0])
    .catch((err) => {
      if (err) {
        throw err
      }
      return false
    })
}
module.exports = {
  getResumeInfo,
}
