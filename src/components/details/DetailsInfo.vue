<template>
  <div class="wrap">
    <div class="crumbs">
      <ul class="clear">
        <li class="fl"><a href="javascript:;">{{ list.detailsType }}</a></li>
        <li class="fl active"><a href="javascript:;">项目信息</a></li>
      </ul>
    </div>
    <div class="details-info">
      <div class="info-top clear" id="detail-info">
        <div class="clear">
            <span class="fl pname">{{ list.proName }}</span>
            <span class="fl divide">|</span>
            <span class="fl pnum">项目编号：{{ list.numbers }}</span>
        </div>
        <div class="ptype">类型：{{ list.type }}</div>
        <div class="ptime">起止时间：{{ list.time }}</div>
        <p class="describe">描述：<span v-html="list.describe"></span></p>
        <div class="winning-bid-info" v-if="list.detailsType === '中标公示'">
          <h2>中标人信息</h2>
          <p>中标单位：{{ list.winner }}</p>
          <p>中标金额: {{ list.money }}元</p>
          <p>项目负责人：{{ list.leader }}</p>
          <p>联系电话：{{ list.tel }}</p>
        </div>
      </div>
      <div class="content" v-if="list.detailsType === '招标公告'">
        <div class="content-box">
          <input type="text" class="offer" id="offer" placeholder="请输入报价，单位元……" />
          <!-- 加载编辑器的容器 -->
          <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
          <span @click="showOne()">获取编辑器内容</span>
          <!-- <VueUeditorWrap /> -->
          <!-- <textarea name="offer-content" id="offer-cont"></textarea> -->
          <div class="btn-box clear" id="btn-box">
            <a href="javascript:;" id="sub-btn" class="handle-btn fl">提交</a>
            <!-- <a href="javascript:;" id="cancel-btn" class="handle-btn fr">撤销投标信息</a> -->
          </div>
        </div>
        <!-- <div class="pop">
            <a href="javascript:;" class="go-reg">注册并报价</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'

export default {
  name: 'detailsInfo',
  props: {
    list: Object
  },
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      detailTypes: '',
      msg: '<h2>Vue + UEditor + v-model双向绑定</h2>',
      myConfig: {
        initialFrameHeight: 350,
        // UEDITOR_HOME_URL: '/caigou/ueditor/',
        // serverUrl: 'http://localhost:8080/cgpt/ueditor/jsp/controller.jsp',
        // imageUrlPrefix: '/cgpt',
        // imagePathFormat: '/upload/cgpt/image/{yyyy}{mm}{dd}/{time}{rand:6}'
        // UEDITOR_HOME_URL: '/caigou/ueditor/',
        // serverUrl: 'http://localhost:8080/cgpt/ueditor/jsp/controller.jsp',
        UEDITOR_HOME_URL: '/ueditor/',
        serverUrl: 'http://140.249.205.136:8082/cgpt/ueditor/jsp/controller.jsp'
        // imageUrlPrefix: '/cgpt',
        // imagePathFormat: '/upload/cgpt/image/{yyyy}{mm}{dd}/{time}{rand:6}'
        // serverUrl: 'http://localhost:8082/ueditor/jsp/controller.jsp'
        // serverUrl: 'http://140.249.205.136:8082/cgpt/ueditor/jsp/controller.jsp'
        // serverUrl: 'http://35.201.165.105:8000/controller.php'
        // serverUrl: 'http://140.249.205.136:8082/cgpt/resources/style/ueditor/jsp/controller.jsp?action=uploadimage'
      }
    }
  },
  methods: {
    showOne () {
      alert(this.msg)
    }
  },
  computed: {
    // detailType () {
    //   var detailType = ''
    //   if (this.list.winner === null) {
    //     detailType = '招标公告'
    //   } else {
    //     detailType = '中标公示'
    //   }
    //   return detailType
    // }
  },
  mounted () {
    // console.log(list)
    // var ue = UE.getEditor('offer-cont')
    // ue.ready(function () {
    //   ue.setHeight(350)
    // })
    // if (this.list.winner === null) {
    //   this.detailTypes = '招标公告'
    // } else {
    //   this.detailTypes = '中标公示'
    // }
  }
}
</script>

<style>
/* 详情页 */
.wrap .crumbs{width: 100%;margin-top: 35px;}
.crumbs ul{padding-left: 10px;}
.crumbs ul li a{color: #999;font-size: 18px;}
.crumbs ul > li + li:before {color: #999999;content: ">";padding: 0 5px;font-size: 18px;}
.crumbs ul .active a{color: #333;}
.details-info{width: 100%;padding-top: 50px;}
.details-info .info-top{padding: 0 30px;line-height: 42px;font-size: 18px;color: #999;}
.details-info .info-top .pname{font-size: 22px;color: #333;max-width: 810px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.details-info .info-top .divide{padding: 0 55px 0 35px;}
.details-info .info-top .ptype{height: 44px;line-height: 44px;margin-top: 15px;}
.details-info .info-top .describe{font-size: 18px;line-height: 36px;margin-top: 160px;}
.details-info .content{width: 100%;/*height: 640px;*/margin-top: 120px;position: relative;}
.details-info .content .content-box{padding: 100px 40px;/*height: 340px;*/}
.content .content-box .input-content, .content .content-box .offer{width: 100%;border: 4px solid #e9e9e9;box-sizing: border-box;border-radius: 3px;font-size: 18px;color: #999;}
.content .content-box .input-content:focus, .content .content-box .offer:focus{ border:4px solid  #fb6a39}
.content .content-box .input-content{padding: 30px;height: 340px;}
.content .content-box .offer{height: 45px;margin-bottom: 20px;padding: 30px;}
.content-box .handle-btn{display:block;width: 120px;height: 38px;line-height: 38px;text-align: center;font-size: 16px;color: #666;border: 2px solid #ccc;border-radius: 5px;color: #666;margin: 20px auto 0;}
.content-box .handle-btn{border: 4px solid #e9e9e9;color: #999;margin: 20px 0;}
.content-box .handle-btn:hover{border: 4px solid #fb6a39;color: #fb6a39;}
.input-content::-webkit-input-placeholder, .offer::-webkit-input-placeholder{font-size: 18px; color: #999;}         /* 使用webkit内核的浏览器 */
.input-content:-moz-placeholder, .offer::-webkit-input-placeholder{font-size: 18px; color: #999;}                   /* Firefox版本4-18 */
.input-content::-moz-placeholder, .offer::-webkit-input-placeholder{font-size: 18px; color: #999;}                  /* Firefox版本19+ */
.input-content:-ms-input-placeholder, .offer::-webkit-input-placeholder{font-size: 18px; color: #999;}              /* IE浏览器 */
.details-info .content .pop{width: 100%;height: 100%;background: rgba(0,0,0,.5);position: absolute;left: 0;top: 0;z-index: 1000;}
.content .pop .go-reg{display:block;width: 340px;height: 74px;line-height: 74px;background:#ef5901;border-radius: 5px;font-size: 28px;color: #fff;text-align: center;margin: 320px auto;}
/* 中标信息 */
.wrap .winning-bid-info{padding: 30px 0 0;}
.wrap .winning-bid-info h2{text-align: left;margin-bottom: 10px;}
.wrap .winning-bid-info p{height: 44px;line-height: 44px;font-size: 18px;color: #999;}
</style>
