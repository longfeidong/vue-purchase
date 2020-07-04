<template>
  <div class="wrap">
    <div class="header-container clear">
        <div class="logo fl">
            <a href="/">
                <img src="../../assets/imgs/logo.png" width="206" height="56" alt="中煤建设">
            </a>
        </div>
        <ul class="nav fl">
            <li>
                <a href="./">首页</a>
            </li>
            <li>
                <a href="/blist/id/3">通知公告</a>
            </li>
            <li>
                <a href="/blist/id/1">招标公告</a>
            </li>
            <li>
                <a href="/blist/id/2">中标公示</a>
            </li>
        </ul>
        <div class="logreg fr" id="logreg">
            <a href="./login.html" class="login">登录</a>
            <a href="./register.html" class="reg">注册</a>
        </div>
        <div class="logged-in fr" id="logged-in">
            <span class="fl">你好，<em class="uname">马国良</em></span>
            <a href="javascript:;" class="fl quit" id="updatePwd">修改密码</a>
            <a href="javascript:;" class="fl quit" id="quit">退出</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.wrap .header-container{
    width: 100%;
    height: 110px;
}
.wrap .header-container .logo{
    height: 56px;
    margin: 27px 0;
}
.wrap .header-container .nav{
    margin: 35px 0 35px 220px;
}
.wrap .header-container .nav li{
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    margin-right: 65px;
}
.header-container .nav li a:hover{
    color: #31a2d9;
}
.header-container .logreg{
    width: 190px;
    margin-top: 35px;
}
.header-container .logreg a{
    float: left;
    line-height: 40px;
    text-align: center;
    margin-left: 15px;
    font-size: 18px;
}
.header-container .logreg .login{
    width: 80px;
    height: 40px;
    color: #fff;
    background: #31a2d9;
}
.header-container .logreg .reg{
    width: 76px;
    height: 36px;
    border: 2px solid #31a2d9;
    color: #31a2d9;
}
.header-container .logged-in{
    display: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-top: 35px;
}
.header-container .logged-in .uname{
    font-style: normal;
}
.header-container .logged-in .quit{
    margin-left: 15px;
    color: #31a2d9;
    text-decoration: underline;
}
</style>
