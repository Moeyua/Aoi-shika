<template>
  <div id="classfication">
      <div class="box8"><img :src="src('apple')"></div>
      <div class="box8"><img :src="src('samsung')"></div>
      <div class="box8"><img :src="src('huawei')"></div>
      <div class="box8"><img :src="src('lg')"></div>
      <div class="box8"><img :src="src('nvidia')"></div>
      <div class="box8"><img :src="src('hp')"></div>
      <div class="box8"><img :src="src('beats')"></div>
      <div class="box8"><img :src="src('asus')"></div>
  </div>
</template>

<script>
var data = {
}
export default {
  data () {
    return data
  },
  name: 'classfication',
  methods: {},
  components: {},
  computed: {
    src: function () {
      return function (name) {
        return '../../static/' + name + '.png?time=' + new Date().getTime()
      }
    }
  }
}
</script>

<style scoped>
#classfication{
  background: #f7f7f7;
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
img{
  width: 64px;
  height: 64px;
}
/* .box4 img,
.box4{
    width: 160px;
    height: 85px;
    background: #e57066;
    color: #28292b;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    overflow:initial;
    line-height: 85px;
    font-size: 20px;
    font-weight: 1000;
    letter-spacing: 2px;
}
.box8 img,
.box8{
    width: 75px;
    height: 85px;
    background: #005397;
    color: #e13334;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    text-align: center;
    line-height: 85px;
    font-size: 20px;
    font-weight: 1000;
    letter-spacing: 2px;
}
.box16 img,
.box16{
    width: 75px;
    height: 40px;
    background: #f0cf61;
    color: #ebe8e1;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
} */
.box8{
    width: 75px;
    height: 75px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    text-align: center;
    line-height: 85px;
    font-size: 20px;
    font-weight: 1000;
    letter-spacing: 2px;
    box-shadow:  5px 5px 10px #d2d2d2, -5px -5px 10px #ffffff;
    border-radius: 10px;
}
</style>
