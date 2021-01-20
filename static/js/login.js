/**
 * Created by Administrator on 2019/3/22.
 */
var canGetCookie = 0;//是否支持存储Cookie 0 不支持 1 支持
var ajaxmockjax = 1;//是否启用虚拟Ajax的请求响 0 不启用  1 启用
//默认账号密码
// 新建的一个对象数组，存放登录账号的信息，可以自己加，要改账号密码也在这儿改
var loginVerify=[
    {
        loginName:'SecretaryGeneral',
        loginPassword:'12345'
    },
    {
        loginName:'manager',
        loginPassword:'12345'
    },
    {
        loginName:'assistant',
        loginPassword:'12345'
    },
    {
        loginName:'StaffMember',
        loginPassword:'12345'
    }
]
var CodeVal = 0;
Code();
function Code() {
    if(canGetCookie == 1){
        createCode("AdminCode");
        var AdminCode = getCookieValue("AdminCode");
        showCheck(AdminCode);
    }else{
        showCheck(createCode(""));
    }
}
function showCheck(a) {
    CodeVal = a;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.font = "80px 'Hiragino Sans GB'";
    ctx.fillStyle = "#E8DFE8";
    ctx.fillText(a, 0, 100);
}
$(document).keypress(function (e) {
    // 回车键事件
    if (e.which == 13) {
        $('input[type="button"]').click();
    }
});
//粒子背景特效
$('body').particleground({
    dotColor: '#E8DFE8',
    lineColor: '#133b88'
});
$('input[name="pwd"]').focus(function () {
    $(this).attr('type', 'password');
});
$('input[type="text"]').focus(function () {
    $(this).prev().animate({ 'opacity': '1' }, 200);
});
$('input[type="text"],input[type="password"]').blur(function () {
    $(this).prev().animate({ 'opacity': '.5' }, 200);
});
$('input[name="login"],input[name="pwd"]').keyup(function () {
    var Len = $(this).val().length;
    if (!$(this).val() == '' && Len >= 5) {
        $(this).next().animate({
            'opacity': '1',
            'right': '30'
        }, 200);
    } else {
        $(this).next().animate({
            'opacity': '0',
            'right': '20'
        }, 200);
    }
});
var open = 0;
layui.use('layer', function () {
    //非空验证
    $('input[type="button"]').click(function () {
        var login = $('input[name="login"]').val();
        var pwd = $('input[name="pwd"]').val();
        var code = $('input[name="code"]').val();
        if (login == '') {
            ErroAlert('请输入您的账号');
        } else if (pwd == '') {
            ErroAlert('请输入密码');
        } else if (code == '' || code.length != 4) {
            ErroAlert('输入验证码');
        } else {
            //认证中..
            $('.login').addClass('test'); //倾斜特效
            setTimeout(function () {
                $('.login').addClass('testtwo'); //平移特效
            }, 300);
            setTimeout(function () {
                $('.authent').show().animate({ right: -320 }, {
                    easing: 'easeOutQuint',
                    duration: 600,
                    queue: false
                });
                $('.authent').animate({ opacity: 1 }, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
            }, 500);
            //登陆
            var JsonData = { login: login, pwd: pwd, code: code };
            //此处做为ajax内部判断
            var url = "";
            // 这儿做的登录验证，JsonData是你输入的信息，用来跟你存放数组中的账号信息做判断
            // for (let i=0 ; i<loginVerify.length;i++){
            //     if(JsonData.login == loginVerify[i].loginName && JsonData.pwd == loginVerify[i].loginPassword && JsonData.code.toUpperCase() == CodeVal.toUpperCase()){
            //         url = "Ajax/Login";
            //         break;
            //     }else if(i == loginVerify.length-1){
            //         url = "Ajax/LoginFalse";
            //     }
            // }
            $.ajax({
                url:"/crm_login",   // 请求路径
                type:"post",            // 请求的方式，不区分大小写
                async:true,             // 是否异步，true是默认值，false为同步请求
                cache:false,            // 关闭缓存，目的是为了避免部分浏览器缓存加载出错(IE)
                contentType:"application/json;charset=utf-8",
                datatype:"json",        // 返回类型，text文本、html页面、json数据
                data:JSON.stringify(JsonData),
                success:function(data){
                    alert("数据: " + JSON.stringify(data));
                    //ajax返回
                    //认证完成
                    setTimeout(function () {
                        $('.authent').show().animate({ right: 90 }, {
                            easing: 'easeOutQuint',
                            duration: 600,
                            queue: false
                        });
                        $('.authent').animate({ opacity: 0 }, {
                            duration: 200,
                            queue: false
                        }).addClass('visible');
                        $('.login').removeClass('testtwo'); //平移特效
                    }, 2000);
                    setTimeout(function () {
                        $('.authent').hide();
                        $('.login').removeClass('test');
                        if (data.Status == 'ok') {
                            //登录成功
                            $('.login div').fadeOut(100);
                            $('.success').fadeIn(1000);
                            $('.success').html(data.Text);
                            window.setTimeout(function(){
                                window.location.href="index.html"
                            },1000);
                            //跳转操作
                        } else {
                            AjaxErro(data);
                        }
                    }, 2400);
                },
                error:function(response){
                    alert("出错" + alert("数据: " + JSON.stringify(response)));
                }
            });
        }
    })
});
// if(ajaxmockjax == 1){
//     $.mockjax({
//         url: 'Ajax/Login',
//         status: 200,
//         responseTime: 50,
//         responseText: {"Status":"ok","Text":"登陆成功<br /><br />正在跳转中，请稍等...."}
//     });
//     $.mockjax({
//         url: 'Ajax/LoginFalse',
//         status: 200,
//         responseTime: 50,
//         responseText: {"Status":"Erro","Erro":"账号名或密码或验证码有误"}
//     });
// }