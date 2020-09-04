<template>
  <ul id="lv2">
        <li v-for="item in this.$route.params.li2" :key="item.name">
          <router-link to="item.href">
              <img :src="item.src">
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
  left: 120px;
  top: 65px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;
}
li,a{
  list-style: none;
  width: 70px;
  height: 100px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #666666;
  font-size: 10px;
}
img{
  width: 70px;
  height: 80px;
}
</style>
