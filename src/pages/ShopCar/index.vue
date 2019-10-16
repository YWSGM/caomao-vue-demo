<template>
  <div class="shopCar-container">
    <div class="shopCar-header">
      <span class="car">购物车</span>
      <span class="posh">领券</span>
    </div>
    <div class="shopCar-safe">
      <ul>
        <li>
          <span class="iconfont">&#xe77c;</span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span class="iconfont">&#xe77c;</span>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span class="iconfont">&#xe77c;</span>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="shopCar-content">
      <div class="emptyShop">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
@font-face
  font-family 'iconfont' /* project id 1461072 */
  src url('//at.alicdn.com/t/font_1461072_ktewh15ma9.eot')
  src url('//at.alicdn.com/t/font_1461072_ktewh15ma9.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1461072_ktewh15ma9.woff2') format('woff2'), url('//at.alicdn.com/t/font_1461072_ktewh15ma9.woff') format('woff'), url('//at.alicdn.com/t/font_1461072_ktewh15ma9.ttf') format('truetype'), url('//at.alicdn.com/t/font_1461072_ktewh15ma9.svg#iconfont') format('svg')
.iconfont
  font-family 'iconfont' !important
  font-size 20px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #666
.shopCar-container
  height 100%
  width 100%
  .shopCar-header
    width 100%
    height 40px
    line-height 40px
    background-color red
    padding 0 15px
    position relative
    .posh
      position absolute
      right 15px

</style>