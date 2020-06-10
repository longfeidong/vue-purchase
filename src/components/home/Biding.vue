<template>
  <div class="wrap">
    <!-- <div class="bid">
      <div class="bid-top clear">
        <h2 class="fl">招标公告</h2>
        <div class="bid-more fr">
          <a href="javascript:;" id="tender-more">更多<i></i></a>
        </div>
      </div>
      <div class="bid-info">
        <div class="title-info clear">
          <span class="fl opt1">类型</span>
          <span class="fl opt2">项目编号</span>
          <span class="fl opt3">项目名称</span>
          <span class="fl opt4">公告时间</span>
        </div>
        <ul class="bid-list" id="tender">
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bid">
      <div class="bid-top clear">
        <h2 class="fl">中标公示</h2>
        <div class="bid-more fr">
          <a href="javascript:;" id="bid-more">更多<i></i></a>
        </div>
      </div>
      <div class="bid-info">
        <div class="title-info clear">
          <span class="fl opt1">类型</span>
          <span class="fl opt2">项目编号</span>
          <span class="fl opt3">项目名称</span>
          <span class="fl opt4">归档时间</span>
        </div>
        <ul class="bid-list" id="bid">
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="bid">
      <div class="bid-top clear">
        <h2 class="fl">招标公告</h2>
        <div class="bid-more fr">
          <!-- <a href="javascript:;" id="tender-more">更多<i></i></a> -->
          <router-link tag="a" :to="'/blist/id/' + list['tender']['id']">更多</router-link>
        </div>
      </div>
      <div class="bid-info">
        <div class="title-info clear">
          <span class="fl opt1">类型</span>
          <span class="fl opt2">项目编号</span>
          <span class="fl opt3">项目名称</span>
          <span class="fl opt4">公告时间</span>
        </div>
        <ul class="bid-list" id="tender">
          <li v-for="items of list['tender']['info']" :key="items.id">
            <router-link tag="a" :to="'/details/id/' + items['id']">
              <span class="fl opt1">{{ items.type }}</span>
              <span class="fl opt2">{{ items.numbers }}</span>
              <span class="fl opt3">{{ items.proName }}</span>
              <span class="fl opt4">{{ items.time }}</span>
            </router-link>
          </li>
          <!-- <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="bid">
      <div class="bid-top clear">
        <h2 class="fl">中标公示</h2>
        <div class="bid-more fr">
          <!-- <a href="javascript:;" id="bid-more">更多<i></i></a> -->
          <!-- /cgpt/resources/style/purchase -->
          <router-link tag="a" :to="'/blist/id/' + list['bid']['id']">更多</router-link>
        </div>
      </div>
      <div class="bid-info">
        <div class="title-info clear">
          <span class="fl opt1">类型</span>
          <span class="fl opt2">项目编号</span>
          <span class="fl opt3">项目名称</span>
          <span class="fl opt4">归档时间</span>
        </div>
        <ul class="bid-list" id="bid">
          <li v-for="items of list['bid']['info']" :key="items.id">
            <router-link tag="a" :to="'/details/id/' + items['id']">
              <span class="fl opt1">{{ items.type }}</span>
              <span class="fl opt2">{{ items.numbers }}</span>
              <span class="fl opt3">{{ items.proName }}</span>
              <span class="fl opt4">{{ items.time }}</span>
            </router-link>
          </li>
          <!-- <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="fl opt1">钢材</span>
              <span class="fl opt2">A-20191011-001</span>
              <span class="fl opt3">深圳中铁二局工程有限公司成都分公司三菱帕杰罗小轿车租赁竞价</span>
              <span class="fl opt4">2019-10-11 09:03:09</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Biding',
  props: {
    list: Object
  },
  data () {
    return {
      details: '',
      detailsLink: ''
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   if (this.list['tender']['id'] === '1') {
    //     this.details = 'details'
    //   } else {
    //     this.details = 'detials2'
    //   }
    //   console.log(this.list)
    //   this.detailsLink = `/cgpt/resources/style/purchase/${this.details}/id/111`
    // })
  }
}
</script>

<style>
/* 招标公告 */
.wrap .bid{width: 100%;}
.bid .bid-top{height: 50px;line-height: 50px;margin-top: 25px;}
.bid .bid-top h2{font-size: 24px;color: #333;font-weight: normal;}
.bid .bid-top .bid-more a{font-size: 18px;color: #999;}
.bid-top .bid-more a i{margin-left:5px;display:inline-block;width:7px;height:11px;background:url(../../assets/imgs/left_arr.png) no-repeat;*margin-bottom:3px;}
.bid-top .bid-more a:hover{color:#31a2d9;}
.bid-top .bid-more a:hover i{margin-left:5px;display:inline-block;width:7px;height:11px;background:url(../../assets/imgs/left_arr_lan.png) no-repeat;}
.bid .bid-info{width: 100%;color: #666;}
.bid-info .title-info{width: 100%;}
.bid-info .title-info span{height: 98px;line-height: 98px;font-size: 18px;text-align: center;}
.bid-info .opt1{width: 106px;}
.bid-info .opt2{width: 290px;}
.bid-info .opt3{width: 550px;}
.bid-info .opt4{width: 254px;}
.bid-info .bid-list{font-size: 16px;}
.bid-info .bid-list li{height: 110px;line-height: 110px;text-align: center;transition: .3s;-moz-transition: 0.3s;-webkit-transition: 0.3s;-o-transition: 0.3s;}
.bid-info .bid-list li:hover{box-shadow: 0 10px 30px rgba(0,0,0,.15),0 -8px 30px rgba(0,0,0,.15);transform: translate3d(0,-2px,0);}
.bid-info .bid-list li a{display: block;color: #666;height:98px;/*transition: 0.3s;-moz-transition: 0.3s;-webkit-transition: 0.3s;-o-transition: 0.3s;*/}
</style>
