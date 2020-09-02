<template>
  <div id="cart_goods">
      <img :src="src">
      <p id="name">{{name}}</p>
      <p id="details">{{details}}</p>
      <p id="price">{{price}}</p>
      <p id="number">{{number}}</p>
      <div operation>
        <p>+</p>
        <p>-</p>
      </div>

  </div>
</template>

<script>
export default {
  props: ['src', 'name', 'details', 'price', 'number'],
  data () {
    return {}
  }
}
</script>

<style scoped>
#cart_goods{
    background: ghostwhite;
}
</style>
