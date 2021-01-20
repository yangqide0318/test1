$(function () {
    //写入初始化数据
    let currentPage = 0;//页面跳转的全局变量
    let clickAbleLi = $(".switcher li:not(:first-child,:last-child)");
    const BODY = $("body");
    const pageSize = 8;//页面数据容量
    userInfPutIn(currentPage);
    switcherStyle();
//时间委托-删除按钮  删除表格tr 数组删除对应ID
    BODY.on("click", "button[data-delInf]", function () {
        for (let i = 0; i < schoolArray.length; i++) {
            if (schoolArray[i].schId === parseInt($(this).parents("tr").find(".hidden").text())) {
                schoolArray.splice(i, 1);
                break;
            }
        }
        $(this).parents("tr").remove();
        pageUpdate(currentPage);
    });

//事件委托-查看按钮 点击显示模态框(bootstrap) 将当前的数据导入模态框,input框都为只读 关闭后清空模态框
    BODY.on("click", "button[data-check]", function () {
        let index = parseInt($(this).parents("tr").find(".hidden").text());
        for (let i = 0; i < schoolArray.length; i++) {
            if (schoolArray[i].schId === index) {
                index = i;
                break;
            }
        }
        $("#message-schId").val(index);
        $("#modalOfSchool").find("input,textarea").prop("readOnly", true);
        // $("#modalOfSchool").find("input[readOnly],textarea[readOnly]").attr("background","#fff");
        $("#modalOfSchoolLabel").text($(this).parents("tr").find("td").eq(2).text());
        $("#message-schName").val(schoolArray[index].schName);
        $("#message-schTel").val(schoolArray[index].schTel);
        $("#message-schTeacherNum").val(schoolArray[index].schTeacherNum);
        $("#message-schWB").val(schoolArray[index].schWB);
        $("#message-schChargePerson").val(schoolArray[index].schChargePerson);
        $("#message-schEntryTime").val(schoolArray[index].schEntryTime);
        $("#message-cityName").val(schoolArray[index].cityName);
        $("#message-schMaster").val(schoolArray[index].schMaster);
        $("#message-schIP").val(schoolArray[index].schIP);
        $("#message-schChargeDepot").val(schoolArray[index].schChargeDepot);
        $("#message-schState").val(schoolArray[index].schState);
        $("#message-schApplyAgreeTime").val(schoolArray[index].schApplyAgreeTime);
        $("#message-schAddress").val(schoolArray[index].schAddress);
        $("#message-schStudentsNum").val(schoolArray[index].schStudentsNum);
        $("#message-schDescribe").val(schoolArray[index].schDescribe);
        $("#message-schApplyTime").val(schoolArray[index].schApplyTime);
        $("#message-schApplyOpinion").val(schoolArray[index].schApplyOpinion);
        $("#submitInf").hide();
        $("#ComRecord").show();
    });

//事件委托-修改按钮 点击显示模态框(bootstrap) 将当前的数据导入模态框, 关闭后清空模态框
    BODY.on("click", "button[data-upDataInf]", function () {
        let index = parseInt($(this).parents("tr").find(".hidden").text());
        for (let i = 0; i < schoolArray.length; i++) {
            if (schoolArray[i].schId === index) {
                index = i;
                break;
            }
        }
        $("#modalOfSchool").find("input,textarea").attr("readOnly", false);
        // $("#modalOfSchool").find("input[readonly],textarea[readonly]").attr("background","#fff");
        $("#message-schId").val(index);
        $("#modalOfSchoolLabel").text($(this).parents("tr").find("td").eq(2).text());
        $("#message-schName").val(schoolArray[index].schName);
        $("#message-schTel").val(schoolArray[index].schTel);
        $("#message-schTeacherNum").val(schoolArray[index].schTeacherNum);
        $("#message-schWB").val(schoolArray[index].schWB);
        $("#message-schChargePerson").val(schoolArray[index].schChargePerson);
        $("#message-schEntryTime").val(schoolArray[index].schEntryTime);
        $("#message-cityName").val(schoolArray[index].cityName);
        $("#message-schMaster").val(schoolArray[index].schMaster);
        $("#message-schIP").val(schoolArray[index].schIP);
        $("#message-schChargeDepot").val(schoolArray[index].schChargeDepot);
        $("#message-schState").val(schoolArray[index].schState);
        $("#message-schApplyAgreeTime").val(schoolArray[index].schApplyAgreeTime);
        $("#message-schAddress").val(schoolArray[index].schAddress);
        $("#message-schStudentsNum").val(schoolArray[index].schStudentsNum);
        $("#message-schDescribe").val(schoolArray[index].schDescribe);
        $("#message-schApplyTime").val(schoolArray[index].schApplyTime);
        $("#message-schApplyOpinion").val(schoolArray[index].schApplyOpinion);
        $("#submitInf").text("确认修改");
    });

//表格数据填充
    function userInfPutIn(pageNumber) {
        currentPage = pageNumber;
        let index = pageNumber * pageSize;
        for (let i = 0; i < pageSize; i++) {
            if (index + i < schoolArray.length)
                $("#schoolInf").append(`<tr><td class="hidden">${schoolArray[index + i].schId}</td><td><input type="checkbox"/></td>
            <td>${schoolArray[index + i].schName}</td><td>${schoolArray[index + i].schMaster}</td>
            <td>${schoolArray[index + i].schEntryTime}</td><td>${schoolArray[index + i].schState}</td>
            <td><button type='button' class="\iconfont icon-chakan\" data-check=\"check\" data-toggle=\"modal\" data-target=\"#modalOfSchool\"></button>
            <button type='button' class=\"iconfont icon-bianji\"  data-upDataInf=\"upDataInf\" data-toggle="modal" data-target=\"#modalOfSchool\"></button>
            <button type='button' class="iconfont icon-shanchu" data-delInf="delInf"></button>
            </td></tr>`);
        }
    }

//执行操作后更新页面数据currentPage
    function pageUpdate(curPage) {
        $("#schoolInf").html("");
        userInfPutIn(curPage);
        switcherStyle();
        switcherOnclickStyle();
    }

//点击模态框提交按钮提交数据,接着清空表单
    $("#submitInf").on("click", function () {
        //修改数据
        const index = parseInt($("#message-schId").val());
        let schoolTemp = {
            schId: 0, schName: "", schTel: "", schTeacherNum: 0, schWB: "", schChargePerson: "",
            schEntryTime: "", cityName: "", schMaster: "", schIP: "", schChargeDepot: "", schState: "",
            schApplyAgreeTime: "", schAddress: "", schStudentsNum: 0, schDescribe: "", schApplyTime: "",
            schApplyOpinion: ""
        };
        schoolTemp.schId = index;
        schoolTemp.schName = $("#message-schName").val();
        schoolTemp.schTel = $("#message-schTel").val();
        schoolTemp.schTeacherNum = $("#message-schTeacherNum").val();
        schoolTemp.schWB = $("#message-schWB").val();
        schoolTemp.schChargePerson = $("#message-schChargePerson").val();
        schoolTemp.schEntryTime = $("#message-schEntryTime").val();
        schoolTemp.cityName = $("#message-cityName").val();
        schoolTemp.schMaster = $("#message-schMaster").val();
        schoolTemp.schIP = $("#message-schIP").val();
        schoolTemp.schChargeDepot = $("#message-schChargeDepot").val();
        schoolTemp.schState = $("#message-schState").val();
        schoolTemp.schApplyAgreeTime = $("#message-schApplyAgreeTime").val();
        schoolTemp.schAddress = $("#message-schAddress").val();
        schoolTemp.schStudentsNum = $("#message-schStudentsNum").val();
        schoolTemp.schDescribe = $("#message-schDescribe").val();
        schoolTemp.schApplyTime = $("#message-schApplyTime").val();
        schoolTemp.schApplyOpinion = $("#message-schApplyOpinion").val();
        if (index || index === 0 && schoolArray.length !== 0) {
            schoolArray[index] = schoolTemp;
        } else {
            if (schoolArray.length - 1 < 0)
                schoolTemp.schId = 1;
            else
                schoolTemp.schId = schoolArray[schoolArray.length - 1].schId + 1;
            schoolArray.push(schoolTemp);
        }
        pageUpdate(currentPage);//表格更新
    });

// 模态框隐藏全部表单置空
    $("#modalOfSchool").on("hide.bs.modal", function () {
        $("#modalOfSchool").find("textarea,input").val("");
        $("#submitInf").show();
        $("#Approval").hide();
        $("#Reject").hide();
        $("#ComRecord").hide();
    });

//全选按钮的全选与全部取消选中
    $("#selectAll").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("#schoolInf").find("input").each(function (index, element) {
                $(element).prop("checked", true);
            });
        } else {
            $("#schoolInf").find("input").each(function (index, element) {
                $(element).prop("checked", false);
            });
        }
    });

