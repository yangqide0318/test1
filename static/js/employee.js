$(function () {
    let perSize = 8;//页面显示的条数(随着页码改变而改变)
    let currentPage = 1;//当前显示的页码(随着页码改变而改变)
    let totalPage = -1;//总共的页数（随着数据改变而改变）
    let temporaryArray = [];//临时储存数据
    let nowShow = 1;//当前显示的数组(1为原始数据显示employeeAarray，2为查找后的数据显示temporaryArray)
//员工管理

    employeeTableShow();//表格内显示员工数据(原始数据)
    employeePage();//表格外页码显示（原始数据）
    employeeDel();//删除
    employeeLook();//查看员工信息
    employeeEdit();//编辑员工信息
    employeeLookup();//查找员工
    pageClick();//点击页面
    employeeAdd();//添加员工
    selectAll();//全选
    employeeAllDelete();//删除选取的员工
//员工信息显示，并且在表格内显示
    function employeeTableShow() {
        let array;
        if (nowShow === 1) {
            array = employeeArray;//如果当前数组为employeeAarray
        } else if (nowShow == 2) {
            array = temporaryArray;//如果当前数组为temporaryArray
            // if (temporaryArray.length==0){
            //     console.log('空数组为空')
            // }
        }
        $("#employeeTable").empty();
        if (currentPage === 0) {        //如果当前页面为0，就初始化当前页面变为1
            currentPage = 1;
        }
        let start = (currentPage - 1) * perSize;//当前页面显示的开始数据的下标位置
        let end = start + perSize;//当前页面显示的结束数据的下标位置
        let outHtml = "";//加入的每一条内容
        for (let i = start; i < end && i < array.length; i++) {
            let id = array[i].empId;
            let name = array[i].empName;
            let sex = array[i].empSex;
            let date = array[i].empBirth;
            let education = array[i].empEducation;
            let phone = array[i].empTel;
            let department = array[i].depotName;
            let position = array[i].workName;
            $("#employeeTable").append(`<tr class="tableTr">
        <td><input type="checkbox" class="checkBox" data-index='${i}'></td>
        <td class="hidden">${id}</td>
        <td class="name">${name}</td>
        <td>${sex}</td>
        <td>${date}</td>
        <td>${education}</td>
        <td>${phone}</td>
        <td class="department">${department}</td>
        <td>${position}</td>
        <td class="center">
            <span data-index='${i}' title="查看" class="employeeLook font">&#xe544;</span>
            <span data-index='${i}' title="编辑" class="employeeEdit font">&#xe63c;</span>
            <span data-index='${i}' title="删除" class="employeeDel font">&#xe66e;</span>
</td>
        </tr>`);
        }
        $("employeeTable").html(outHtml);
    }

//表格页码显示
    function employeePage() {
        let array;
        if (nowShow == 1) {
            array = employeeArray;//如果当前数组为employeeAarray
        } else if (nowShow == 2) {
            array = temporaryArray;//如果当前数组为temporaryArray
        }
        let length = array.length;
        totalPage = Math.ceil(length / perSize);
        if (currentPage > totalPage) {   //如果当前页码大于总页码，则当前页码等于总页码
            currentPage = totalPage;
        }
        $("#employeeTablePage").html("");
        let str = "";
        for (let i = 0; i < totalPage; i++) {
            if (currentPage == (i + 1)) {
                str += `<button class="btn pageBtn btn-primary page">${i + 1}</button>`;
            } else {
                str += `<button class="btn pageBtn btn-default page">${i + 1}</button>`;
            }
        }
        $("#employeeTablePage").html(str);
    }

//点击页面
    function pageClick() {
        $("#pre").hide();
        let array;
        if (nowShow == 1) {
            array = employeeArray;//如果当前数组为employeeAarray
        } else if (nowShow == 2) {
            array = temporaryArray;//如果当前数组为temporaryArray
        }
        let pageClick = $("#employeeTablePage").on("click", ".pageBtn", function () {
            $(".btn").each(function (index, item) {
                $(this).removeClass('btn-primary');//移除btn选中的样式
            });
            $(this).addClass('btn-primary');//添加btn选中的样式
            currentPage = Number(this.innerText);//当前页面等于btn内容
            if (currentPage > 1) {
                $("#pre").show();
            } else if (currentPage == 1) {
                $("#pre").hide();
            }
            if (currentPage == totalPage) {
                $("#next").hide();
            }
            if (currentPage < totalPage) {
                $("#next").show();
            }
            employeeTableShow(array);
        });
        //点击上一页显示页码和表格内容
        $("#btn-page").on("click", "#pre", function () {
            currentPage = currentPage - 1;//点击上一页，当前页面减一
            if (currentPage > 1) {
                $("#pre").show();
            } else if (currentPage == 1) {
                $("#pre").hide();
            }
            if (currentPage == totalPage) {
                $("#next").hide();
            }
            if (currentPage < totalPage) {
                $("#next").show();
            }
            employeePage();//重新显示页码
            employeeTableShow(array);//重新显示页面内容
        });
        //点击下一页显示页码和表格内容
        $("#btn-page").on("click", "#next", function () {
            currentPage = currentPage + 1;//点击上一页，当前页面加
            if (currentPage > 1) {
                $("#pre").show();
            } else if (currentPage == 1) {
                $("#pre").hide();
            }
            if (currentPage == totalPage) {
                $("#next").hide();
            }
            if (currentPage < totalPage) {
                $("#next").show();
            }
            employeePage();//重新显示页码
            employeeTableShow(array);//重新显示页面内容
        })
    }

//删除员工
    function employeeDel() {
        $("#employeeTable").on("click", ".employeeDel", function () {
            let employeeIdValue = $(this).parent().parent().find(".hidden").text();//得到此员工所在原始数据的id
            for (let i = 0; i < employeeArray.length; i++) {
                if (employeeArray[i].empId == employeeIdValue) {
                    employeeArray.splice(i, 1);
                }
            }
            if (nowShow == 2) {
                for (let i = 0; i < temporaryArray.length; i++) {
                    if (temporaryArray[i].empId == employeeIdValue) {
                        temporaryArray.splice(i, 1);
                    }
                }
            }
            employeeTableShow();//重新显示页面
            employeePage();//重新显示页码
        })
    }

//查看员工信息
    function employeeLook() {
        $("#employeeTable").on("click", ".employeeLook", function () {
            let array;
            if (nowShow == 1) {
                array = employeeArray;//如果当前数组为employeeAarray
            } else if (nowShow == 2) {
                array = temporaryArray;//如果当前数组为temporaryArray
            }
            $("#save").attr("class", "btn btn-primary hidden");
            $("#add").attr("class", "btn btn-primary hidden");
            $("#modal").modal('show');
            $(".modal-title").text("员工信息");
            let index = $(this).attr('data-index');//得到这个数据在数组中的下标
            $("#name").html(array[index].empName);
            $("#sex").html(array[index].empSex);
            $("#date").html(array[index].empBirth);
            $("#education").html(array[index].empEducation);
            $("#major").html(array[index].empMajor);
            $("#phone").html(array[index].empTel);
            $("#address").html(array[index].empAddress);
            $("#political").html(array[index].empOutlook);
            $("#department").html(array[index].depotName);
            $("#position").html(array[index].workName);
            $("#entryTime").html(array[index].empEntryTime);
        })
    }

//修改员工信息
    function employeeEdit() {
        let index;//得到这个数据在数组中的下标
        $("#employeeTable").on("click", ".employeeEdit", function () {
            let array;
            if (nowShow == 1) {
                array = employeeArray;//如果当前数组为employeeAarray
            } else if (nowShow == 2) {
                array = temporaryArray;//如果当前数组为temporaryArray
            }
            $("#save").attr("class", "btn btn-primary");
            $("#add").attr("class", "btn btn-primary hidden");
            $("#modal").modal('show');
            $(".modal-title").text("编辑信息");
            index = $(this).attr('data-index');//得到这个数据在数组中的下标
            $("#name").html(array[index].empName);
            $("#sex").html(array[index].empSex);
            $("#date").html(array[index].empBirth);
            $("#education").html(array[index].empEducation);
            $("#major").html(array[index].empMajor);
            $("#phone").html("<input id='editPhone' type='text' class='editInput' value=" + array[index].empTel + ">");
            $("#address").html(array[index].empAddress);
            $("#political").html("<select id='editPolitical'><option value='1'>共产党员</option><option selected=selected value='2'>群众</option><option>民主党员</option></select>");
            $("#department").html("<select id='editDepartment'>" +
                "<option value='1'>人事部</option><option value='2'>市场部</option>" +
                "</select>");
            $("#position").html("<select id='editPosition'>" +
                "<option>人事经理</option><option>人事专员</option>" +
                "</select>");
            $("#entryTime").html(array[index].empEntryTime);
            $("#editDepartment").change(function () {        //一级选项，二级选项改变
                let selectValue = $("#editDepartment").val();
                if (selectValue == 1) {
                    $("#position").html("<select id='editPosition'>><option>人事经理</option><option>人事专员</option></select>");
                } else if (selectValue == 2) {
                    $("#position").html("<select id='editPosition'>><option>市场部经理</option><option>市场专员</option></select>");
                }
            });
        });
        $(".modal-footer").on("click", "#save", function () {
            employeeArray[index].empTel = $("#editPhone").val();
            employeeArray[index].empOutlook = $("#editPolitical option:selected").text();
            employeeArray[index].depotName = $("#editDepartment option:selected").text();
            employeeArray[index].workName = $("#editPosition option:selected").text();
            if (nowShow == 1) {
                employeeTableShow(employeeArray);
            } else if (nowShow == 2) {
                temporaryArray[index].empTel = $("#editPhone").val();
                temporaryArray[index].empOutlook = $("#editPolitical option:selected").text();
                employeeArray[index].depotName = $("#editDepartment option:selected").text();
                employeeArray[index].workName = $("#editPosition option:selected").text();
                employeeTableShow(temporaryArray);
            }
        })
    }

//查找员工信息
    function employeeLookup() {
        $("#lookUp").click(function () {
            temporaryArray = [];//清空临时数据内容
            let selectValue = $("#lookSelect option:selected").attr("value");//下拉框选择value值
            let inputValue = $("#lookInput").val();//输入框输入的值
            // let nameArray=[],departmentArray=[],educationArray=[],positionArray = [];//拿出数组的数据，组成单个数组
            if (inputValue == "") {           //输入的内容为空时,直接显示当前全部数据和页码
                nowShow = 1;
                employeePage();
                employeeTableShow();
                return;
            }
            for (let i = 0; i < employeeArray.length; i++) {
                // nameArray.push(employeeAarray[i].name);
                // departmentArray.push(employeeAarray[i].department);
                // educationArray.push(employeeAarray[i].education);
                // positionArray.push(employeeAarray[i].position);
                if (selectValue == 1) {
                    if (inputValue == employeeArray[i].empName.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                    if (inputValue == employeeArray[i].depotName.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                    if (inputValue == employeeArray[i].empEducation.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                    if (inputValue == employeeArray[i].workName.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                } else if (selectValue == 2) {
                    if (inputValue == employeeArray[i].empName.match(inputValue)) {
                        // employeeTableShow(employeeAarray);
                        // console.log($("#employeeTable tr"))
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                } else if (selectValue == 3) {
                    if (inputValue == employeeArray[i].depotName.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                } else if (selectValue == 4) {
                    if (inputValue == employeeArray[i].empEducation.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                } else if (selectValue == 5) {
                    if (inputValue == employeeArray[i].workName.match(inputValue)) {
                        temporaryArray.push(employeeArray[i]);//把输入的内容和数据里面内容相同的部分放入临时的数组中
                    }
                }
            }
            nowShow = 2;
            employeeTableShow();//在表格内容里面显示临时数组的内容
            employeePage();//临时数据对应的下标
        });
    }

//添加新员工
    function employeeAdd() {
        $("#addEmployee").click(function () {
            $("#add").attr("class", "btn btn-primary");
            $("#save").attr("class", "btn btn-primary hidden");
            $("#modal").modal('show');
            $(".modal-title").text("添加员工");
            $("#name").html("<input class='addInput' id='addName' type='text'>");
            $("#sex").html("<input class='addInput' id='man' name='sex' value='男' type='radio' checked='checked'><label for='man'>男</label>" + "<input id='woman' name='sex' value='女' type='radio'><label for='woman'>女</label>");
            $("#date").html("<input class='addInput' id='addDate' type='text'>");
            $("#education").html("<select id='addEducation'><option>本科</option><option>高中</option></select>");
            $("#major").html("<input class='addInput' id='addMajor' type='text'>");
            $("#phone").html("<input class='addInput' id='addPhone' type='text'>");
            $("#address").html("<input class='addInput' id='addAddress' type='text'>");
            $("#political").html("<select id='addPolitical'><option>党员</option><option>群众</option></select>");
            $("#department").html("<select id='addDepartment'><option value='1'>人事部</option><option value='2'>财务部</option></select>");
            $("#position").html("<select class='addPosition'><option>人事经理</option><option>人事专员</option></select>");
            $("#entryTime").html("<input class='addInput' id='addEntryTime' type='text'>");
            $("#addDepartment").change(function () {        //一级选项，二级选项改变
                let selectValue = $("#addDepartment").val();
                if (selectValue == 1) {
                    $("#position").html("<select class='addPosition'><option>人事经理</option><option>人事专员</option></select>");
                } else if (selectValue == 2) {
                    $("#position").html("<select class='addPosition'><option>财务经理</option><option>会计</option></select>");
                }
            });
        });
        $(".modal-footer").on("click", "#add", function () {
            let addID = employeeArray[employeeArray.length - 1].empId + 1;
            employeeArray.push({
                empId: addID,
                empName: $("#addName").val(),
                empSex: $('input[name="sex"]:checked').val(),
                empBirth: $("#addDate").val(),
                empEducation: $("#addEducation").val(),
                empTel: $("#addPhone").val(),
                depotName: $("#addDepartment option:selected").text(),
                workName: $(".addPosition option:selected").val(),
                empMajor: $("#addMajor").val(),
                empAddress: $("#addAddress").val(),
                empOutlook: $("#addPolitical").val(),
                empEntryTime: $("#addEntryTime").val(),
            });
            nowShow = 1;
            employeeTableShow();
            console.log(employeeArray)
        });
    }

//全选
    function selectAll() {
        $("#selectAll").click(function () {
            let checked = this.checked;
            $(".checkBox").each(function (index, item) {
                item.checked = checked;
            })
        });
    }

//删除所选员工
    function employeeAllDelete() {
        $("#delEmployee").click(function () {
            let checked = $("input[class='checkBox']:checked");
            for (let i = 0; i < checked.length; i++) {
                let employeeIdValue = $(checked[i]).parent().parent().find(".hidden").text();//得到此员工所在原始数据的id
                console.log(employeeIdValue);
                for (let j = 0; j < employeeArray.length; j++) {
                    if (employeeArray[j].empId == employeeIdValue) {
                        employeeArray.splice(j, 1);
                    }
                }
                if (nowShow == 2) {
                    for (let j = 0; j < temporaryArray.length; j++) {
                        if (temporaryArray[j].empId == employeeIdValue) {
                            temporaryArray.splice(j, 1);
                        }
                    }
                }
            }

            employeePage();//重新显示页码
            employeeTableShow();//重新显示页面
            console.log(employeeArray)
        });
    }
});