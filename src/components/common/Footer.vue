<template>
  <div class="wrap">
    <div class="footer">
        <div class="clear">
            <div class="contact fl">
                <p>公司地址:山东省济宁市经济开发区车站西路中煤创业园</p>
                <p>公司邮箱:zmjsgs@163.com</p>
                <p>联系方式:营销一部：18854789899,营销二部：18854767788</p>
            </div>
            <div class="fr">
                <div class="dingyue fl">
                    <img src="../../assets/imgs/gzh.jpg" alt="订阅号">
                    <span class="tip">扫码关注微信订阅号</span>
                </div>
                <div class="fuwu fl">
                    <img src="../../assets/imgs/fwh.jpg" alt="服务号">
                    <span class="tip">扫码关注微信服务号</span>
                </div>
            </div>
        </div>
        <div class="copyright-info">山东中煤建设工程有限公司 版权所有 Copyright 2019 网站备案号：鲁TCP备16005110号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer{
    margin-top: 80px;
}
.footer .contact{
    margin-top: 20px;
}
.footer .contact p{
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    color: #666;
}
.footer .dingyue, .footer .fuwu{
    width: 200px;
    text-align: center;
}
.footer .tip{
    display: block;
    margin-top: 30px;
    line-height: 26px;
    font-size: 18px;
    color: #666;
}
.copyright-info{
    font-size: 18px;
    color: #666;
    text-align: center;
    margin: 70px 0 20px 0;
}
</style>