//复选框单选取消全选按钮的选中
    $("#schoolInf").find("input").each(function (index, element) {
        $("#schoolInf").on("click", $(element), function () {
            $("#selectAll").prop("checked", false);
        });
    });

//多选删除
    $("#delSelected").on("click", function () {
        $("#schoolInf").find("input:checked").each(function (index, element) {
            for (let i = 0; i < schoolArray.length; i++) {
                if (schoolArray[i].schId === parseInt($(element).parents("tr").find(".hidden").text())) {
                    schoolArray.splice(i, 1);
                    break;
                }
            }
            $(element).parents("tr").remove();
        });
    });

//新增数据
    $("#addNew").on("click", function () {
        //修改界面文字
        $("#submitInf").text("确认新增");
        //修改数据
        $("#modalOfSchoolLabel").text("新增学校信息");
        $("#modalOfSchool").find("input,textarea").prop("readOnly", false);

    });

//审核 对等待审核的学校进行审核
    $("#ApplicationApproval").on("click", function () {
        let areChecked = $("#schoolInf").find("input:checked");
        areChecked.each(function (index, element) {
            let idTemp = parseInt($(element).parents("tr").find(".hidden").text());
            for (let i = 0; i < schoolArray.length; i++) {
                if (schoolArray[i].schId === idTemp)
                    if (schoolArray[i].schState === "推广开展") {
                        idTemp = i;
                        schoolArray[i].schState = "待审";
                        break;
                    } else {
                        return -1;
                        //选择错误反馈
                    }
            }
        });
        pageUpdate(currentPage);
    });
