/**
 * Created by A on 2019/3/19.
 */
//登录
let loginArray; //存储登录用户账号和密码；
let loginVerify,stuArr=[],claArr=[];
login();

function login() {
    //登录用户与职位关联，即loginArray与workArray中的"workId",根据"workId"来判别登录用户的权限
    loginArray = [
        {"loginId": 1, "workId": 1, "workName": "秘书长", "loginName": "SecretaryGeneral", "loginPassword": "12345"},//秘书长
        {"loginId": 2, "workId": 2, "workName": "经理", "loginName": "manager", "loginPassword": "12345"},//经理
        {"loginId": 3, "workId": 3, "workName": "助理", "loginName": "assistant", "loginPassword": "12345"},//助理
        {"loginId": 4, "workId": 4, "workName": "职员", "loginName": "StaffMember", "loginPassword": "12345"}//职员
    ];
    loginVerify = [
        {loginName: 'SecretaryGeneral', loginPassword: '12345'},
        {loginName: 'manager', loginPassword: '12345'},
        {loginName: 'assistant', loginPassword: '12345'},
        {loginName: 'StaffMember', loginPassword: '12345'}
    ]
}


//资料管理
//员工管理
let employeeArray;  //存储员工信息
employeeArrayInit();

function employeeArrayInit() {
    //员工与部门关联，即employeeArray与depotArray中的"depotId"，根据"depotId"来查询员工的部门名称"depotName"
    // 员工与职位关联，即employeeArray与workArray中的"workId"，根据"workId"来查询员工的职位名称"workName"
    employeeArray = [
        {
            "empId": 1,
            "empName": "张三",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 2,
            "empName": "张2",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 3,
            "depotName": "财务部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 3,
            "empName": "张3",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 4,
            "empName": "张4",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 3,
            "depotName": "财务部",
            "workId": 1,
            "workName": "秘书长",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 5,
            "empName": "张5",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 3,
            "depotName": "财务部",
            "workId": 1,
            "workName": "秘书长",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 6,
            "empName": "张6",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "高中",
            "empTel": "13392876531",
            "depotId": 3,
            "depotName": "财务部",
            "workId": 1,
            "workName": "秘书长",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 7,
            "empName": "张7",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 8,
            "empName": "张8",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 9,
            "empName": "张9",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 10,
            "empName": "李1",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 11,
            "empName": "李2",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 12,
            "empName": "李3",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 13,
            "empName": "李4",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 14,
            "empName": "李5",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 15,
            "empName": "李6",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 16,
            "empName": "李7",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 17,
            "empName": "李8",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 18,
            "empName": "李9",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 19,
            "empName": "李10",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 20,
            "empName": "李11",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        },
        {
            "empId": 21,
            "empName": "李12",
            "empSex": "男",
            "empBirth": "1990-10-1",
            "empEducation": "大学本科",
            "empTel": "13392876531",
            "depotId": 1,
            "depotName": "人事部",
            "workId": 2,
            "workName": "经理",
            "empMajor": "计算机",
            "empAddress": "成都高新",
            "empOutlook": "党员",
            "empEntryTime": "2000-1-1"
        }
    ]
}

//部门管理
let depotArray; //存储部门信息
depotArrayInit();

function depotArrayInit() {
    depotArray = [
        {"depotId": 1, "depotName": "人事部2", "depotSetTime": "2006-10-09", "depotDescribe": "管理公司员工入职和离职"},
        {"depotId": 2, "depotName": "市场部", "depotSetTime": "2006-10-09", "depotDescribe": "管理市场销售和业务接洽"},
        {"depotId": 3, "depotName": "财务部", "depotSetTime": "2006-10-09", "depotDescribe": "管理公司财务收入和支出"},
        {"depotId": 4, "depotName": "行政部", "depotSetTime": "2006-10-09", "depotDescribe": "管理公司日常事务和运作"},
        {"depotId": 5, "depotName": "技术部", "depotSetTime": "2019-01-06", "depotDescribe": "负责公司技术支持"}

    ]
}

//职位管理
let workArray;  //存储职位信息
workInit();

