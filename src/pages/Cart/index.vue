<template>
  <div class="shopCar-container">
    <div class="shopCar-header">
      <span class="car">购物车</span>
      <span class="posh">领券</span>
      <span class="edit">编辑</span>
    </div>
    <div class="shopCar-safe">
      <ul>
        <li>
          <span class="iconfont circle">&#xe77c;</span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span class="iconfont circle">&#xe77c;</span>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span class="iconfont circle">&#xe77c;</span>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
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
  height 542px
  width 100%
  .shopCar-header
    width 100%
    height 40px
    line-height 40px
    background-color white
    padding 0 15px
    position relative
    box-sizing border-box
    .posh
      position absolute
      right 65px
      color #BA393D
      font-size 16px
    .edit
      position absolute
      right 15px
      font-size 14px
  .shopCar-safe
    width 100%
    height 35px
    background-color #EEEEEE
    ul
      width 100%
      height 100%
      display flex
      li
        width 100%
        height 35px
        flex 1
        line-height 35px
        margin-left 15px
        position relative
        span
          color #666
          font-size 12px
        .circle
          position absolute
          left -10px
          top 2px</style>