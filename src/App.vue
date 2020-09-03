<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  name: 'App',
  methods: {}
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  height: 100%;
  width: calc(100%-20px);
}
#button {
  position: absolute;
}
</style>
