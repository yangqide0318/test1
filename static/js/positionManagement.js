/**
 * Created by Administrator on 2019/3/22.
 */
//var workArray = [
//    {
//        "workName": "秘书长",
//        "workDescribe": "对整个公司进行管理",
//        "workSearch": "是",
//        "workAssessment": "是",
//        "workSales":"是",
//        "workPrivilege": "是",
//        "workBackstage": "是"
//    },
//    {
//        "workName": "经理",
//        "workDescribe": "对管理一个部门",
//        "workSearch": "是",
//        "workAssessment": "是",
//        "workSales":"是",
//        "workPrivilege": "否",
//        "workBackstage": "否"
//    },
//    {
//        "workName": "助理",
//        "workDescribe": "辅助部门主管管理部门",
//        "workSearch":"是",
//        "workAssessment":"否",
//        "workSales": "是",
//        "workPrivilege":"否",
//        "workBackstage": "否"
//    },{
//        "workName": "职员",
//        "workDescribe": "执行部门具体业务",
//        "workSearch": "是",
//        "workAssessment":"否",
//        "workSales": "否",
//        "workPrivilege": "否",
//        "workBackstage": "否"
//    }
//
//];
var operid = -1;
var perSize = 5;//每页显示的条数
var currentPage = 1;//当前显示的页数
var totalPage = -1;
onjiazai();
function  onjiazai() {
    displayUserTable();
    checkAll(); //添加全选事件
    add();
    del();
    edit();
    pagebar();
    pageClick();
    infSelection();
    selectAll.on("click", infSelection);
}
//添加数据
function add() {
    $("#btnAddForm").click(function () {
        $("#workName").text("");
        $("#txtDescribe").val("");
        $("#txtSearch").prop("checked",false);
        $("#txtAssessment").prop('checked',false);
        $("#txtSales").prop("checked",false);
        $("#txtPrivilege").prop("checked",false);
        $("#txtBackstage").prop("checked",false);
        operid = -1;
        $("#addUser").modal('show');
    })

    $("#btnAdd").click(function () {
        //添加数据
        //获取表单数据
        var  Name = $("#workName").val();
        var  Describe = $("#txtDescribe").val();
        var Search = zhuanhua($("#txtSearch").prop("checked"));
        var Assessment = zhuanhua($("#txtAssessment").prop('checked'));
        var  Sales = zhuanhua($("#txtSales").prop("checked"));
        var Privilege = zhuanhua($("#txtPrivilege").prop("checked"));
        var Backstage = zhuanhua($("#txtBackstage").prop("checked"));
        var obj = {
            "workName": Name , "workDescribe": Describe, "workSearch": Search, "workAssessment": Assessment,
            "workSales": Sales, "workPrivilege": Privilege, "workBackstage": Backstage
        };
        alert("添加职位:" + JSON.stringify(obj));

        $.ajax({
            url:"/crm_insert_zhiwei",   // 请求路径
            type:"post",            // 请求的方式，不区分大小写
            async:true,             // 是否异步，true是默认值，false为同步请求
            cache:false,            // 关闭缓存，目的是为了避免部分浏览器缓存加载出错(IE)
            contentType:"application/json;charset=utf-8",
            datatype:"json",        // 返回类型，text文本、html页面、json数据
            data:JSON.stringify(obj),
            success:function(data){
                alert("数据: " + JSON.stringify(data));
                //ajax返回
                //认证完成
            },
            error:function(response){
                alert("出错" + response);
            }
        });


        if (operid == -1) {
            workArray.push(obj);
        } else {
            workArray.splice(operid, 1, obj);
        }
        //  if(workArray.length==1){
        $("#userTable").append("<tr>" +
            "<td><input type='checkbox' name=\"checkItem\" /></td>" +
            "<td>" +Name + "</td>" +
            "<td>" +Describe + "</td>" +
            "<td>" +Search + "</td>" +
            "<td>" + Assessment + "</td>" +
            "<td>" +Sales+ "</td>" +
            "<td>" + Privilege +"</td>" +
            "<td>" + Backstage + "</td>" +
            "<td><button style='border: none;outline:none; color: #8193bc ; ' class=\"btn btn-default edit\" data-index='" + workArray.length + "'><i class=\'iconfont icon-bianji\' ></i></i></button><button class=\"btn btn-default del\"  style='border: none;color: #e85655  '  data-index='" + workArray.length + "'><i class=\'iconfont icon-shanchu\'></button></td>" +
            "</tr>")
        //   }else{
        //   displayUserTable();
        // }
        if(workArray.length>5){
            currentPage++;
            displayUserTable();
        }
        displayUserTable();
        pagebar();
        $("#addUser").modal('hide');
    })
    $("#btnCancel").click(function () {
        $("#addUser").modal('hide');
    })
}
function displayUserTable() {
    $("#userTable").html("");
    $("#checkAll")[0].checked = false;
    var start = (currentPage - 1 ) * perSize;
    var end = start + perSize;
    var outHtml = "";
    for (var i = start; i < end && i < workArray.length; i++) {
        outHtml += "<tr>"+ "<td><input type='checkbox' name=\"checkItem\" /></td>" +
            "<td>" + workArray[i].workName + "</td>" +
            "<td>" + workArray[i].workDescribe + "</td>" +
            "<td>" +workArray[i].workSearch + "</td>" +
            "<td>" + workArray[i].workAssessment + "</td>" +
            "<td>" + workArray[i].workSales+ "</td>" +
            "<td>" + workArray[i].workPrivilege+ "</td>" +
            "<td>" + workArray[i].workBackstage + "</td>" +
            "<td><button style='border: none;outline:none; color: #8193bc  ' class=\"btn btn-default edit\"  data-index='" + i + "'><i class=\'iconfont icon-bianji\'></i></button><button  class=\"btn btn-default del \" style='border: none; color: #e85655;  '  data-index='" + i + "'><i class=\'iconfont icon-shanchu\'></i></button></td>" +
            "</tr>";
    }
    $("#userTable").html(outHtml);
}
function del(){
    $("#userTable").on('click','.del',function(){
        console.log(this);
        var index = $(this).attr('data-index');
        workArray.splice(index,1);
        pagebar();
        //displayUserTable();
        $(this).parent().parent().remove();

//            displayUserTable();
//          /*  if(workArray.length==0){
//                $("#userTable").children().remove();
//            }else{
//// displayUserTable();
//            }*/
    })
}
function checkAll(){
    $("#checkAll").click(function(){
        var checked = this.checked;
        $("input[name='checkItem']").each(function(index,item){
            item.checked =checked;
        })
    })
}
function zhuanhua(shu){
    //将复选框选择状态转化为是或者否
    if(shu){
        return "是"
    }else{
        return "否"
    }
}
function zhuan(canshu){
    if(canshu=="是"){
        return true;
    }else
        return false;
}
//编辑
function edit(){
    $("#userTable").on('click','.edit',function(){
        operid = -1;
        $("#addUser1").modal('show');
        var tr1 = $(this).parents("tr");
        console.log($(this).parents("tr").html())
        var name=tr1.children().eq(1).text();
        var Describe=tr1.children().eq(2).text();
        var Search=zhuan(tr1.children().eq(3).text())
        var Assessment=zhuan(tr1.children().eq(4).text());
        var Sales=zhuan(tr1.children().eq(5).text());
        var Privilege=zhuan(tr1.children().eq(6).text());
        var Backstage=zhuan(tr1.children().eq(7).text());
        $("#workName1").find("option:selected").text(name);
        $("#txtDescribe1").val(Describe);
        $("#txtSearch1").prop("checked",Search);
        $("#txtAssessment1").prop("checked",Assessment);
        $("#txtSales1").prop("checked",Sales);
        $("#txtPrivilege1").prop("checked",Privilege);
        $("#txtBackstage1").prop("checked",Backstage);
        $("#btnAdd1").click(function (){
            var  Nameone = $("#workName1").val();
            var  Describeone = $("#txtDescribe1").val();
            var Searchone = zhuanhua($("#txtSearch1").prop("checked"));
            var Assessmentone = zhuanhua($("#txtAssessment1").prop('checked'));
            var  Salesone = zhuanhua($("#txtSales1").prop("checked"));
            var Privilegeone = zhuanhua($("#txtPrivilege1").prop("checked"));
            var Backstageone = zhuanhua($("#txtBackstage1").prop("checked"));

            var obj = {"zhiweimingcheng": Nameone, "zhiweimiaoshu": Describeone,
                "chaxunquanxian": Searchone, "kaohequanxian": Assessmentone,
                "xiaoshoutongjichaxun": Salesone, "quanxianguanli": Privilegeone,"houtaiguanli": Backstageone};

            alert(JSON.stringify(obj));

            tr1.children().eq(1).text(Nameone);
            tr1.children().eq(2).text(Describeone);
            tr1.children().eq(3).text(Searchone)
            tr1.children().eq(4).text(Assessmentone);
            tr1.children().eq(5).text(Salesone);
            tr1.children().eq(6).text(Privilegeone);
            tr1.children().eq(7).text(Backstageone);

        })
    })
}
function pagebar(){
    totalPage = Math.ceil(workArray.length / perSize);
    if(currentPage>totalPage){
        currentPage = totalPage;
    }
    $("#divPage").html("");
    var str = "";
    for(var i = 0;i<totalPage;i++){
        if(currentPage==(i+1)){
            str+="<button class=\"btn btn-primary page\">"+(i+1)+"</button>";
        }else{
            str+="<button class=\"btn btn-default page\">"+(i+1)+"</button>";
        }
    }
    displayUserTable();
    $("#divPage").html(str);
}
function pageClick(){
    $("#divPage").on("click",".page",function(){
        $(".page").each(function(index,item){
            $(this).removeClass('btn-primary');
        });
        $(this).addClass('btn-primary');
        currentPage = Number(this.innerText);
        displayUserTable();
    });
}
$("#pageNext").click(function(){
    console.log($("#divPage").children().length)
    if (currentPage==$("#divPage").children().length) {
        alert("已是最后一页");
        return
    } else{
        currentPage ++;
        displayUserTable();
    }
})
$("#pagePrevious").click(function(){
    if (currentPage==1) {
        alert("已是第一页");
    } else{
        currentPage --;
        displayUserTable();
    }
})
//全选与取消
var tableBody = $("#userTable");
var selectAll = $("#selectAll");
var allSelected = true;
function infSelection() {
    if (!allSelected) {
        tableBody.find("input").attr("checked", true);
        allSelected = true;
    } else {
        tableBody.find("input").attr("checked", false);
        allSelected = false;
    }
}
$("#btnDelall").on("click", function () {
    let delList = tableBody.find("input:checked");
    delList.each(function (index, element) {
        $(element).parents("tr").remove();
        workArray.splice($(element).parent().siblings().eq(1).text() - 1, 1);
    });
    pagebar();
    displayUserTable();
});