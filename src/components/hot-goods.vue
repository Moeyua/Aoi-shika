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
  background: #e9e3e3;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
