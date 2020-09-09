<template>
    <div>
        <!-- v-bind为组件绑定动态值 -->
        <search :value="value"></search>
        <div id="sort">
            <span>综合</span>
            <span>销量</span>
            <span>价格</span>
        </div>
        <recommand></recommand>
    </div>
</template>

<script>
import search from '../components/search'
import recommand from '../components/recommand'
export default {
  data: function () {
    return {
      value: this.$route.params.result
    }
  },
  components: {search, recommand}
}
</script>

<style>
#sort{
    height: 30px;
    width: 100%;
    background: #ffffff;
    margin: 50px 0 0 0;
    position: fixed;
}
#sort span{
    height: 30px;
    margin: 0 40px;
}
#recommand{
    margin-top: 90px;
}
</style>
