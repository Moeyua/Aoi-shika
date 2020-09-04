<template>
  <ul id="lv2">
        <li v-for="item in this.$route.params.li2" :key="item.name">
          <router-link to="item.href">
              {{$route.params.name}}
              {{item.name}}
          </router-link>
        </li>
  </ul>
</template>

<script>
export default {
  props: ['li2']
}
</script>

<style scoped>
#lv2{
  position: absolute;
  width: calc(100% - 120px);
  /* height后期可以删掉 */
  height: 100%;
  left: 120px;
  top: 65px;
  background-color: rgb(239, 236, 241);
}
li{
  list-style: none;
}
</style>
