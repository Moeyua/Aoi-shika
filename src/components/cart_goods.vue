<template>
  <div id="cart_goods">
      <img :src="src">
      <div id="details">
        <p id="name">{{name}}</p>
        <p id="type">{{type}}</p>
        <p id="price">￥{{price}}</p>
      </div>
      <div id="operation">
        <span id="number">{{numbers}}</span>
        <div>
          <button @click="add">+</button>
          <button @click="sub">-</button>
        </div>
      </div>

  </div>
</template>

<script>
function add () {
  this.numbers++
}
function sub () {
  if (this.numbers > 0) {
    this.numbers--
  }
}
export default {
  props: ['src', 'name', 'type', 'price', 'number'],
  data () {
    return {
      numbers: this.number
    }
  },
  methods: {
    add, sub
  }
}
</script>

<style scoped>
*{
  color: #666666;
}
#cart_goods{
    position: relative;
    background: rgb(253, 253, 254);
    height: 100px;
    width: 100%;
}
#cart_goods img{
  position: absolute;
    left: 0;
    border-radius: 20px;
    width: 100px;
    height: 100%;
}
#details{
  position: absolute;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  left: 130px;
}
#details #name{
  font-size: 15px;
  font-weight: 700;
}
#details #type{
  font-size: 15px;
}
#details #price{
  color: red;
}
#operation{
  height: 100%;
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: absolute;
  right: 0;
  font-size: 30px;
}
#operation span{
  margin: 10px;
}
#operation div{
  display: flex;
  flex-flow: column nowrap;
}
#operation button{
  width: 25px;
  height: 25px;
  border-radius: 30px;
  margin: 5px 10px;
  font-size: 20px;
  border: none;
  outline: none;
}
</style>
