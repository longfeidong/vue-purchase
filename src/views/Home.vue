<template>
  <div class="home wrap-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
