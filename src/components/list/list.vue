<template>
  <div class="wrap">
    <div class="bid">
      <div class="bid-top clear">
        <h2 class="fl" id="bid">{{ detailsInfo.titleName }}</h2>
      </div>
      <div class="bid-info">
        <div class="title-info clear">
          <span class="fl opt1">类型</span>
          <span class="fl opt2">项目编号</span>
          <span class="fl opt3">项目名称</span>
          <span class="fl opt4">公告时间</span>
        </div>
        <ul class="bid-list">
          <li v-for="item of list[num - 1]" :key="item.id">
            <router-link tag="a" :to="'/cgpt/resources/style/purchase/'+ detailsInfo.detailsLink +'/id/' + item['id']">
              <span class="fl opt1">{{ item.type }}</span>
              <span class="fl opt2">{{ item.numbers }}</span>
              <span class="fl opt3">{{ item.proName }}</span>
              <span class="fl opt4">{{ item.time }}</span>
            </router-link>
          </li>
          <!-- <li v-for="item of itemData" :key="item.id">
            <a href="javascript:;">
              <span class="fl opt1">{{ item.type }}</span>
              <span class="fl opt2">{{ item.numbers }}</span>
              <span class="fl opt3">{{ item.proName }}</span>
              <span class="fl opt4">{{ item.time }}</span>
            </a>
          </li> -->
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
        <div id="page" class="page_div"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// import paging from '../../assets/js/paging'
import '../../assets/js/paging'

export default {
  name: 'list',
  props: {
    list: Array
  },
  data () {
    return {
      detailsLink: '',
      num: 1, // 默认页码从第1页开始
      listData: [],
      itemData: [],
      totalSize: 0, // 共多少条数据
      totalPage: 0, // 共多少页
      pageSize: 10 // 每页多少条数据
    }
  },
  methods: {
    initListData (num) {
      // console.log(this.$route.params.id)
      this.itemData = this.listData[num - 1]
    },
    pagings (data) {
      var num = 0
      for (var i = 0; i < data.length; i++) {
        num += data[i].length
      }
      // console.log(num)
      this.totalSize = num
      this.totalPage = Math.ceil(this.totalSize / this.pageSize)
      // console.log(this.totalPage)
      // 分页
      $('#page').paging({
        pageNo: 1,
        totalPage: this.totalPage,
        totalSize: this.totalSize,
        callback: (n) => {
          this.num = n
          this.initListData(n)
        }
      })
    }
  },
  computed: {
    detailsInfo: function () {
      var detailsInfo = {}
      if (this.$route.params.id === '1') {
        detailsInfo.titleName = '招标公告'
        detailsInfo.detailsLink = 'details'
      } else {
        detailsInfo.titleName = '中标公式'
        detailsInfo.detailsLink = 'details2'
      }
      return detailsInfo
    }
  },
  watch: {
    list: function (newVal, oldVal) {
      // console.log(this.list)
      this.listData = newVal
      newVal && this.pagings(this.listData)
      // if (newVal) {
      //   this.initListData(this.num)
      //   this.pagings(this.listData)
      // }
    }
  },
  created () {
    // console.log('created:' + this.list)
    // this.listData = this.list
  },
  mounted () {
    // console.log('mounted:' + this.list)
    // this.initListData(this.num)
    // console.log(this.listData)
    this.pagings(this.list)
  }
}
</script>

<style>
/* 分页 */
.page_div {
  display:inline-block;
  width: 100%;
  margin: 30px 0 0;
  text-align: center;
  font-size: 15px;
  font-family: "microsoft yahei";
  color: #666666;
  box-sizing: border-box;
}
/*
 * 页数按钮样式
 */
.page_div a {
  min-width: 30px;
  height: 28px;
  border: 1px solid #e9e9e9!important;
  border-radius: 5px;
  text-align: center;
  margin: 0 4px;
  cursor: pointer;
  line-height: 28px;
  color: #333;
  font-size: 13px;
  display: inline-block;
  transition: .3s;
}
.page_div a:hover {
  background: #ff721f;
  border-color: #ff721f;
  color: #fff;
}

#firstPage,
#lastPage {
  width: 50px;
  /* color: #0073A9;
  border: 1px solid #0073A9!important; */
}

#prePage,
#nextPage {
  width: 70px;
  /* color: #0073A9;
  border: 1px solid #0073A9!important; */
}

.page_div .current {
  background-color: #ff721f;
  border-color: #ff721f;
  color: #FFFFFF;
}

.totalPages {
  margin: 0 10px;
}

.totalPages span,
.totalSize span {
  color: #0073A9;
  margin: 0 5px;
}
</style>
