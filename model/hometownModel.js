const { mongoose } = require("../utils/mongoose");
//创建模型=>相当于使用sql语句建表
const hometownSchema = mongoose.Schema({
    cityName: { type: String, required: true },
    cityImg: { type: String, required: true },
    cityBelong: { type: String, required: true },
    cityDes: { type: Array, required: false },
    playList: { type: Array, require: false },
    eatList: { type: Array, require: false },
})

//实例化模型=>创建集合 创建集合名字一定要自带s不然它会自己在末尾加个s
const hometownCol = mongoose.model('hometowns', hometownSchema);
const hownTownInfo = {
    cityName: "重庆",
    cityImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ad585f4b04e811013e3187641cd5.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655890231&t=bf2f0b2436ac9ac4cbf9c054b97aa984",
    cityBelong: "中华人民共和国直辖市",
    cityDes: [
        "重庆，简称“渝”，别称山城，是中华人民共和国省级行政区、直辖市、国家中心城市、超大城市，国务院批复确定的国家重要的中心城市之一、长江上游地区经济中心、国家重要先进制造业中心、西部金融中心、西部国际综合交通枢纽和国际门户枢纽。截至2021年底，下辖26个区、8个县、4个自治县，总面积8.24万平方千米，常住人口3212.43万人",
        "重庆地处中国内陆西南部，介于东经105°11'—110°11'、北纬28°10'—32°13'，是长江上游地区的经济、金融、科创、航运和商贸物流中心，国家物流枢纽，西部大开发重要的战略支点、“一带一路”和长江经济带重要联结点及内陆开放高地、山清水秀美丽之地；既以江城、雾都、桥都著称，又以山城扬名。重庆以汉族为主，少数民族主要有土家族、苗族等。有洪崖洞、长江三峡、世界遗产大足石刻、武隆喀斯特等景观",
        "重庆是国家历史文化名城。1189年，宋光宗赵惇先封恭王再即帝位，升恭州为重庆府，重庆由此得名。重庆是“红岩精神”起源地，巴渝文化发祥地，“火锅”、“吊脚楼”等影响深远；在文字记载的3000余年中，曾三为国都，四次筑城，史称“巴渝”；抗战时期为国民政府陪都",
        "重庆作为西南地区最大的工商业城市，工业互联网标识解析国家顶级节点，截至2021年底，建有中科院重庆科学中心、北京大学重庆大数据研究院等科研平台104所，在渝高校69所，中国（重庆）自由贸易试验区、中新（重庆）战略性互联互通示范项目、两江新区、西部陆海新通道等战略项目"
    ],
    playList: [
        {
            "sceneryArea": "重庆市",
            "scenery": "洪崖洞、长江索道、磁器口、解放碑、李子坝轻轨",
            "sceneryImageList": [
                "http://yjwwj.itzjj.cn/uploads/userfiles/30/images/pageimg/20200606/30-20060609524L.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/30/images/pageimg/20210327/30-21032G511521.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/1/images/pageimg/20200622/1-2006221405049.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/2709/images/pageimg/20200818/2709-200QP950229.jpg"
            ]
        },
        {
            "sceneryArea": "奥陶纪园",
            "scenery": "高空漫步、云端廊桥、玻璃桥、悬崖秋千",
            "sceneryImageList": [
                "https://img2.baidu.com/it/u=3837247802,1798577529&fm=253&fmt=auto&app=138&f=PNG?w=440&h=260",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ytszg.com%2Ffile%2FnewsImg%2Fimage%2F20200508%2F20200508153421_0431.jpg&refer=http%3A%2F%2Fwww.ytszg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655973845&t=9ea7e35ff0e4795b6df7b2de6e5194cd",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1-q.mafengwo.net%2Fs18%2FM00%2F4A%2F07%2FCoUBYGB9F3iAGGFpAA9JgLafFwI163.png%3FimageMogr2%252Fthumbnail%252F%21440x260r%252Fgravity%252FCenter%252Fcrop%252F%21440x260%252Fquality%252F100&refer=http%3A%2F%2Fp1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655973845&t=8f48dbeecd7d2cf7be96cf810ef8db6e",
                "https://img0.baidu.com/it/u=2480453035,4191708852&fm=253&fmt=auto&app=138&f=JPG?w=662&h=500"
            ]
        },
        {
            "sceneryArea": "武隆景区",
            "scenery": "天生三桥、龙水峡地缝、仙女山，国家AAAAA景区",
            "sceneryImageList": [
                "http://yjwwj.itzjj.cn/uploads/userfiles/2709/images/pageimg/20200818/2709-200QP9512Y.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/30/images/pageimg/20210327/30-21032G511521.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/30/images/pageimg/20210327/30-21032G510328.jpg",
                "http://yjwwj.itzjj.cn/uploads/userfiles/2709/images/pageimg/20200818/2709-200QP950229.jpg"
            ]
        }
    ],
    eatList: [
        {
            "eatName": "毛血旺",
            "eatImg": "https://img1.baidu.com/it/u=2818896431,1150756753&fm=253&fmt=auto&app=138&f=JPEG?w=692&h=500",
            "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
            "videoTitle": "READY FOR TOMORROW"
        },
        {
            "eatName": "毛血旺",
            "eatImg": "https://img1.baidu.com/it/u=2818896431,1150756753&fm=253&fmt=auto&app=138&f=JPEG?w=692&h=500",
            "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
            "videoTitle": "READY FOR TOMORROW"
        },
        {
            "eatName": "毛血旺",
            "eatImg": "https://img1.baidu.com/it/u=2818896431,1150756753&fm=253&fmt=auto&app=138&f=JPEG?w=692&h=500",
            "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
            "videoTitle": "READY FOR TOMORROW"
        },
        {
            "eatName": "毛血旺",
            "eatImg": "https://img1.baidu.com/it/u=2818896431,1150756753&fm=253&fmt=auto&app=138&f=JPEG?w=692&h=500",
            "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
            "videoTitle": "READY FOR TOMORROW"
        }
    ]

}

//定义一个插入数据的函数

// let Col = new hometownCol(hownTownInfo);
// Col.save()
//     .then(res => {
//         return res;
//     })
//     .catch(err => {
//         console.log(err);
//         return false;
//     })

const getHometownInfo = () => {
    return hometownCol.find()
        .then(res => res)
        .catch(err => {
            if (err) { throw err }
            return false;
        })
}
module.exports = {
    getHometownInfo
}