function workInit() {
    //是==1，否==0
    workArray = [
        {
            "workName": "秘书长",
            "workDescribe": "对整个公司进行管理",
            "workSearch": "是",
            "workAssessment": "是",
            "workSales": "是",
            "workPrivilege": "是",
            "workBackstage": "是"
        },
        {
            "workName": "经理",
            "workDescribe": "对管理一个部门",
            "workSearch": "是",
            "workAssessment": "是",
            "workSales": "是",
            "workPrivilege": "否",
            "workBackstage": "否"
        },
        {
            "workName": "助理",
            "workDescribe": "辅助部门主管管理部门",
            "workSearch": "是",
            "workAssessment": "否",
            "workSales": "是",
            "workPrivilege": "否",
            "workBackstage": "否"
        },
        {
            "workName": "职员",
            "workDescribe": "执行部门具体业务",
            "workSearch": "是",
            "workAssessment": "否",
            "workSales": "否",
            "workPrivilege": "否",
            "workBackstage": "否"
        }

    ]
}


//学校管理
//学校活动
let activesSchoolArray;//存储学校信息
let activesSchoolDetailArray;//存储学校活动信息
activesSchoolArrayInit();

function activesSchoolArrayInit() {
//    学校活动和学校关联，即activesSchoolArray数组与schoolArray数组中的"SchId"，根据"SchId"来查询"SchName"
    activesSchoolArray = [
        {
            "schId": 1,
            "schName": "成都外国语学校",
            "actSchoolMaster": "彭于晏",
            "actEntryTime": "2010-08-09",
            "actTel": "18930297601"
        },
        {
            "schId": 2,
            "schName": "成都第一中学",
            "actSchoolMaster": "陈冠希",
            "actEntryTime": "2012-01-04",
            "actTel": "13748594837"
        },
        {
            "schId": 3,
            "schName": "成都第三中学",
            "actSchoolMaster": "吴彦祖",
            "actEntryTime": "2003-01-04",
            "actTel": "13558029108"
        },
        {
            "schId": 4,
            "schName": "成都第七中学",
            "actSchoolMaster": "余文乐",
            "actEntryTime": "2010-01-04",
            "actTel": "13558027643"
        },
        {
            "schId": 5,
            "schName": "成都第五中学",
            "actSchoolMaster": "陆林",
            "actEntryTime": "2002-01-04",
            "actTel": "13558021342"
        },
        {
            "schId": 6,
            "schName": "成都外国语学校",
            "actSchoolMaster": "彭于晏",
            "actEntryTime": "2010-08-09",
            "actTel": "18930297601"
        },
        {
            "schId": 7,
            "schName": "成都第一中学",
            "actSchoolMaster": "陈冠希",
            "actEntryTime": "2012-01-04",
            "actTel": "13748594837"
        },
        {
            "schId": 8,
            "schName": "成都第三中学",
            "actSchoolMaster": "吴彦祖",
            "actEntryTime": "2003-01-04",
            "actTel": "13558029108"
        }
    ];
    activesSchoolArrayTwo = [
        {
            "schId": 1,
            "schName": "绵阳外国语学校",
            "actSchoolMaster": "朱彭",
            "actEntryTime": "2010-08-09",
            "actTel": "189333397601"
        },
        {
            "schId": 2,
            "schName": "绵阳第一中学",
            "actSchoolMaster": "廖军",
            "actEntryTime": "2002-01-04",
            "actTel": "13722294837"
        },
        {
            "schId": 3,
            "schName": "绵阳第三中学",
            "actSchoolMaster": "肖向军",
            "actEntryTime": "2018-01-04",
            "actTel": "11118029108"
        }
    ];
    activesSchoolDetailArray = [
        {
            "actId": 1,
            "schId": 1,
            "actDetailName": "多媒体播放",
            "actDetailTime": "2012-04-26",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人类的起源",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 2,
            "schId": 2,
            "actDetailName": "知识竞争",
            "actDetailTime": "2012-04-29",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人性本善",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "吴泰"
        },
        {
            "actId": 3,
            "schId": 3,
            "actDetailName": "多媒体播放",
            "actDetailTime": "2013-04-26",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "生命的起源",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 4,
            "schId": 3,
            "actDetailName": "知识竞争",
            "actDetailTime": "2013-06-29",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人类文化",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 5,
            "schId": 4,
            "actDetailName": "多媒体播放",
            "actDetailTime": "2012-04-26",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人类的起源",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 6,
            "schId": 5,
            "actDetailName": "知识竞争",
            "actDetailTime": "2012-04-29",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人性本善",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "吴泰"
        },
        {
            "actId": 7,
            "schId": 6,
            "actDetailName": "多媒体播放",
            "actDetailTime": "2013-04-26",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "生命的起源",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 8,
            "schId": 7,
            "actDetailName": "知识竞争",
            "actDetailTime": "2013-06-29",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人类文化",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 9,
            "schId": 8,
            "actDetailName": "多媒体播放",
            "actDetailTime": "2012-04-26",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人类的起源",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "赵小峰"
        },
        {
            "actId": 10,
            "schId": 8,
            "actDetailName": "知识竞争",
            "actDetailTime": "2012-04-29",
            "actDetailPlace": "教学大楼三机房",
            "actDetailTitle": "人性本善",
            "actDetailDepot": "推广部",
            "actDetailChargePerson": "吴泰"
        }
    ]
}


