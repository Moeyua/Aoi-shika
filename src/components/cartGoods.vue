<template>
  <div id="cartGoods">
      <img :src="src">
      <div id="details">
        <p id="name">{{name}}</p>
        <p id="price">￥{{price}}</p>
      </div>
      <div id="operation">
        <span id="number">{{numbers}}</span>
        <div>
          <button @click.stop="add">+</button>
          <button @click.stop="sub">-</button>
        </div>
      </div>

  </div>
</template>

<script>
function add () {
  this.numbers++
  this.$emit('numberChanged', [this.name, 1])
}
function sub () {
  if (this.numbers > 1) {
    this.numbers--
    this.$emit('numberChanged', [this.name, -1])
  }
}
export default {
  props: ['src', 'name', 'price', 'number', 'id'],
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
#cartGoods{
    position: relative;
    background: #f7f7f7;
    height: 100px;
    width: 95%;
    margin-left: 10px;
    border: none;
}
#cartGoods img{
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
