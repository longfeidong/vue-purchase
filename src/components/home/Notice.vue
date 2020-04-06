<template>
    <div class="wrap">
        <div class="notice_width_top clear">
            <div class="notice fl">
                <img class="notice_img" src="../../assets/imgs/gonggao.png">
                <p class="notice_news" id="notice_news">
                    <a href="/cgpt/resources/style/purchase/notice-details.jsp?id=1">
                        <span>标题1</span><span>2019-12-16</span>
                    </a>
                </p>
            </div>
            <div class="irb_more_font"><a href="/cgpt/resources/style/purchase/notice-list.jsp" id="notice-more">更多<i></i></a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notice'
}
</script>

<style>
.wrap .notice_width_top{width:100%;height:50px;line-height:50px;border-bottom:1px solid #e9e9e9;}
.notice .notice_img{display:block;float:left;width:112px;height:21px;margin-top:17px;}
.notice .notice_news{color:#999999;font-size:18px;margin-left:25px;float:left;}
.notice .notice_news a{color:#999999;}
.notice .notice_news a:hover{color:#31a2d9;}
.notice .notice_news span{margin-left:10px;}
.irb_more_font{float:right;}
.irb_more_font_mtop{float:right;margin-top:5px;}
.irb_more_font a{display:inline-block;font-size:18px;color:#999999;}
.irb_more_font a i{margin-left:5px;display:inline-block;width:7px;height:11px;background:url(../../assets/imgs/left_arr.png) no-repeat;*margin-bottom:3px;}
.irb_more_font a:hover{color:#31a2d9;}
.irb_more_font a:hover i{margin-left:5px;display:inline-block;width:7px;height:11px;background:url(../../assets/imgs/left_arr_lan.png) no-repeat;}
</style>