//学校管理
let schoolArray;  //学校信息
let schoolComuRecordArray;//沟通记录信息
schoolArrayInit();

function schoolArrayInit() {
    //学校信息和地区信息关联，即schoolArray数组与cityArray数组中的"cityId"
    schoolArray = [
        {
            "schId": 1,
            "schName": "成都外国语学校",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段18号",
            "schTel": "13558029106",
            "schMaster": "朱子明",
            "schStudentsNum": 1200,
            "schTeacherNum": 35,
            "schIP": "61.120.56.98",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "审核通过",
            "schEntryTime": "2010-8-9",
            "schApplyTime": "2010-9-20",
            "schApplyAgreeTime": "2010-10-22",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 2,
            "schName": "成都第一中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段22号",
            "schTel": "13558029107",
            "schMaster": "赵军",
            "schStudentsNum": 1450,
            "schTeacherNum": 43,
            "schIP": "61.120.56.99",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "接洽",
            "schEntryTime": "2010-8-15",
            "schApplyTime": "2011-8-20",
            "schApplyAgreeTime": "",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 3,
            "schName": "绵阳第七中学",
            "cityId": 2,
            "cityName": "绵阳市",
            "schAddress": "绵阳一环路北二段26号",
            "schTel": "13558029109",
            "schMaster": "陆绩",
            "schStudentsNum": 1300,
            "schTeacherNum": 38,
            "schIP": "61.120.56.101",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "待审",
            "schEntryTime": "2010-9-15",
            "schApplyTime": "2012-7-8",
            "schApplyAgreeTime": "",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 4,
            "schName": "绵阳树人中学",
            "cityId": 2,
            "cityName": "绵阳市",
            "schAddress": "绵阳一环路北二段28号",
            "schTel": "13558029110",
            "schMaster": "钱阳",
            "schStudentsNum": 1185,
            "schTeacherNum": 35,
            "schIP": "61.120.56.102",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-22",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 5,
            "schName": "乐山第三中学",
            "cityId": 3,
            "cityName": "乐山市",
            "schAddress": "乐山一环路北二段24号",
            "schTel": "13558029108",
            "schMaster": "肖明",
            "schStudentsNum": 1100,
            "schTeacherNum": 33,
            "schIP": "61.120.56.100",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-9-1",
            "schApplyTime": "2011-8-20",
            "schApplyAgreeTime": "2010-10-22",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 6,
            "schName": "乐山第十二中学",
            "cityId": 3,
            "cityName": "乐山市",
            "schAddress": "乐山一环路北二段26号",
            "schTel": "13558029109",
            "schMaster": "陆绩",
            "schStudentsNum": 1300,
            "schTeacherNum": 38,
            "schIP": "61.120.56.101",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "待审",
            "schEntryTime": "2010-9-15",
            "schApplyTime": "2012-7-8",
            "schApplyAgreeTime": "",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 7,
            "schName": "乐山树人中学",
            "cityId": 3,
            "cityName": "乐山市",
            "schAddress": "乐山一环路北二段28号",
            "schTel": "13558029110",
            "schMaster": "钱阳",
            "schStudentsNum": 1185,
            "schTeacherNum": 35,
            "schIP": "61.120.56.102",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-22",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 8,
            "schName": "内江中学",
            "cityId": 4,
            "cityName": "内江市",
            "schAddress": "内江一环路北二段26号",
            "schTel": "13558029109",
            "schMaster": "陆绩",
            "schStudentsNum": 1300,
            "schTeacherNum": 38,
            "schIP": "61.120.56.101",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "待审",
            "schEntryTime": "2010-9-15",
            "schApplyTime": "2012-7-8",
            "schApplyAgreeTime": "",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 9,
            "schName": "内江第四中学",
            "cityId": 4,
            "cityName": "内江市",
            "schAddress": "内江一环路北二段28号",
            "schTel": "13558029110",
            "schMaster": "钱阳",
            "schStudentsNum": 1185,
            "schTeacherNum": 35,
            "schIP": "61.120.56.102",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-22",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 10,
            "schName": "成都第三中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段22号",
            "schTel": "13558029107",
            "schMaster": "赵军",
            "schStudentsNum": 1450,
            "schTeacherNum": 43,
            "schIP": "61.120.56.99",
            "schDescribe": "实力强劲的重点贵族学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "接洽",
            "schEntryTime": "2010-8-15",
            "schApplyTime": "2011-8-20",
            "schApplyAgreeTime": "",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },{
            "schId": 11,
            "schName": "成都上青中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },
        {
            "schId": 12,
            "schName": "成都第六中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },{
            "schId": 13,
            "schName": "成都中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },{
            "schId": 14,
            "schName": "成都理工学院",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },{
            "schId": 15,
            "schName": "成都东软学院",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        },{
            "schId": 16,
            "schName": "成都光明中学",
            "cityId": 1,
            "cityName": "成都市",
            "schAddress": "成都一环路北二段9656号",
            "schTel": "13558029110",
            "schMaster": "刘考",
            "schStudentsNum": 3645,
            "schTeacherNum": 218,
            "schIP": "61.120.55.1",
            "schDescribe": "实力强劲的学校",
            "schWB": "12MB",
            "schChargeDepot": "市场部",
            "schChargePerson": "周明翔",
            "schState": "推广开展",
            "schEntryTime": "2010-10-10",
            "schApplyTime": "2015-9-25",
            "schApplyAgreeTime": "2010-10-23",
            "schApplyOpinion": "该学校校纪严明，管理得当，符合推广资格"
        }
    ];
    //沟通记录和学校关联，即schoolComuRecordArray数组与schoolArray数组中的"schId"
    schoolComuRecordArray = [
        {
            "schCRId": 1,
            "schId": 1,
            "schName": "成都外国语学校",
            "schCRTime": "2010-8-13",
            "schCRContacts": "朱子明",
            "schCRWork": "校长",
            "schCRComuPerson": "周明翔",
            "schCRContent": "邀请加入四川网脉系统"
        },
        {
            "schCRId": 2,
            "schId": 1,
            "schName": "成都外国语学校",
            "schCRTime": "2010-8-22",
            "schCRContacts": "马斐",
            "schCRWork": "主任",
            "schCRComuPerson": "周明翔",
            "schCRContent": "回访学校，询问学校加入网脉系统意见"
        }
    ]
}


//用户管理
//学生管理
let studentArray; //存储学生信息
let studentReturnVisitRecordArray;  //存储学生回访记录
studentArrayInit();

function studentArrayInit() {
    //学生和学校关联，也和班级关联，即studentArray数组中的"schId"、"ClassName"与schoolArray中的"schId",classArray中的
    studentArray = [
        {
            "stuId": 1,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "李典",
            "stuSex": "男",
            "stuBirth": "1982-2-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745869",
            "stuFather": "李广森",
            "stuFatherTel": "13284394059",
            "stuVIPState": "非会员",
            "stuMother": "姚丽娜",
            "stuMotherTel": "15392039101",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 2,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "孙军",
            "stuSex": "男",
            "stuBirth": "1982-3-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745870",
            "stuFather": "孙荣",
            "stuFatherTel": "13284394060",
            "stuVIPState": "会员",
            "stuMother": "何玲",
            "stuMotherTel": "15392039102",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 3,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "赵师荣",
            "stuSex": "女",
            "stuBirth": "1983-2-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745871",
            "stuFather": "赵德海",
            "stuFatherTel": "13284394061",
            "stuVIPState": "非会员",
            "stuMother": "张丽丽",
            "stuMotherTel": "15392039103",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 4,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "柳随风",
            "stuSex": "男",
            "stuBirth": "1982-1-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745872",
            "stuFather": "柳明",
            "stuFatherTel": "13284394062",
            "stuVIPState": "会员",
            "stuMother": "王娇",
            "stuMotherTel": "15392039104",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 5,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "朱顺水",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 6,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "萧秋水",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 7,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "张倩",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 8,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "朱光",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 9,
            "schId": 1,
            "schName": "成都外国语学校",
            "stuName": "萧风",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 10,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "张三",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 11,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "李四",
            "stuSex": "男",
            "stuBirth": "1982-2-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745869",
            "stuFather": "李广森",
            "stuFatherTel": "13284394059",
            "stuVIPState": "非会员",
            "stuMother": "姚丽娜",
            "stuMotherTel": "15392039101",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 12,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "赵六",
            "stuSex": "男",
            "stuBirth": "1982-3-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745870",
            "stuFather": "孙荣",
            "stuFatherTel": "13284394060",
            "stuVIPState": "会员",
            "stuMother": "何玲",
            "stuMotherTel": "15392039102",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 13,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "赵师荣",
            "stuSex": "女",
            "stuBirth": "1983-2-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745871",
            "stuFather": "赵德海",
            "stuFatherTel": "13284394061",
            "stuVIPState": "非会员",
            "stuMother": "张丽丽",
            "stuMotherTel": "15392039103",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 14,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "柳风",
            "stuSex": "男",
            "stuBirth": "1982-1-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745872",
            "stuFather": "柳明",
            "stuFatherTel": "13284394062",
            "stuVIPState": "会员",
            "stuMother": "王娇",
            "stuMotherTel": "15392039104",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 15,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "朱水",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 16,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "秋水",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 17,
            "schId": 2,
            "schName": "成都第一中学",
            "stuName": "张红倩",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 18,
            "schId": 3,
            "schName": "绵阳第七中学",
            "stuName": "朱光",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 19,
            "schId": 3,
            "schName": "绵阳第七中学",
            "stuName": "萧风",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 20,
            "schId": 3,
            "schName": "绵阳第七中学",
            "stuName": "张三",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 21,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "张宏",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 22,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "李爽",
            "stuSex": "男",
            "stuBirth": "1982-2-5",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745869",
            "stuFather": "李广森",
            "stuFatherTel": "13284394059",
            "stuVIPState": "非会员",
            "stuMother": "姚丽娜",
            "stuMotherTel": "15392039101",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 23,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "赵能",
            "stuSex": "男",
            "stuBirth": "1982-3-5",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745870",
            "stuFather": "孙荣",
            "stuFatherTel": "13284394060",
            "stuVIPState": "会员",
            "stuMother": "何玲",
            "stuMotherTel": "15392039102",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 24,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "赵师荣",
            "stuSex": "女",
            "stuBirth": "1983-2-8",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745871",
            "stuFather": "赵德海",
            "stuFatherTel": "13284394061",
            "stuVIPState": "非会员",
            "stuMother": "张丽丽",
            "stuMotherTel": "15392039103",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 25,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "柳风",
            "stuSex": "男",
            "stuBirth": "1982-1-5",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745872",
            "stuFather": "柳明",
            "stuFatherTel": "13284394062",
            "stuVIPState": "会员",
            "stuMother": "王娇",
            "stuMotherTel": "15392039104",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 26,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "朱高水",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 27,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "高哀黄",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 28,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "张书",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 29,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "朱四光",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 30,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "萧长风",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 31,
            "schId": 4,
            "schName": "绵阳树人中学",
            "stuName": "张鹏",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "绵阳市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 10,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "张三三",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 11,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "李四四",
            "stuSex": "男",
            "stuBirth": "1982-2-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745869",
            "stuFather": "李广森",
            "stuFatherTel": "13284394059",
            "stuVIPState": "非会员",
            "stuMother": "姚丽娜",
            "stuMotherTel": "15392039101",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 12,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "赵六六",
            "stuSex": "男",
            "stuBirth": "1982-3-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745870",
            "stuFather": "孙荣",
            "stuFatherTel": "13284394060",
            "stuVIPState": "会员",
            "stuMother": "何玲",
            "stuMotherTel": "15392039102",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 13,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "梨寿司",
            "stuSex": "女",
            "stuBirth": "1983-2-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745871",
            "stuFather": "赵德海",
            "stuFatherTel": "13284394061",
            "stuVIPState": "非会员",
            "stuMother": "张丽丽",
            "stuMotherTel": "15392039103",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 14,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "吴宇凡",
            "stuSex": "男",
            "stuBirth": "1982-1-5",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 1,
            "className": "网脉一班",
            "stuTel": "15283745872",
            "stuFather": "柳明",
            "stuFatherTel": "13284394062",
            "stuVIPState": "会员",
            "stuMother": "王娇",
            "stuMotherTel": "15392039104",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 15,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "雷神",
            "stuSex": "男",
            "stuBirth": "1982-1-6",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 2,
            "className": "网脉二班",
            "stuTel": "15283745873",
            "stuFather": "朱德",
            "stuFatherTel": "13284394063",
            "stuVIPState": "非会员",
            "stuMother": "王梅",
            "stuMotherTel": "15392039105",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 16,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "风暴",
            "stuSex": "男",
            "stuBirth": "1982-1-7",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745874",
            "stuFather": "萧峰",
            "stuFatherTel": "13284394064",
            "stuVIPState": "会员",
            "stuMother": "刘艳丽",
            "stuMotherTel": "15392039106",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
        {
            "stuId": 17,
            "schId": 10,
            "schName": "成都第三中学",
            "stuName": "皮卡丘",
            "stuSex": "女",
            "stuBirth": "1982-1-8",
            "stuAddress": "成都市锣锅巷12号",
            "ClassId": 3,
            "className": "网脉三班",
            "stuTel": "15283745875",
            "stuFather": "张广义",
            "stuFatherTel": "13284394065",
            "stuVIPState": "非会员",
            "stuMother": "李芙蓉",
            "stuMotherTel": "15392039107",
            "stuRemarks": "该学生擅长绘画，曾获得全国书画比赛二等奖"
        },
    ];
    //学生回访记录与学生关联，即studentReturnVisitRecordArray数组与studentArray数组中的"stuId"
    studentReturnVisitRecordArray = [
        {
            "stuRVRId": 1,
            "stuId": 1,
            "stuRVRTime": "2012-3-15",
            "stuRVRCharge": "张三",
            "stuRVRparson": "姚丽娜",
            "stuRVRTitle": "加入网脉班儿子学习情况",
            "stuRVRContent": "学习兴趣增加了"
        },
        {
            "stuRVRId": 2,
            "stuId": 1,
            "stuRVRTime": "2012-3-28",
            "stuRVRCharge": "张三",
            "stuRVRparson": "李典",
            "stuRVRTitle": "对网脉公司看法",
            "stuRVRContent": "加入网脉班让我学到很多知识"
        },
        {
            "stuRVRId": 3,
            "stuId": 1,
            "stuRVRTime": "2012-3-31",
            "stuRVRCharge": "张三",
            "stuRVRparson": "王五",
            "stuRVRTitle": "觉得网脉公司怎么样",
            "stuRVRContent": "网脉公司很好"
        }
    ]
}

//班级管理
let classArray; //存储班级信息
classArrayInit();

function classArrayInit() {
    //班级和学校关联,即classArray数组与schoolArray数组中的"schId"
    classArray = [
        {
            "classId": 1,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉一班",
            "classStartTime": "2010-9-18",
            "classNum": 28,
            "classHeadTeacher": "洪安通"
        },
        {
            "classId": 2,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉二班",
            "classStartTime": "2011-9-22",
            "classNum": 25,
            "classHeadTeacher": "杨晓佳"
        },
        {
            "classId": 3,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉三班",
            "classStartTime": "2011-9-25",
            "classNum": 22,
            "classHeadTeacher": "杨宗治"
        },
        {
            "classId": 4,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉四班",
            "classStartTime": "2011-9-28",
            "classNum": 24,
            "classHeadTeacher": "李广"
        },
        {
            "classId": 5,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉五班",
            "classStartTime": "2011-10-5",
            "classNum": 33,
            "classHeadTeacher": "王佳玲"
        },
        {
            "classId": 6,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉六班",
            "classStartTime": "2011-10-8",
            "classNum": 35,
            "classHeadTeacher": "李秋水"
        },
        {
            "classId": 7,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉七班",
            "classStartTime": "2011-10-15",
            "classNum": 38,
            "classHeadTeacher": "王子奇"
        },
        {
            "classId": 8,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉八班",
            "classStartTime": "2011-11-01",
            "classNum": 40,
            "classHeadTeacher": "侯德伟"
        },
        {
            "classId": 9,
            "schId": 1,
            "schName": "成都外国语学校",
            "classIdName": "网脉九班",
            "classStartTime": "2011-11-01",
            "classNum": 40,
            "classHeadTeacher": "侯德光"
        },
        {
            "classId": 10,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉一班",
            "classStartTime": "2010-9-18",
            "classNum": 35,
            "classHeadTeacher": "伍齐"
        },
        {
            "classId": 11,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉二班",
            "classStartTime": "2011-9-22",
            "classNum": 33,
            "classHeadTeacher": "刘军"
        },
        {
            "classId": 12,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉三班",
            "classStartTime": "2011-9-25",
            "classNum": 27,
            "classHeadTeacher": "张淑玲"
        },
        {
            "classId": 13,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉四班",
            "classStartTime": "2010-9-18",
            "classNum": 40,
            "classHeadTeacher": "伍佳琪"
        },
        {
            "classId": 14,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉五班",
            "classStartTime": "2011-9-22",
            "classNum": 44,
            "classHeadTeacher": "刘玲玲"
        },
        {
            "classId": 15,
            "schId": 2,
            "schName": "成都第一中学",
            "classIdName": "网脉六班",
            "classStartTime": "2011-9-25",
            "classNum": 38,
            "classHeadTeacher": "张怀"
        },
        {
            "classId": 16,
            "schId": 10,
            "schName": "成都第三中学",
            "classIdName": "网脉一班",
            "classStartTime": "2010-9-18",
            "classNum": 28,
            "classHeadTeacher": "张华"
        },
        {
            "classId": 17,
            "schId": 10,
            "schName": "成都第三中学",
            "classIdName": "网脉二班",
            "classStartTime": "2011-9-18",
            "classNum": 29,
            "classHeadTeacher": "彭丽"
        },
        {
            "classId": 18,
            "schId": 10,
            "schName": "成都第三中学",
            "classIdName": "网脉三班",
            "classStartTime": "2011-9-19",
            "classNum": 27,
            "classHeadTeacher": "漆莉莉"
        },
        {
            "classId": 19,
            "schId": 10,
            "schName": "成都第三中学",
            "classIdName": "网脉四班",
            "classStartTime": "2010-9-19",
            "classNum": 25,
            "classHeadTeacher": "胡秋华"
        },
        {
            "classId": 20,
            "schId": 10,
            "schName": "成都第三中学",
            "classIdName": "网脉五班",
            "classStartTime": "2011-9-22",
            "classNum": 29,
            "classHeadTeacher": "夏燕"
        },
        {
            "classId": 21,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉一班",
            "classStartTime": "2010-9-18",
            "classNum": 28,
            "classHeadTeacher": "胡德军"
        },
        {
            "classId": 22,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉二班",
            "classStartTime": "2011-9-22",
            "classNum": 25,
            "classHeadTeacher": "陆秋水"
        },
        {
            "classId": 23,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉三班",
            "classStartTime": "2011-9-25",
            "classNum": 29,
            "classHeadTeacher": "李自强"
        },
        {
            "classId": 24,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉四班",
            "classStartTime": "2010-10-8",
            "classNum": 32,
            "classHeadTeacher": "高强华"
        },
        {
            "classId": 25,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉五班",
            "classStartTime": "2011-10-9",
            "classNum": 29,
            "classHeadTeacher": "李燕"
        },
        {
            "classId": 26,
            "schId": 3,
            "schName": "绵阳第七中学",
            "classIdName": "网脉六班",
            "classStartTime": "2011-10-20",
            "classNum": 28,
            "classHeadTeacher": "张军"
        },
        {
            "classId": 27,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉一班",
            "classStartTime": "2010-8-18",
            "classNum": 28,
            "classHeadTeacher": "习丽艳"
        },
        {
            "classId": 28,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉二班",
            "classStartTime": "2011-8-22",
            "classNum": 25,
            "classHeadTeacher": "文德怀"
        },
        {
            "classId": 29,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉三班",
            "classStartTime": "2011-8-25",
            "classNum": 30,
            "classHeadTeacher": "黄家辉"
        },
        {
            "classId": 30,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉四班",
            "classStartTime": "2010-8-18",
            "classNum": 34,
            "classHeadTeacher": "胡文"
        },
        {
            "classId": 31,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉五班",
            "classStartTime": "2011-9-12",
            "classNum": 28,
            "classHeadTeacher": "黄丽萍"
        },
        {
            "classId": 32,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉六班",
            "classStartTime": "2011-9-20",
            "classNum": 27,
            "classHeadTeacher": "汪洋"
        },
        {
            "classId": 33,
            "schId": 4,
            "schName": "绵阳树人中学",
            "classIdName": "网脉七班",
            "classStartTime": "2011-9-25",
            "classNum": 30,
            "classHeadTeacher": "孙宇"
        },
    ];
}


//统计信息
//地区统计
let cityArray;//存储地区信息
cityArrayInit();

function cityArrayInit() {
    cityArray = [
        {
            "cityId": 1,
            "cityName": "成都市",
            "citySchNum": 80,
            "cityContactSchNum": 30,
            "cityPendingSchNum": 10,
            "cityAuditFailedSchNum": 10,
            "cityPDschNum": 30
        },
        {
            "cityId": 2,
            "cityName": "绵阳市",
            "citySchNum": 60,
            "cityContactSchNum": 20,
            "cityPendingSchNum": 10,
            "cityAuditFailedSchNum": 10,
            "cityPDschNum": 20
        },
        {
            "cityId": 3,
            "cityName": "乐山市",
            "citySchNum": 50,
            "cityContactSchNum": 20,
            "cityPendingSchNum": 5,
            "cityAuditFailedSchNum": 15,
            "cityPDschNum": 10
        },
        {
            "cityId": 4,
            "cityName": "宜宾市",
            "citySchNum": 40,
            "cityContactSchNum": 15,
            "cityPendingSchNum": 5,
            "cityAuditFailedSchNum": 10,
            "cityPDschNum": 10
        }
    ]
}

//学校统计
let schoolStatisticsArray;  //存储学校统计信息
schoolStatisticsArrayInit();

function schoolStatisticsArrayInit() {
//    学校统计和学校关联,即schoolStatisticsArray数组与schoolArray数组中的"schId"
    schoolStatisticsArray = [
        {
            "schStacId": 1,
            "schId": 2,
            "schName": "成都第一中学",
            "schStacClassNum": 6,
            "schStacVIPNum": 60,
            "schStacNotVIPNum": 120
        },
        {
            "schStacId": 2,
            "schId": 1,
            "schName": "成都外国语学校",
            "schStacClassNum": 5,
            "schStacVIPNum": 50,
            "schStacNotVIPNum": 100
        },
        {
            "schStacId": 3,
            "schId": 10,
            "schName": "成都第三中学",
            "schStacClassNum": 4,
            "schStacVIPNum": 30,
            "schStacNotVIPNum": 90
        },
        {
            "schStacId": 4,
            "schId": 3,
            "schName": "绵阳第七中学",
            "schStacClassNum": 4,
            "schStacVIPNum": 40,
            "schStacNotVIPNum": 80
        },
        {
            "schStacId": 5,
            "schId": 4,
            "schName": "绵阳树人中学",
            "schStacClassNum": 5,
            "schStacVIPNum": 20,
            "schStacNotVIPNum": 120
        }
    ]
}