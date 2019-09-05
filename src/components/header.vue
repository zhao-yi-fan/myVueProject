<template>
  <div class="nav">
    <div class="nav-container">
      <router-link tag="div"
                   class="nav-container-item nav-container-item-logo"
                   to="/">
        <img src="../assets/img/logo.png">
      </router-link>
      <router-link tag="div"
                   :class="showAction(item)"
                   v-for="(item,index) in navList"
                   :key="index"
                   :to="item.path">
        {{item.navTitle}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
  props: {},
  data () {
    return {
      isSelect: '首页',
      navList: [
        { path: '/', navTitle: '首页' },
        { path: '/Product', navTitle: '产品' },
        { path: '/test2', navTitle: '测试2' }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    showAction (item) {
      return this.isSelect === item.navTitle ? 'active nav-container-item' : 'nav-container-item'
    },
    // 通过路由的name，isSelect动态更改以对应navTitle
    change () {
      switch (this.$route.name) {
        case '/': this.isSelect = '首页'
          break
        case 'Product': this.isSelect = '产品'
          break
      }
    }
  },
  created () { },
  mounted () {
    this.change()
  }
}
</script>
<style lang="css" scoped>
.nav {
  background: #ccc;
}
.nav-container {
  height: 127px;
  width: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: row; /* 主轴的方向 */
  /* flex-wrap: nowrap; */ /* 换行属性 */
  justify-content: space-around;
  align-items: center;
}

.nav-container-item {
  height: 50%;
  flex-grow: 1;
  box-sizing: border-box;
  text-align: center;
  line-height: 63.5px;
  cursor: pointer;
  color: #909399;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;/* 缩小界面字体会到项目外 */
}
.nav-container-item:hover {
  color: #303133;
  border-bottom: 2px solid #409eff;
}
.nav-container-item-logo {
  /* 项目的flex-shrink为0不缩小 */
  flex-shrink: 0;
  border: 0px;
}
.nav-container-item-logo:hover {
  border: 0px;
}
.active {
  color: #303133;
  border-bottom: 2px solid #409eff;
}
</style>
