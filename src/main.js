// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCropper from 'vue-cropper'
// require styles 轮播图插件
import 'swiper/dist/css/swiper.css'
// 预览
import VuePreview from 'vue-preview'

// 引入reset.css
import '@/assets/styles/reset.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueCropper)
Vue.use(VuePreview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
