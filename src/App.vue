<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container class="centerMain">
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted () {
    
  }
}
</script>
<style scoped>
.centerMain {
  min-height: calc(100vh - 120px);
}
</style>
