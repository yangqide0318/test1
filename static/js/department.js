$(function () {
    var operid = 0;
    var perSize = 4;     // 每页显示多少条
    var currentPage = 1; // 当前页数
    var totalPage = -1;  // 默认只有一页

    depotArray = [];  // 初始化加载时机
    // ajax默认是异步处理状态，异步处理状态是非阻塞状态
    $.ajax({
        url:"/crm_select_bumen",   // 查询所有部门
        type:"post",                // 请求的方式，不区分大小写
        async:true,                 // 是否异步，true是默认值，false为同步请求
        cache:false,                // 关闭缓存，目的是为了避免部分浏览器缓存加载出错(IE)
        contentType:"application/json;charset=utf-8",
        datatype:"json",           // 返回类型，text文本、html页面、json数据
        // data:JSON.stringify(obj), // 全部查询，不需要请求参数
        success:function(data){
            // alert("数据: " + JSON.stringify(data));
            // console.log(JSON.stringify(data));
            /*
              在JS中，json数组也是数组，通过支持循环处理
             [
                {"id":"1808b3a066b948808e0f6265e12a7f0f","bumenmingcheng":"测试部","chenglishijian":1559318400000,"bumenmiaoshu":"这是专门做测试的部门"},
                {"id":"48815430dbce4a9f8351ed4da1bdb355","bumenmingcheng":"技术部","chenglishijian":1557504000000,"bumenmiaoshu":"一堆码农"}
             ]

             depotArray  部门虚拟数据 {"depotId": 1, "depotName": "人事部2", "depotSetTime": "2006-10-09", "depotDescribe": "管理公司员工入职和离职"}
             */
            for(var i = 0; i < data.length; i++) {
                var onlyJSON = data[i];
                depotArray[i] = {"depotId": onlyJSON.id, "depotName": onlyJSON.bumenmingcheng,
                    "depotSetTime": new Date(onlyJSON.chenglishijian).toLocaleDateString(), "depotDescribe": onlyJSON.bumenmiaoshu};
            }

            displayUserTable();  // 显示部门列表
            add();               // 绑定新增事件
            update();            // 绑定更新事件
            pageClick();         // 绑定分页事件
            pagebar();           // 显示页码
            checkAll();          // 检查所有初始化状态
            singalChecked();     // 检查鼠标按下事件
            //ajax返回
            //认证完成
        },
        error:function(response){
            alert("出错" + response);
        }
    });

    // 绑定新增事件
    function add() {
        $("#btnAddForm").click(function () {
            operid = -1;
            $("#myModal").modal();
        });
        $("#btnAdd").click(function () {
            //添加数据
            //获取表单数据
            var id = $("#txtId").val();
            var depName = $("#txtdepName").val();
            var date = $("#txtDate").val();
            var describe = $("#txtDescribe").val();

            var obj = {"depotId": id, "depotName": depName, "depotSetTime": date, "depotDescribe": describe};

            $.ajax({
                url:"/crm_insert_bumen",   // 请求路径
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
                depotArray.push(obj);

            } else {
                depotArray.splice(operid, 1, obj);
            }

            displayUserTable();
            pagebar();
            $("#myModal").modal("hide");
        })
    }


    function checkAll() {
        let allChecked = false;
        $("#checkAll").on("click", function () {
            if (!allChecked) {
                $("#depTable").find("input").each(function (index, element) {
                    $(element).prop("checked", true);
                    allChecked = true;
                });
            }
            else {
                $("#depTable").find("input").each(function (index, element) {
                    $(element).prop("checked", false);
                    allChecked = false;
                })
            }
        });
    }

    function singalChecked() {
        $("#depTable").find("input").each(function (index, element) {
            $("#depTable").on("mousedown", $(element), function () {
                $("#depTable").find("input").prop("checked", false);
            });
        });
    }

    function update() {
        $("#btnEditForm").on("click", function () {

            let index = parseInt($("#depTable").find(":checked").parents("tr").find(".hidden").text());
            console.log(index);
            $("#txtDepartment").val(depotArray[index].depotName).prop("readOnly", true);
            $("#txtSetTime").val(depotArray[index].depotSetTime).prop("readOnly", true);
            $("#txtDescribe1").val(depotArray[index].depotDescribe);
            $("#editDepartment").modal();
            $("#btnAdd1").unbind('click');
            undateExcute(index);
        });
    }

    function undateExcute(index) {
        $("#btnAdd1").click(function () {

            //更新数据
            //获取表单数据
            depotArray[index].depotDescribe = $("#txtDescribe1").val();
            displayUserTable();
            $("#editDepartment").modal("hide");
        })
    }

//显示表的主体数据
    function displayUserTable() {
        $("#depTable").html("");
        $("#checkAll")[0].checked = false;
        var start = (currentPage - 1) * perSize;
        var end = start + perSize;
        var outHtml = "";
        for (var i = start; i < end && i < depotArray.length; i++) {
            outHtml += `<tr>
        <td class="hidden">${i}</td>
            <td><input type='checkbox' name='checkItem' /></td>
            <td>${depotArray[i].depotId}</td>
            <td>${depotArray[i].depotName}</td>
            <td>${depotArray[i].depotSetTime}</td>
            <td>${depotArray[i].depotDescribe}</td>
        </tr>`;
        }
        $("#depTable").html(outHtml);
    }

//用于显示页码
    function pagebar(index) {
        totalPage = Math.ceil(depotArray.length / perSize);
        if (currentPage > totalPage) {
            currentPage = totalPage;
        }
        currentPage = index || currentPage;
        $("#divPage").html("");
        var str = "";

        for (var i = 0; i < totalPage; i++) {
            if (currentPage == (i + 1)) {
                str += `<button class='btn btn-primary page'>${i + 1}</button>`;
            } else {
                str += `<button class='btn btn-default page'>${i + 1}</button>`;
            }
        }

        $("#divPage").html(str);
    }

    function pageClick() {
        $("#divPage").on("click", ".page", function () {
            $(".page").each(function () {
                $(this).removeClass("btn-primary");
            });
            $(this).addClass("btn-primary");
            currentPage = Number(this.innerText);
            displayUserTable();
        });

        $("#pageNext").click(function () {
            if (currentPage == $("#divPage").children().length) {
                return 0;
            } else {
                currentPage++;
                displayUserTable();
                pagebar(currentPage);
            }
        });

        $("#pagePrevious").click(function () {
            if (currentPage == 1) {
                alert("已是第一页");
            } else {
                currentPage--;
                displayUserTable();
                pagebar(currentPage);
            }
        })

    }
});