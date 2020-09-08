<template>
  <div id="classfication">
      <div class="box4"> <img v-bind:src="data[0].img"> </div>
      <div class="box4"> <img v-bind:src="data[1].img"> </div>
      <div class="box4">
        <div class="box8"> <img v-bind:src="data[2].img"> </div>
        <div class="box8"> <img v-bind:src="data[3].img"> </div>
      </div>
      <div class="box4">
        <div class="box8"> <img v-bind:src="data[4].img"> </div>
        <div class="box8">
            <div class="box16"> <img v-bind:src="data[5].img"> </div>
            <div class="box16"> <img v-bind:src="data[6].img"> </div>
        </div>
      </div>
  </div>
</template>

<script>
	// 这是注释
	//这也是注释
// 注释
var data = [
  {img: 'https://iconfont.alicdn.com/t/b47bfe93-3c53-4686-b76a-f976e922fdfc.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/ce628170-bdee-4f1b-b5a3-47da9444873b.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/82fb65b3-21c0-4e82-8211-833b27617844.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/fb5db791-42a0-4ac3-9593-1cf83626e87a.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/4e2e7848-7358-43e5-9f77-cecd00ae61d6.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/7b4b45f4-c9ca-4328-8fca-33c3aabbd459.png', href: '#'},
  {img: 'https://iconfont.alicdn.com/t/79a91543-8662-4b50-8786-c38feb5c677d.png', href: '#'}
]
export default {
  data () {
    return {
      data: data
    }
  },
  name: 'classfication',
  methods: {},
  components: {}
}
</script>

<style scoped>
#classfication{
  background: #ffffff;
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
.box4 img,
.box4{
    width: 160px;
    height: 85px;
    background: rgb(161, 177, 233);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    overflow:initial;
}
.box8 img,
.box8{
    width: 75px;
    height: 85px;
    background: rgb(80, 162, 73);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}
.box16 img,
.box16{
    width: 75px;
    height: 40px;
    background: cyan;
}

</style>
