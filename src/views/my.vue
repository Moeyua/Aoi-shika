<template>
  <div id="my">
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
  data () {
    return {}
  },
  name: 'my',
  methods: {},
  components: {
    navbar: navbar
  }
}
</script>

<style>

#my {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  height: calc(100%-20px);
  width: calc(100%-20px);
}
h2{
  text-align:left;
  margin-left:10px;
  margin-bottom: 10px;
}
</style>
