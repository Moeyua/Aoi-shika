<template>
<div id="all">
    <search></search>
    <div id="lv1"></div>
    <div id="lv2"></div>
    <navbar name="all"></navbar>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import search from '../components/search'
export default {
  components: {
    navbar,
    search
  }
}
</script>

<style scoped>
#all{
  height: 100%;
}
#lv1{
  position: fixed;
  width: 120px;
  height: 100%;
  top: 65px;
  left: 0px;
  background: blue;
}
#lv2{
  position: absolute;
  width: calc(100% - 120px);
  /* height后期可以删掉 */
  height: 100%;
  left: 120px;
  top: 65px;
  background-color: rebeccapurple;
}
</style>
