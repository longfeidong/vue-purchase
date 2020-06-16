<template>
  <div class="wrap-container">
    <Header />
    <template v-if="!this.$route.params.type">
      <Detail :list="detailsInfo" />
    </template>
    <template v-else>
      <NoticeDetail :list="detailsInfo" />
    </template>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Detail from '@/components/details/DetailsInfo.vue'
import NoticeDetail from '@/components/details/NoticeInfo.vue'
import axios from 'axios'

export default {
  name: 'detail',
  components: {
    Header,
    Detail,
    NoticeDetail,
    Footer
  },
  data () {
    return {
      detailsInfo: {}
    }
  },
  methods: {
    getDetailData () {
      // const url = 'http://localhost:8080/cgpt/zbgl'
      // axios.get(url + '/queryZbById', {
      //   params: {
      //     'zbid': this.$route.params.id
      //   }
      // }).then(this.getDetailDataSuc)

      // axios.get('/api/queryZbById', {
      //   params: {
      //     'zbid': this.$route.params.id
      //   }
      // }).then(this.getDetailDataSuc)

      var queryStr = ''
      var queryId = ''
      if (!this.$route.params.type) {
        queryStr = 'queryZbById'
        queryId = 'zbid'
      } else {
        queryStr = 'querTzglById'
        queryId = 'id'
      }

      if (process.env.NODE_ENV === 'production') {
        // console.log('生产环境')
        const url = 'http://140.249.205.136:8082/cgpt/zbgl'
        // url + '/queryZbById'
        // axios.get(url + `/${queryStr}`, {
        //   params: {
        //     'zbid': this.$route.params.id
        //   }
        // }).then(this.getDetailDataSuc)
        axios.get(url + `/${queryStr}?${queryId}=${this.$route.params.id}`)
          .then(this.getDetailDataSuc)
      } else {
        // console.log('开发环境')
        // '/api/queryZbById'
        // axios.get(`/api/${queryStr}`, {
        //   params: {
        //     'zbid': this.$route.params.id
        //   }
        // }).then(this.getDetailDataSuc)
        axios.get(`/api/${queryStr}?${queryId}=${this.$route.params.id}`)
          .then(this.getDetailDataSuc)
      }
    },
    getDetailDataSuc (res) {
      if (res.status === 200 && res.data) {
        const data = res.data
        this.detailsInfo = data
        var detailsType = ''
        if (data.winner === null) {
          detailsType = '招标公告'
        } else if (data.winner) {
          detailsType = '中标公示'
        } else {
          console.log(this.$route.params.type)
          detailsType = '通知公告'
        }
        this.detailsInfo['detailsType'] = detailsType
      }
    }
  },
  mounted () {
    // console.log(this.$route.params.type)
    this.getDetailData()
  }
}
</script>

<style>

</style>
