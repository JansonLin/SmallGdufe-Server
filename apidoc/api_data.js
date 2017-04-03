define({ "api": [
  {
    "type": "post",
    "url": "card/consume-today",
    "title": "获取校园卡当日交易记录",
    "version": "1.0.0",
    "name": "consume_today",
    "group": "Card",
    "description": "<p>获取校园卡当日交易记录，含充值和消费等（0点跨日）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cardNum",
            "description": "<p>校园卡卡号（可从current-cash获取）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>交易记录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.time",
            "description": "<p>交易时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.shop",
            "description": "<p>交易商户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.change",
            "description": "<p>交易额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cash",
            "description": "<p>交易后的余额</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"time\":\"2017/03/10 17:34:34\",\"shop\":\"广州校区第二食堂\",\"change\":\"-11.60\",\"cash\":\"141.02\"},{\"time\":\"2017/03/10 11:34:54\",\"shop\":\"广州校区二饭堂合作方\",\"change\":\"-7.00\",\"cash\":\"152.62\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "4000",
            "description": "<p>校园卡卡号为空 / 缺少<code>cardNum</code>参数</p>"
          }
        ]
      }
    },
    "filename": "controllers/CardController.php",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "card/current-cash",
    "title": "获取校园卡余额",
    "version": "1.0.0",
    "name": "current_cash",
    "group": "Card",
    "description": "<p>获取校园卡卡号和余额</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>校园卡状况</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cardNum",
            "description": "<p>校园卡卡号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cash",
            "description": "<p>当前余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cardState",
            "description": "<p>卡状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.checkState",
            "description": "<p>检查状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lossState",
            "description": "<p>挂失状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.freezeState",
            "description": "<p>冻结状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"cash\":\"152.62\",\"cardState\":\"正常\",\"checkState\":\"正常\",\"lossState\":\"正常\",\"freezeState\":\"正常\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/CardController.php",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "info/few-sztz",
    "title": "获取素拓信息",
    "version": "1.0.0",
    "name": "few_sztz",
    "group": "Info",
    "description": "<p>获取素拓学分信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>各模块素拓学分情况</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>素拓模块名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.requireScore",
            "description": "<p>所需最少学分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.score",
            "description": "<p>已修学分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"name\":\"身心素质\",\"requireScore\":\"1.5\",\"score\":\"4.4\"},{\"name\":\"文化艺术素质\",\"requireScore\":\"1.5\",\"score\":\"6.8\"},{\"name\":\"技能素质\",\"requireScore\":\"1.5\",\"score\":\"4.9\"},{\"name\":\"思想品德素质\",\"requireScore\":\"2.0\",\"score\":\"9.2\"},{\"name\":\"创新创业素质\",\"requireScore\":\"2.5\",\"score\":\"8.0\"},{\"name\":\"任选\",\"requireScore\":\"1.0\",\"score\":\"0.0\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/InfoController.php",
    "groupTitle": "Info"
  },
  {
    "type": "post",
    "url": "info/info-tips",
    "title": "获取每日提醒信息",
    "version": "1.0.0",
    "name": "info_tips",
    "group": "Info",
    "description": "<p>信息门户右上角那个提醒信息，目前未被使用，返回部分的官方信息，官方完整里有sql语句</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>从官方处截取部分的提醒信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>id，不明用途</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sequenceNumber",
            "description": "<p>序列号，不明用途</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>标题，含模块信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.linkUrl",
            "description": "<p>对应的跳转的链接</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"id\":\"41\",\"sequenceNumber\":\"3\",\"title\":\"【财务收费】\",\"description\":\"无提醒信息\",\"linkUrl\":\"http://cw.gdufe.edu.cn/KfWeb/LoginInterface.aspx\"},{\"id\":\"101\",\"sequenceNumber\":\"7\",\"title\":\"【一卡通】\",\"description\":\"您截止到昨天的余额是<span>167.12</span>元。\",\"linkUrl\":\"http://cardinfo.gdufe.edu.cn/gdcjportalHome.action\"},{\"id\":\"21\",\"sequenceNumber\":\"10\",\"title\":\"【学工系统】\",\"description\":\"无提醒信息\",\"linkUrl\":\"http://xg.gdufe.edu.cn/epstar\"},{\"id\":\"121\",\"sequenceNumber\":\"11\",\"title\":\"【图书馆】\",\"description\":\"您共借阅<font color=\\\"red\\\"><span>0</span></font>本书。\",\"linkUrl\":\"http://opac.library.gdufe.edu.cn/reader/hwthau.php\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/InfoController.php",
    "groupTitle": "Info"
  },
  {
    "type": "post",
    "url": "jwc/get-cet",
    "title": "获取四六级成绩",
    "version": "1.0.0",
    "name": "get_cet",
    "group": "Jwc",
    "description": "<p>获取四六级成绩，只能查询最近一次的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zkzh",
            "description": "<p>准考证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xm",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>四六级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>英语四级/英语六级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cetId",
            "description": "<p>准考证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.score",
            "description": "<p>总分数，若作弊或小于220则全部成绩显示0分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.listenScore",
            "description": "<p>听力分数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.readScore",
            "description": "<p>阅读分数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.writeScore",
            "description": "<p>写作分数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"name\":\"某某某\",\"school\":\"广东财经大学\",\"level\":\"英语六级\",\"cetId\":\"440100162200601\",\"score\":\"0\",\"listenScore\":\"0\",\"readScore\":\"0\",\"writeScore\":\"0\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "5300",
            "description": "<p>手抖输错准考证号或者姓名了吧</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "5301",
            "description": "<p>考号或者名字为空</p>"
          }
        ]
      }
    },
    "filename": "controllers/JwcController.php",
    "groupTitle": "Jwc"
  },
  {
    "type": "post",
    "url": "jwc/get-xiaoli",
    "title": "获取校历、上课时间表",
    "version": "1.0.0",
    "name": "get_xiaoli",
    "group": "Jwc",
    "description": "<p>从教务处获取校历、上课时间表图片地址url</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>url地址集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.timeTable",
            "description": "<p>课时间表图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.xiaoLi",
            "description": "<p>校历图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"timeTable\":\"http://jwc.gdufe.edu.cn/attach/2016/10/20/769667.jpg\",\"xiaoLi\":\"http://jwc.gdufe.edu.cn/attach/2016/10/20/769666.jpg\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/JwcController.php",
    "groupTitle": "Jwc"
  },
  {
    "type": "post",
    "url": "jw/get-basic",
    "title": "获取个人基本信息",
    "version": "1.0.0",
    "name": "get_basic",
    "group": "Jw",
    "description": "<p>获取学生个人基本信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>教务系统密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>基本信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.department",
            "description": "<p>学院</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.major",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.classroom",
            "description": "<p>班级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.namePy",
            "description": "<p>姓名拼音</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.party",
            "description": "<p>政治面貌</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.education",
            "description": "<p>学历</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"department\":\"信息学院\",\"major\":\"计算机科学与技术\",\"classroom\":\"2013计算机科学与技术2班\",\"name\":\"韩裕光\",\"sex\":\"男\",\"namePy\":\"Han Yuguang\",\"birthday\":\"19950124\",\"party\":\"群众\",\"nation\":\"汉族\",\"education\":\"普通本科\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "异常返回",
          "content": "{\"code\":3000,\"msg\":\"学号或者密码为空\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/JwController.php",
    "groupTitle": "Jw"
  },
  {
    "type": "post",
    "url": "jw/get-grade",
    "title": "获取成绩",
    "version": "1.0.0",
    "name": "get_grade",
    "group": "Jw",
    "description": "<p>获取成绩</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>教务系统密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stu_time",
            "description": "<p>可选，学年学期，格式：2014-2015-2，默认返回整个大学（全部已修学期）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>成绩单列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.time",
            "description": "<p>学年学期，格式：2014-2015-2</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.score",
            "description": "<p>总分，优良中差对应返回98，85，75，65</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.credit",
            "description": "<p>学分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"time\":\"2013-2014-2\",\"name\":\"大学英语IIb\",\"score\":83,\"credit\":4},{\"time\":\"2013-2014-2\",\"name\":\"程序设计课程设计\",\"score\":95,\"credit\":2}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "异常返回",
          "content": "{\"code\":3001,\"msg\":\"学号或密码错误\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/JwController.php",
    "groupTitle": "Jw"
  },
  {
    "type": "post",
    "url": "jw/get-schedule",
    "title": "获取课程表",
    "version": "1.0.0",
    "name": "get_schedule",
    "group": "Jw",
    "description": "<p>获取课程表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>教务系统密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stu_time",
            "description": "<p>可选，学年学期，格式：2014-2015-2，默认返回当前学期</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "split",
            "description": "<p>可选，是否拆分连堂的课程，默认为0表示不拆分（连堂则合并成一个课程）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>课程表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.teacher",
            "description": "<p>上课老师，含职位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.period",
            "description": "<p>上课周数，非连续周则逗号分隔</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.location",
            "description": "<p>上课教室</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.dayInWeek",
            "description": "<p>周几</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.startSec",
            "description": "<p>开始小节，最小为1</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.endSec",
            "description": "<p>结束小节，最大为12</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"name\":\"计算机系统结构\",\"teacher\":\"陈某某副教授\",\"period\":\"1-16(周)\",\"location\":\"拓新楼(SS1)334\",\"dayInWeek\":1,\"startSec\":1,\"endSec\":2},{\"name\":\"形势与政策\",\"teacher\":\"黄某讲师（高校）\",\"period\":\"11(单周),15(单周),7(单周)\",\"location\":\"综合楼107\",\"dayInWeek\":2,\"startSec\":5,\"endSec\":8}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "异常返回",
          "content": "{\"code\":3000,\"msg\":\"学号或者密码为空\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/JwController.php",
    "groupTitle": "Jw"
  },
  {
    "type": "post",
    "url": "opac/borrowed-book",
    "title": "获取历史借阅书籍",
    "version": "1.0.0",
    "name": "borrowed_book",
    "group": "Opac",
    "description": "<p>历史借阅书籍，目前只返回一页的结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>当前借阅的书籍结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.barId",
            "description": "<p>条码号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.borrowedTime",
            "description": "<p>借阅时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.returnTime",
            "description": "<p>已归还时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.renewTimes",
            "description": "<p>已续借次数，仅为与当前借阅统一用，固定返回999</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.location",
            "description": "<p>馆藏地</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"barId\":\"S1101752\",\"name\":\"深入理解Java虚拟机:JVM高级特性与最佳实践\",\"author\":\"周志明著\",\"borrowedTime\":\"2016-10-11\",\"returnTime\":\"2016-12-10\",\"renewTimes\":999,\"location\":\"广州校区自然科学图书区(N-Z类)\"},{\"barId\":\"S1282556\",\"name\":\"HTML 5用户指南\",\"author\":\"(美)Bruce Lawson,(美)Remy Sharp著\",\"borrowedTime\":\"2016-07-12\",\"returnTime\":\"2016-10-07\",\"renewTimes\":999,\"location\":\"广州校区自然科学图书区(N-Z类)\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "opac/current-book",
    "title": "获取当前借阅书籍",
    "version": "1.0.0",
    "name": "current_book",
    "group": "Opac",
    "description": "<p>当前借阅书籍，目前只返回一页的结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>当前借阅的书籍结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.barId",
            "description": "<p>条码号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.borrowedTime",
            "description": "<p>借阅时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.returnTime",
            "description": "<p>应归还时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.renewTimes",
            "description": "<p>已续借次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.location",
            "description": "<p>馆藏地</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>续借时用到的码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"barId\":\"S1101752\",\"name\":\"深入理解Java虚拟机:JVM高级特性与最佳实践\",\"author\":\"周志明著\",\"borrowedTime\":\"2016-12-10\",\"returnTime\":\"2017-04-06\",\"renewTimes\":1,\"location\":\"广州校区自然科学图书区(N-Z类)\",\"checkId\":\"806D39EB\"},{\"barId\":\"S1604030\",\"name\":\"TCP/IP详解\",\"author\":\"(美)[W.R.史蒂文斯]W.Richard Stevens著\",\"borrowedTime\":\"2016-12-10\",\"returnTime\":\"2017-04-06\",\"renewTimes\":1,\"location\":\"广州校区自然科学图书区(N-Z类)\",\"checkId\":\"F43A0181\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "opac/get-book-store-detail",
    "title": "获取书本馆藏和借阅状态",
    "version": "1.0.0",
    "name": "get_book_store_detail",
    "group": "Opac",
    "description": "<p>返回书本馆藏和借阅状态，从详细信息页获取的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "macno",
            "description": "<p>查看书本详细信息时用到的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.barId",
            "description": "<p>条码号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.serial",
            "description": "<p>序列号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.volume",
            "description": "<p>年卷期，有&quot;-&quot;，&quot;&quot;的情况</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.location",
            "description": "<p>馆藏地</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.state",
            "description": "<p>可借状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "[{\"barId\":\"S1836879\",\"serial\":\"TP312JA/1077\",\"volume\":\"-\",\"location\":\"广州校区自然科学图书区(N-Z类)\",\"state\":\"可借\"},{\"barId\":\"S1836880\",\"serial\":\"TP312JA/1077\",\"volume\":\"-\",\"location\":\"三水校区自然科学阅览区\",\"state\":\"借出-应还日期：2017-04-06\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3302",
            "description": "<p>没有macno参数你也想看书本详情</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "opac/get-renew-book-verify",
    "title": "获取续借的验证码",
    "version": "1.0.0",
    "name": "get_renew_book_verify",
    "group": "Opac",
    "description": "<p>获取续借的验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data",
            "description": "<p>验证码图片的base64编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"data\":\"R0lGODdhPAAkAIAAAAQCBNTWzCwAAAAAPAAkAAACdIyPqcvtD6OctNqLs968+w+G4kiW5omm6sq27osB8gwodM3IOW3pjR8AIngJoDByfBx9ySJOopspnwZhs0pFMrMHqXPIDV4p4yW1HCanseD2b72wws1sx3hX7z6bRLf40gfmFZd2A3OImKi4yNjo+AgZaVEAADs=\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "opac/renew-book",
    "title": "续借图书",
    "version": "1.0.0",
    "name": "renew_book",
    "group": "Opac",
    "description": "<p>续借图书</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>信息门户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barId",
            "description": "<p>条码号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkId",
            "description": "<p>不知道什么东西，在当前借阅页面里可获取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verify",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>当前借阅的书籍结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data",
            "description": "<p>续借成功、超过最大续借次数，不得续借！、错误的验证码(wrong check code)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{\"data\":\"续借成功\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3000",
            "description": "<p>学号或者密码为空</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3001",
            "description": "<p>学号或密码错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3301",
            "description": "<p>参数不完整续借无力</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "opac/search-book",
    "title": "获取书籍搜索结果",
    "version": "1.0.0",
    "name": "search_book",
    "group": "Opac",
    "description": "<p>返回书籍搜索结果，目前只返回一页的结果，搜索方式为题目-前方一致，已过滤了serial为空（没馆藏）的情况</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>书名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>书籍搜索结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.serial",
            "description": "<p>序列号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.numAll",
            "description": "<p>库藏总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.numCan",
            "description": "<p>可借数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.publisher",
            "description": "<p>出版社</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.macno",
            "description": "<p>查看书本详细信息时用到的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":[{\"name\":\"解忧杂货店\",\"serial\":\"I313.45/1093\",\"numAll\":4,\"numCan\":0,\"author\":\"(日) 东野圭吾著\",\"publisher\":\"南海出版公司 2014\",\"macno\":\"0000422093\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "3300",
            "description": "<p>书名为空</p>"
          }
        ]
      }
    },
    "filename": "controllers/OpacController.php",
    "groupTitle": "Opac"
  },
  {
    "type": "post",
    "url": "work/check-app-update",
    "title": "检查更新",
    "version": "1.0.0",
    "name": "check_app_update",
    "group": "Work",
    "description": "<p>检查更新，返回最新版更新信息和下载地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "original",
            "description": "<p>预留的额外信息，目前未使用</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "forced",
            "description": "<p>是否强制更新</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateContent",
            "description": "<p>更新提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateUrl",
            "description": "<p>apk下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "updateTime",
            "description": "<p>新版发布时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "versionCode",
            "description": "<p>版本号（内部使用）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "versionName",
            "description": "<p>版本名，给用户看的</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "ignore",
            "description": "<p>是否可忽略该版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"original\":\"\",\"forced\":false,\"updateContent\":\"1.实现Dr.com\\n2.增加自动更新\\n3.实现头像图标\\n\",\"updateUrl\":\"http://www.wintercoder.com:82/index.php?r=work/update\",\"updateTime\":1490270887,\"versionCode\":1,\"versionName\":\"1.0.0\",\"ignore\":false}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/WorkController.php",
    "groupTitle": "Work"
  },
  {
    "type": "post",
    "url": "work/feedback",
    "title": "反馈",
    "version": "1.0.0",
    "name": "feedback",
    "group": "Work",
    "description": "<p>反馈，将存入服务器数据库</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sno",
            "description": "<p>学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>反馈内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0为正常返回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息，code非0时有错误信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>空Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常返回",
          "content": "{\"code\":0,\"msg\":\"\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "1002",
            "description": "<p>反馈内容太长啦</p>"
          }
        ]
      }
    },
    "filename": "controllers/WorkController.php",
    "groupTitle": "Work"
  },
  {
    "type": "post",
    "url": "work/update",
    "title": "最新版apk下载",
    "version": "1.0.0",
    "name": "update",
    "group": "Work",
    "description": "<p>返回最新版apk文件，访问一下就能下载</p>",
    "filename": "controllers/WorkController.php",
    "groupTitle": "Work"
  }
] });
