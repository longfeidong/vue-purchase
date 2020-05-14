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
      axios.get('/api/queryZbgllists/', {
        params: {
          'zbzt': this.$route.params.id
        }
      }).then(this.getListInfoSuc)
    },
    getListInfoSuc (res) {
      console.log(res)
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
