<template>
  <div class="wrap-container">
    <Header />
    <Detail :list="detailsInfo" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Detail from '@/components/details/DetailsInfo.vue'
import axios from 'axios'

export default {
  name: 'detail',
  components: {
    Header,
    Detail,
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

      if (process.env.NODE_ENV === 'production') {
        // console.log('生产环境')
        const url = 'http://140.249.205.136:8082/cgpt/zbgl'
        axios.get(url + '/queryZbById', {
          params: {
            'zbid': this.$route.params.id
          }
        }).then(this.getDetailDataSuc)
      } else {
        // console.log('开发环境')
        axios.get('/api/queryZbById', {
          params: {
            'zbid': this.$route.params.id
          }
        }).then(this.getDetailDataSuc)
      }
    },
    getDetailDataSuc (res) {
      if (res.status === 200 && res.data) {
        const data = res.data
        this.detailsInfo = data
        var detailsType = ''
        if (data.winner === null) {
          detailsType = '招标公告'
        } else {
          detailsType = '中标公示'
        }
        this.detailsInfo['detailsType'] = detailsType
      }
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style>

</style>
