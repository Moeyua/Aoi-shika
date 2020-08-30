<template>
  <div id="classfication">
      <div class="box4"></div>
      <div class="box4"></div>
      <div class="box4">
        <div class="box8"></div>
        <div class="box8"></div>
      </div>
      <div class="box4">
        <div class="box8"></div>
        <div class="box8">
            <div class="box16"></div>
            <div class="box16"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  name: 'classfication',
  methods: {},
  components: {}
}
</script>

<style>
#classfication{
  background: #ffffff;
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
.box4{
    width: 160px;
    height: 85px;
    background: rgb(161, 177, 233);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    overflow:initial;
}
.box8{
    width: 75px;
    height: 85px;
    background: rgb(80, 162, 73);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}
.box16{
    width: 75px;
    height: 40px;
    background: cyan;
}

</style>
