$(function (){
    let tempArr=[],isSearch=false; //存储临时查询结果数组
    let curPages = 0;   //分页页码初始页
    //默认显示成都外国语学校
    $(classArray).each(function(i,item){
        if(item.schName=="成都外国语学校"){
            claArr.push(item)
        }
    });
    classTableInforList(curPages);
    //填充表格列表数据
    function classTableInforList(pageNumber){
        let Array=iSearch();
        curPages = pageNumber;
        let indexNum = pageNumber * 8;
        for(let i=0;i<8;i++){
            if(indexNum + i < Array.length){
                $("#classManagementTbody").append(`<tr>
            <td><input type="checkbox"/></td>
            <td class="hidden">${Array[indexNum + i].classId}</td>
            <td class="hidden">${Array[indexNum + i].schId}</td>
            <td>${Array[indexNum + i].classIdName}</td>
            <td>${Array[indexNum + i].classStartTime}</td>
            <td>${Array[indexNum + i].classNum}</td>
            <td>${Array[indexNum + i].classHeadTeacher}</td>
            <td>
                <span class="classListEdit" data-toggle="modal" data-upDataInf="upDataInf" data-target="#exampleModal" title="编辑"> </span>
                <span class="classListDel" data-toggle="modal"  data-target="#exampleModal-del" title="删除"> </span>
            </td>
        </tr>`)
            }
        }
        classEditInfClick(Array);
    }
    //页码生成
    switcherStyle();
    //创建页
    function switcherStyle(){
        $(".pagination li:not(:first,:last)").remove();
        let Array=iSearch();
        for(let i=0;i<(Math.ceil(Array.length / 8));i++){
            $(".switcher .pagination li:last-child").before(`<li><span data-index=${i}>${i+1}</span></li>`)
        }
        //切换
        $(".pagination>li:not(:first,:last)>span").click(function(){
            curPages=$(this).attr("data-index");
            pageUpdate(curPages);//页面更新
        });
    }
//上一页
    $(".pagination>li:first").click(function(){
        if(curPages>0)curPages--;
        pageUpdate(curPages);//页面更新
    });
//下一页
    $(".pagination>li:last").click(function(){
        let Array=iSearch();
        if(curPages<(Math.ceil(Array.length / 8))-1)curPages++;
        pageUpdate(curPages);//页面更新
    });
//给编辑按钮添加点击事件-点击后传值给模态框
    function classEditInfClick(Array){
        $(".classListEdit").on("click", function () {
            //查找点击行的对应的classId
            let index = parseInt($(this).parents("tr").find(".hidden").eq(0).text());
            //循环找到与id相同的数组下标
            for (let i = 0; i < Array.length; i++) {
                if (Array[i].classId === index) {
                    index = i;
                    break;
                }
            }
//            将下标赋值给模态框中的对应处
            $("#message-classId").val(index);
            $("#message-classId-search").val(index-1);
            //更改弹出模态框的标题和按钮字。
//            $(".modal-title").text("修改班级信息");
            $("#submitInf").text("确认");
            $("#message-className").val(Array[index].classIdName);
            $("#message-headTeacher").val(Array[index].classHeadTeacher);
//            });
        });
    }
//点击模态框提交按钮提交数据,接着清空表单
    $("#submitInf").on("click", function () {
        const targetIndex = parseInt($("#message-classId").val());
        const seaIndex = parseInt($("#message-stuId-search").val());
        let classN = $("#message-className").val();
        let classHT = $("#message-headTeacher").val();
        //修改界面文字
        //修改数据
        if (targetIndex >= 0 && targetIndex <= claArr.length - 1) { //这一句有待思考！！！
            claArr[targetIndex].classIdName = classN;
            claArr[targetIndex].classHeadTeacher = classHT;
            tempArr[seaIndex]=claArr[targetIndex];
        }
        else if(claArr.length==0){
            //新数组没有数据时添加在第一项
            let classArrTemp = {classId:"",schId:1,schName:"成都外国语学校",classIdName:"",classStartTime:"",classNum:0,classHeadTeacher:""};
            classArrTemp.classId = 1;
//            classArrTemp.schId =
//            classArrTemp.schName =
            classArrTemp.classIdName = classN;
            let d = new Date();
            classArrTemp.classStartTime = (d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate());
//            classArrTemp.classNum =
            classArrTemp.classHeadTeacher = classHT;
            claArr.push(classArrTemp);
            tempArr.push(classArrTemp);
        }
        else {
            //在原有数组数据上新增
            let classArrTemp = {classId:"",schId:1,schName:"成都外国语学校",classIdName:"",classStartTime:"",classNum:0,classHeadTeacher:""};
            classArrTemp.classId = claArr[(claArr.length - 1)].classId+1;
//            classArrTemp.schId =
//            classArrTemp.schName =
            classArrTemp.classIdName = classN;
            let d = new Date();
            classArrTemp.classStartTime = (d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate());
//            classArrTemp.classNum =
            classArrTemp.classHeadTeacher = classHT;
            claArr.push(classArrTemp);
            tempArr.push(classArrTemp);
        }
        $(".hideModeTab").find("input").val("");//操作完毕后所有字段置空
        pageUpdate(curPages);//表格更新

    });
//删除一行
    $("#classManagement").on("click",".classListDel",function(){
        let that = this;
        //找到所选删除行的id
        let listIndexA = $(this).parents("tr").find(".hidden").eq(0).text();
        $("#submitInf-del").on("click",function(){
            let listIndex = listIndexA;
            //    在数组中循环找到对应ID的下标
            for(let i = 0;i<claArr.length;i++){
                if(listIndex==claArr[i].classId){
                    claArr.splice(i, 1);//数组中删除
                    $(that).parent().parent().remove();//页面中删除
                    break;
                }
            }
            if(isSearch){
                for(let i = 0;i<tempArr.length;i++){
                    if(listIndex==tempArr[i].classId){
                        tempArr.splice(i, 1);//数组中删除
                        $(that).parent().parent().remove();//页面中删除
                        break;
                    }
                }
            }
            pageUpdate(curPages);//页面更新
        })
    });
//判断是否是搜索出来的数据
    function iSearch(){
        let Array=[];
        if(isSearch){
            Array=tempArr;
        }else{
            Array=claArr;
        }
        return Array;
    };
//执行操作后更新页面数据
    function pageUpdate(curPages) {
        //页面没有数据时更新当前页
        if( $("#classManagementTbody").html()==""){
            curPages=0;
        }
        $("#classManagementTbody").html("");//清空列表信息
        classTableInforList(curPages);//重新加载列表信息
        switcherStyle();
    };
//新增数据
    $("#addNew1").on("click", function () {
//        $('#exampleModal').on('show.bs.modal', function () {
        $(".modal-title").text("新增用户信息");
        $("#submitInf").text("确认");
//        });
    });
//全选按钮的全选与全部取消选中
    $("#selectAll").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("#classManagementTbody").find("input").each(function (index, element) {
                $(element).prop("checked", true);
            });
        } else {
            $("#classManagementTbody").find("input").each(function (index, element) {
                $(element).prop("checked", false);
            });
        }
    });
