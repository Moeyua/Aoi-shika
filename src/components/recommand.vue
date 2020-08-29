<template>
  <div id="recommand">
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
  name: 'recommand',
  methods: {},
  components: {goods: goods}
}
</script>

<style>
#recommand{
  background: #e9e3e3;
  height: 300px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
