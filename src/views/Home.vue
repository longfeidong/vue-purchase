<template>
  <div class="home wrap-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Banner />
    <Notice :list="noticeInfo" />
    <Biding :list="bidingInfo"/>
    <!-- <Biding2 :list="bidingInfo"/> -->
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
import Biding from '@/components/home/Biding.vue'
// import Biding2 from '@/components/home/Biding2.vue'
// 引入axios
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Banner,
    Notice,
    Biding
    // Biding2
  },
  data () {
    return {
      noticeInfo: {},
      bidingInfo: {
        tender: {},
        bid: {}
      }
    }
  },
  methods: {
    getHomeData () {
      // /api/index.json
      axios.get('/api/queryZbgllist1')
        .then(this.getHomeDataSuc)
    },
    getHomeDataSuc (res) {
      // res = res.data
      console.log(res)
      if (res.status === 200 && res.data) {
        const data = res.data
        this.noticeInfo = data.notice
        console.log(this.noticeInfo)
        this.bidingInfo['tender'] = data.tender
        this.bidingInfo['bid'] = data.bid
      }
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>