//复选框单选取消全选按钮的选中
    $("#classManagementTbody").find("input").each(function (index, element) {
        $("#classManagementTbody").on("click", $(element), function () {
            $("#selectAll").prop("checked", false);
        });
    });
//多选删除
    $("#delSelected").on("click", function () {
        $("#classManagementTbody").find("input:checked").each(function (index, element) {
            for (let i = 0; i < claArr.length; i++) {
                if (claArr[i].classId === parseInt($(element).parents("tr").find(".hidden").eq(0).text())) {
                    claArr.splice(i, 1);
                    break;
                }
            }
            if(isSearch){
                for (let i = 0; i < tempArr.length; i++) {
                    if (tempArr[i].classId === parseInt($(element).parents("tr").find(".hidden").eq(0).text())) {
                        tempArr.splice(i, 1);
                        break;
                    }
                }
            }
            $(element).parents("tr").remove();
        });
        $("#selectAll").prop("checked", false);//去除全选选中状态
        pageUpdate(curPages);//表格更新
    });
    //搜索
    $("#search-btn").click(function(){
        let temArr=[];
        $(claArr).each(function(i,item){
            if($("#search-type").val()==2) {
                if (item.classIdName.match($("#search-input").val())) {
                    temArr.push(item)
                }
            }else if($("#search-type").val()==3){
                if (item.classHeadTeacher.match($("#search-input").val())) {
                    temArr.push(item)
                }
            }else{
                if (item.classIdName.match($("#search-input").val())) {
                    temArr.push(item)
                }
            }
        });
        tempArr=temArr;
        isSearch=true;
        classTableInforList(curPages);
        pageUpdate(curPages);
    })
    //城市对应学校
    $("#cityNav>li>span").click(function(){
        let that=$(this);//保存this
        if(that.next().find("li").length==0){
            $(schoolArray).each(function(i,item){
                if(that.text()==item.cityName){
                    that.next().append(`<li data-isclick ><span class='iconfont icon-xuexiao'></span>${item.schName}</li>`)
                }
            });
        }
        //左侧菜单
        liFold();
        if ($(this).next().css("display") === "none") {
            $(this).parent().css("background-color", "#e6e6e6");
            $(this).parent().height(40 + $(this).next().height());
            $(this).children("span:last-of-type").css("-webkit-transform", "rotate(0)")
        } else {
            $(this).parent().css("background-color", "#f5f5f5");
            $(this).parent().height(40);
            $(this).children("span:last-of-type").css("-webkit-transform", "rotate(-90deg)");
        }
        $(this).next().slideToggle(200);
//学校对应学生
        $(".menu>li").click(function(){
            //改变标题
            let title=$(this).text();
            $("#student").text(`${title}学生一览`);
            //重置数据
            isSearch=false;curPages=0;
            //清空内容
            $("#classManagementTbody").html("");//清空列表信息
            let that=this;
            //为false进来
            if(!$(that).prop("data-isclick")){
                //改变点击状态
                $(that).attr("data-isclick",true);
                //将其他状态变为false
                $(".menu>li").each(function(i,item){
                    if(item!=that){
                        $(item).attr("data-isclick",false);
                    }
                });
                //重置数组
                claArr=[];
                $(classArray).each(function(i,item){
                    if(item.schName==$(that).text()){
                        claArr.push(item)
                    }
                });
            }
            //填充表格列表数据
            classTableInforList(curPages);
            switcherStyle();
        })
    });
    //一级菜单收缩
    function liFold() {
        $("#cityNav>li>span").each(function (i, item) {
            $(item).parent().height(40);
            $(item).children("span:last-of-type").css("-webkit-transform", "rotate(-90deg)");
            $(item).parent().css("background-color", "#f5f5f5");
            if ($(item).parent().height() === 40) {
                $(item).next().css("display", "none");
            }
        });
    }
});