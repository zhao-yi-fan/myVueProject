<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="showSwiper"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>

    <div class="swiper-button-prev swiper-button-white"
         slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white"
         slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  components: {},
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 点击指示点切换
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: {
          delay: 3000 // 3秒切换一次
        }
      }
    }
  },
  watch: {},
  computed: {
    showSwiper () {
      return this.list.length
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.5%;
  /* position: relative; */
  overflow: hidden;
  background: #eee;
}
.swiper-img {
  width: 100%;
  height: auto;

}
</style>
