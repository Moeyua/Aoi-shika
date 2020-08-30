<template>
  <div id="hot-goods">
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
    <goods></goods>
  </div>
</template>

<script>
import goods from './goods'
export default {
  data () {
    return {}
  },
  name: 'hot-goods',
  methods: {},
  components: {goods: goods}
}
</script>

<style>
#hot-goods{
  background: #ffffff;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 60px;
}
</style>
