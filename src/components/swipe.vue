<template>
  <div class="swipe">
    <div class="swipeshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='img'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>

<script>
var imgArray = [
  '../../static/77088105_p0.jpg',
  '../../static/77088105_p1.jpg',
  '../../static/77088105_p3.jpg',
  '../../static/77088105_p2.jpg'
]
export default {
  data () {
    return {
      mark: 0, // 比对图片索引的变量
      imgArray
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 4) { // 当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    }
  },
  created () {
    this.play()
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .swipe {
    height: 200px;
    width: 100%;
    margin: 0 auto 10px auto;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
  }
  .swipeshow {
    height: 200px;
  }
  li{
    position: absolute;
  }
  img {
    height: 200px;
    /* border-radius: 20px; */
  }
  .bar {
    position: relative;
    bottom: 30px;
    width: 100%;
    margin: 5px auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(145deg, #eeeef8, #c8c8d1);
    box-shadow:  16px 16px 31px #6d6d72, -16px -16px 31px #ffffff;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    border-radius: 50%;
    background: linear-gradient(145deg, #1e32b4, #192a97) !important;
    box-shadow:  16px 16px 31px #0e1752, -16px -16px 31px #2a47fe;
  }

  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
