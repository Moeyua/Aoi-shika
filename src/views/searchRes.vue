<template>
    <div>
        <!-- v-bind为组件绑定动态值 -->
        <search :value="value"></search>
    </div>
</template>

<script>
import search from '../components/search'
export default {
  data: function () {
    return {
      value: this.$route.params.result
    }
  },
  components: {search}
}
</script>

<style>

</style>
