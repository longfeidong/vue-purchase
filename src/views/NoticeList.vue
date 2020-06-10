<template>
  <div class="wrap-container">
    <Header />
    <List :list="listInfo" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import List from '@/components/list/list.vue'
import Footer from '@/components/common/Footer.vue'
// 引入axios
import axios from 'axios'

export default {
  name: 'blist',
  components: {
    Header,
    List,
    Footer
  },
  data () {
    return {
      listInfo: []
    }
  },
  methods: {
    getListInfo () {
      // const url = 'http://localhost:8080/cgpt/zbgl'
      // axios.get(url + '/queryZbgllists', {
      //   params: {
      //     'zbzt': this.$route.params.id
      //   }
      // }).then(this.getListInfoSuc)

      // axios.get('/api/queryZbgllists', {
      //   params: {
      //     'zbzt': this.$route.params.id
      //   }
      // }).then(this.getListInfoSuc)

      if (process.env.NODE_ENV === 'production') {
        // console.log('生产环境')
        const url = 'http://140.249.205.136:8082/cgpt/zbgl'
        axios.get(url + '/queryTzList', {
          params: {
            'zbzt': this.$route.params.id
          }
        }).then(this.getListInfoSuc)
      } else {
        // console.log('开发环境')
        axios.get('/api/queryTzList', {
          params: {
            'zbzt': this.$route.params.id
          }
        }).then(this.getListInfoSuc)
      }
    },
    getListInfoSuc (res) {
      // console.log(res)
      if (res.status === 200 && res.data) {
        const data = res.data
        this.listInfo = data
      }
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style>

</style>
