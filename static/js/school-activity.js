$(function () {
    const BODY = $("body");
    let currentPage = 0;
    let tableBody = $("#schoolInf");//代码填充部分
    let selectAll = $("#selectAll");//全选按钮
    let modalBody=$("#lookActive");//查看模态框
    var city = 1;//城市id，默认1为成都
    let array = [];//变量数组
//写入初始化数据
    userInfPutIn(currentPage);
//事件委托-查看按钮 点击显示模态框(bootstrap) 将当前的数据导入模态框,input框都为只读 关闭后清空模态框
    BODY.on("click", "button[data-check]", function () {
        $("#lookActive").empty();
        let str = '';
        let index = parseInt($(this).parents("tr").find(".hidden").text());
        for (let i = 0; i < activesSchoolDetailArray .length; i++) {
            //console.log(i)
            var arr=[]
            if (activesSchoolDetailArray [i].schId ===index) {
                //console.log(index)
                arr.push(activesSchoolDetailArray[i])
                //index = i;

                str +=`<tr><td>${activesSchoolDetailArray[i].actDetailName}</td>
            <td>${activesSchoolDetailArray[i].actDetailTime}</td>
            <td>${activesSchoolDetailArray[i].actDetailPlace}</td>
            <td>${activesSchoolDetailArray[i].actDetailTitle}</td>
            <td>${activesSchoolDetailArray[i].actDetailDepot}</td>
            <td>${activesSchoolDetailArray[i].actDetailChargePerson}</td></tr>`;

            }
        }

        $("#lookActive").append(str);
    });

    var schoolId;
//事件委托-修改按钮 点击显示模态框(bootstrap) 将当前的数据导入模态框, 关闭后清空模态框
    BODY.on("click", "button[data-upDataInf]", function () {
        schoolId = parseInt($(this).parents("tr").find(".hidden").text());

        for (let i = 0; i < activesSchoolArray.length; i++) {
            if (activesSchoolArray[i].schId == schoolId) {
                schoolId = i;
            }
        }
        $("#modalOfSchool").find("input,textarea").attr("readOnly", false);
        $("#message-schId").val(schoolId);
        $("#modalOfSchoolLabel").text($(this).parents("tr").find("td").eq(1).text());
        $("#message-schName").val(activesSchoolDetailArray[schoolId].actDetailName);
        $("#message-schTel").val(activesSchoolDetailArray[schoolId].actDetailTime);
        $("#message-schTeacherNum").val(activesSchoolDetailArray[schoolId].schTeacherNum);
        $("#message-cityName").val(activesSchoolDetailArray[schoolId].actDetailPlace);
        $("#message-actDetailTitle").val(activesSchoolDetailArray[schoolId].actDetailTitle);
        $("#message-schChargeDepot").val(activesSchoolDetailArray[schoolId].actDetailDepot);
        $("#message-schChargePerson").val(activesSchoolDetailArray[schoolId].actDetailChargePerson);
        $("#submitInf").text("确认修改");
        schoolId=schoolId+1;
    });

//表格数据填充
    function userInfPutIn(pageNumber) {
        tableBody.empty();
        if(city==1){
            array = activesSchoolArray;
        }
        if(city==2){
            array = activesSchoolArrayTwo;
        }
        currentPage = pageNumber;
        let index = pageNumber * 8;
        for (let i = 0; i < 8; i++) {
            if (index + i < array.length)
                tableBody.append(`<tr><td class="hidden">${array[index + i].schId}</td>
            <td>${array[index + i].schName}</td><td>${array[index + i].actSchoolMaster}</td>
            <td>${array[index + i].actEntryTime}</td><td>${array[index + i].actTel}</td>
            <td><button id="a" type='button' class="\btn  btn-sm iconfont\" data-check=\"check\" data-toggle=\"modal\" data-target=\"#modalLookActive\" >&#xe544;</button>
            <button id="b" type='button' class=\"btn btn-sm iconfont\"  data-upDataInf=\"upDataInf\" data-toggle="modal" data-target=\"#modalOfSchool\">&#xe63c;</button>
            <button id="c" type='button' class=\"btn btn-sm iconfont\"  data-addDate=\"addDate\" data-toggle="modal" data-target=\"#modalalter\">&#xe726;</button>
            <button id="d" type="button" class=\"btn btn-sm iconfont\"  >&#xe66e;</button>
            </td></tr>`);
        }
    }

//执行操作后更新页面数据currentPage
    function pageUpdate(curPage) {
        tableBody.html("");
        userInfPutIn(curPage);

        // switcherStyle();
    }

//点击模态框提交按钮提交数据,接着清空表单
    $("#submitInf").on("click", function () {
        for(let i = 0;i < activesSchoolDetailArray.length;i ++){
            if(activesSchoolDetailArray[i].actId==schoolId){
                activesSchoolDetailArray[i].actDetailName = $("#message-schName").val();
                activesSchoolDetailArray[i].actDetailTime = $("#message-schTel").val();
                activesSchoolDetailArray[i].actDetailPlace = $("#message-cityName").val();
                activesSchoolDetailArray[i].actDetailTitle = $("#message-actDetailTitle").val();
                activesSchoolDetailArray[i].actDetailDepot = $("#message-schChargeDepot").val();
                activesSchoolDetailArray[i].actDetailChargePerson = $("#message-schChargePerson").val();

            }
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
    selectAll.on("click", function () {
        if ($(this).prop("checked") === true) {
            tableBody.find("input").each(function (index, element) {
                $(element).prop("checked", true);
            });
        } else {
            tableBody.find("input").each(function (index, element) {
                $(element).prop("checked", false);
            });
        }
    });

//复选框单选取消全选按钮的选中
    tableBody.find("input").each(function (index, element) {
        tableBody.on("click", $(element), function () {
            selectAll.prop("checked", false);
        });
    });

//添加活动
    $("#schoolInf").on("click", "button[data-addDate]",function () {
        schoolId = parseInt($(this).parents("tr").find(".hidden").text());
        let isChecked = tableBody.find("input:checked");
        if (isChecked.length === 1) {
            $("#modalalter").modal();
            let schoolId = parseInt(isChecked.parents("tr").find(".hidden").text());
            $("#schId").text(schoolId);
            $("#actId").text(activesSchoolDetailArray[activesSchoolDetailArray.length-1].actId + 1);
        } else {
            //错误操作提醒
        }
    });
//确认添加活动
    $("#ok").on("click", function () {
        //let

        let arrayLastId = activesSchoolDetailArray[activesSchoolDetailArray.length-1].actId;
        activesSchoolDetailArray.push({
            "actId":arrayLastId+1,"schId":schoolId,"actDetailName":$("#alter-schName").val(),"actDetailTime":$("#alter-schTel").val(),"actDetailPlace":$("#alter-cityName").val(),
            "actDetailChargePerson":$("#alter-schChargePerson").val(),"actDetailDepot":$("#alter-schChargeDepot").val(),"actDetailTitle":$("#alter-actDetailTitle").val(),
        })
    });
    $("#ComRecord").on("click",function () {

    });
    $("#schoolSelector").change(function(){
        let cityValue = $("#schoolSelector").val();
        if(cityValue==1){
            city = 1;
        }
        else if(cityValue==2){
            city = 2;
        }
        userInfPutIn(currentPage);
    });
//选中翻页

//删除
    $("#schoolInf").on("click","#d",function(){
        //找到所选删除行的id
        let listIndex = $(this).parents("tr").find(".hidden").eq(0).text();
//    在数组中循环找到对应ID的下标
        for(let i = 0;i<activesSchoolArray.length;i++){
            if(listIndex==activesSchoolArray[i].schId){
                activesSchoolArray.splice(i, 1);//数组中删除
                $(this).parent().parent().remove();//页面中删除
                break;
            }
        }
        pageUpdate(currentPage);//表格更新
    });
});