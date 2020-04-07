<template>
  <div class="home wrap-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Banner />
    <Notice :list="noticeData" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Banner from '@/components/home/Banner.vue'
import Notice from '@/components/home/Notice.vue'
// 引入axios
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Banner,
    Notice
  },
  data () {
    return {
      noticeData: {}
    }
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json')
        .then(this.getHomeDataSuc)
    },
    getHomeDataSuc (res) {
      // res = res.data
      console.log(res)
      if (res.status === 200 && res.data) {
        const data = res.data
        this.noticeData = data.notice
        console.log(this.noticeData)
      }
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>