//学校审核
    $("#examine").on("click", function () {
        let isChecked = $("#schoolInf").find("input:checked");
        if (isChecked.length === 1) {
            let idTemp = parseInt(isChecked.parents("tr").find(".hidden").text());
            $("#message-schId").val(idTemp);
            for (let i = 0; i < schoolArray.length; i++) {
                if (schoolArray[i].schId === idTemp) {
                    idTemp = i;
                    break;
                }
            }
            if (schoolArray[idTemp].schState === "待审") {
                $("#modalOfSchool").modal().find("input,textarea").prop("readOnly", true);
                $("#modalOfSchoolLabel").text(schoolArray[idTemp].schName);
                $("#message-schName").val(schoolArray[idTemp].schName);
                $("#message-schTel").val(schoolArray[idTemp].schTel);
                $("#message-schTeacherNum").val(schoolArray[idTemp].schTeacherNum);
                $("#message-schWB").val(schoolArray[idTemp].schWB);
                $("#message-schChargePerson").val(schoolArray[idTemp].schChargePerson);
                $("#message-schEntryTime").val(schoolArray[idTemp].schEntryTime);
                $("#message-cityName").val(schoolArray[idTemp].cityName);
                $("#message-schMaster").val(schoolArray[idTemp].schMaster);
                $("#message-schIP").val(schoolArray[idTemp].schIP);
                $("#message-schChargeDepot").val(schoolArray[idTemp].schChargeDepot);
                $("#message-schState").val(schoolArray[idTemp].schState);
                $("#message-schApplyAgreeTime").val(schoolArray[idTemp].schApplyAgreeTime);
                $("#message-schAddress").val(schoolArray[idTemp].schAddress);
                $("#message-schStudentsNum").val(schoolArray[idTemp].schStudentsNum);
                $("#message-schDescribe").val(schoolArray[idTemp].schDescribe);
                $("#message-schApplyTime").val(schoolArray[idTemp].schApplyTime);
                $("#message-schApplyOpinion").val(schoolArray[idTemp].schApplyOpinion).prop("readOnly", false);
                $("#submitInf").hide();
                $("#Approval").show();
                $("#Reject").show();
            }
        }
    });

