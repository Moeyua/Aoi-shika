<template>
  <div id="details">
      <img :src = 'src' alt="#">
      <div id="con">
          <p id="price">￥{{price}}</p>
          <p id="name">{{name}}</p>
          <span id="stock">库存：{{stock}}</span>
          <span id="sales">销量：{{sales}}</span>
      </div>
      <div id="description">
          <p>商品详情</p>
          {{description}}
      </div>
      <div id="navbar">
          <button>提交订单</button>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '海盐芝士厚乳拿铁',
      price: '18',
      src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg',
      stock: '114514',
      sales: '114514',
      description: '【特添精选冷萃厚牛乳】悉心拼配滑润醇香的厚乳拿铁，缓缓浇入轻盈绵密的海盐芝士奶盖，更添美妙风味。主要原料：浓缩咖啡、冷萃厚牛乳（调制奶浆）、纯牛奶、原味调味糖浆、芝士奶盖。图片及包装仅供参考，请以实物为准。建议送达后尽快饮用。到店饮用口感更佳。致敏物质：本产品含有乳及乳制品、大豆制品.对此有过敏历史的小伙伴注意哦～'
    }
  }
}
</script>

<style scoped>
img{
    width: 100%;
}
#con{
    height: 120px;
    width: 100%;
}
#price{
    color: red;
}
#name, #price{
    font-weight: 700;
    text-align: left;
    font-size: 25px;
    margin: 10px 0;
}
#stock, #sales{
    font-size: 14px;
    color: darkgrey;
    float: right;
    margin: 0 10px;
}
#navbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
}
#description{
    font-size: 15px;
}
#description p{
    font-weight: 700;
    text-align: left;
    margin: 10px 0;
}
button{
  height: 45px;
  width: 100px;
  outline: none;
  background: #1c2fa8;
  color: #f7f7f7;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  border-radius: 20px;
  border: none;
}
</style>
