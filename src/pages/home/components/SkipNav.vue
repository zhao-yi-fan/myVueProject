<template>
  <div class="show">
    <div class="show-container">
      <router-link tag="div"
                   class="show-container-item"
                   v-for="(item,index) in showList"
                   :key="index"
                   :to="item.showPath">
        <div class="img-area">
          <img :src="item.showImgUrl"
               alt="">
        </div>
        <div class="item-title">
          <p>{{item.showTitle}}</p>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'skipNav',
  components: {},
  props: {},
  data () {
    return {
      showList: [
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '会议会务',
          showPath: '/huiyi'
        },
        {
          showImgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          showTitle: '礼仪演绎',
          showPath: '/2'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '商务出行',
          showPath: '/3'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '礼商之道',
          showPath: '/4'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '酒店会场',
          showPath: '/5'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '会奖旅游',
          showPath: '/6'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '大会展厅',
          showPath: '/6'
        },
        {
          showImgUrl: 'https://img.alicdn.com/tfs/TB16OO6coGF3KVjSZFoXXbmpFXa-700-400.jpg',
          showTitle: '智慧会务',
          showPath: '/6'
        }
      ]

    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
.show {
  width: 100%;
  padding-bottom: 20px;
}
.show-container {
  height: 100%;
  width: 90%;
  margin: 0 5%;
  /* background: #ccc; */
  display: flex;
  flex-wrap: wrap; /* 项目换行 */
  justify-content: space-around; /* 项目在主轴上的对齐方式。 */
  align-items: center; /* 项目在交叉轴上如何对齐。 */
}
.show-container-item {
  height: 230px;
  width: 320px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
}
.show-container-item:hover {
  box-shadow: 0 0 15px rgba(186, 204, 207, 0.7);
}
.show-container-item .img-area {
  height: 170px;
  width: 100%;
  overflow: hidden;
}
.show-container-item .img-area img {
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
}
.show-container-item .img-area img:hover {
  transform: scale(1.05);
}
.show-container-item .item-title {
  padding: 18px 25px;
}
.show-container-item .item-title p {
  text-align: center;
}
</style>