//审核通过
    $("#Approval").on("click", function () {
        let idTemp = $("#message-schId").val();
        schoolArray[idTemp - 1].schApplyOpinion = $("#message-schApplyOpinion").val();
        let date = new Date();
        schoolArray[idTemp - 1].schApplyAgreeTime = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
        schoolArray[idTemp - 1].schState = "审核通过";
        pageUpdate(currentPage);
    });

//驳回申请
    $("#Reject").on("click", function () {
        let idTemp = $("#message-schId").val();
        schoolArray[idTemp - 1].schApplyOpinion = $("#message-schApplyOpinion").val();
        schoolArray[idTemp - 1].schState = "审核未通过";
        pageUpdate(currentPage);
    });

//添加活动
    $("#addSchoolActivity").on("click", function () {
        let isChecked = $("#schoolInf").find("input:checked");
        if (isChecked.length === 1) {
            $("#modalOfSchoolActivity").modal();
            let schoolId = parseInt(isChecked.parents("tr").find(".hidden").text());
            $("#schId").text(schoolId);
            $("#schCRId").text(schoolComuRecordArray[schoolComuRecordArray.length - 1].schCRId + 1);
        } else {
            //错误操作提醒
        }
    });
//确认添加活动
    $("#schActivityAdd").on("click", function () {
        let schCmuActivityTemp = {
            "schCRId": 0,
            "schId": 0,
            "schName": "",
            "schCRTime": "",
            "schCRContacts": "",
            "schCRWork": "",
            "schCRComuPerson": "",
            "schCRContent": ""
        };
        schCmuActivityTemp.schId = parseInt($("#schId").text());
        schCmuActivityTemp.schCRId = parseInt($("#schCRId").text());
        schCmuActivityTemp.schName = $("#schCRTime").val();
        schCmuActivityTemp.schCRContacts = $("#schCRContacts").val();
        schCmuActivityTemp.schCRComuPerson = $("#schCRComuPerson").val();
        schCmuActivityTemp.schCRWork = $("#schCRWork").val();
        schCmuActivityTemp.schCRContent = $("#schCRContent").val();
        schoolComuRecordArray.push(schCmuActivityTemp);
    });
//查看学校历史记录
    $("#ComRecord").on("click", function () {

    });

    //页面切换按钮生成
    function switcherStyle() {
        //原来的页码置空
        clickAbleLi.empty();
        let lastLi = $(".switcher li:last-child");
        for (let i = 0; i < Math.ceil(schoolArray.length / pageSize); i++) {
            $(lastLi).before(`<li><span>${i + 1}</span></li>`);
        }
        //页面跳转添加点击事件
        clickAbleLi = $(".switcher li:not(:first-child,:last-child)");
        clickAbleLi.each(function (index) {
            $(this).on("click", function () {
                $("#schoolInf").html("");
                userInfPutIn(index);
            })
        });
    }

    //页面下一页按钮
    $("#pageNext").on("click", function () {
        currentPage++;
        clickAbleLi = $(".switcher li:not(:first-child,:last-child)");
        if (currentPage < clickAbleLi.length )
            pageUpdate(currentPage);
        else {
            currentPage = clickAbleLi.length - 1;
        }
    });

    //页面上一页按钮
    $("#pagePrevious").on("click", function () {
        currentPage--;
        if (currentPage >-1)
            pageUpdate(currentPage);
        else {
            currentPage = 0;
        }
    });

    function switcherOnclickStyle() {
        clickAbleLi.each(function (index,element) {
           $(element).find("span").removeClass("pageOnClickActive");
        });
        $(clickAbleLi[currentPage]).find("span").addClass("pageOnClickActive");
    }

});