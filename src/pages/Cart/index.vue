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
    <div class="discounts">
      <p class="car">全场赠券</p>
      <span class="text">再购100元立享满100元送优惠券</span>
      <span class="right">去凑单 ></span>
    </div>
    <div class="shopCar-content">
      <ul class="shopList">
        <li class="shopItem">
          <div class="circle"></div>
          <img src="./imgs/01.jpg" alt />
          <div class="selectionsText">
            <p class="name">白胖子 温润净颜卸妆水</p>
            <p class="specification">400ml ></p>
            <p class="price">￥59.5</p>
          </div>
          <div class="CartControl"></div>
        </li>
        <li class="shopItem">
          <div class="circle"></div>
          <img src="./imgs/01.jpg" alt />
          <div class="selectionsText">
            <p class="name">白胖子 温润净颜卸妆水</p>
            <p class="specification">400ml ></p>
            <p class="price">￥59.5</p>
          </div>
          <div class="CartControl"></div>
        </li>
        <li class="shopItem">
          <div class="circle"></div>
          <img src="./imgs/01.jpg" alt />
          <div class="selectionsText">
            <p class="name">白胖子 温润净颜卸妆水</p>
            <p class="specification">400ml ></p>
            <p class="price">￥59.5</p>
          </div>
          <div class="CartControl"></div>
        </li>
        <li class="shopItem">
          <div class="circle"></div>
          <img src="./imgs/01.jpg" alt />
          <div class="selectionsText">
            <p class="name">白胖子 温润净颜卸妆水</p>
            <p class="specification">400ml ></p>
            <p class="price">￥59.5</p>
          </div>
          <div class="CartControl"></div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@font-face
  font-family 'iconfont' /* project id 1461072 */
  src url('//at.alicdn.com/t/font_1461072_7w1909sptgx.eot')
  src url('//at.alicdn.com/t/font_1461072_7w1909sptgx.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1461072_7w1909sptgx.woff2') format('woff2'), url('//at.alicdn.com/t/font_1461072_7w1909sptgx.woff') format('woff'), url('//at.alicdn.com/t/font_1461072_7w1909sptgx.ttf') format('truetype'), url('//at.alicdn.com/t/font_1461072_7w1909sptgx.svg#iconfont') format('svg')
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
          top 2px
  .discounts
    width 100%
    height 40px
    display flex
    align-items center
    font-size 14px
    .car
      width 60px
      height 14px
      background-color red
      border-radius 3px
      line-height 14px
      text-align center
      font-size 12px
      margin-left 12px
      color white
      font-weight 700
    .text
      margin 0 10px
    .right
      color red
      margin-left 10px
.shopCar-content
  width 100%
  min-height 700px
  background-color #EEEEEE
  .shopList
    width 100%
    height 100%
    border 1px solid #eeeeee
    box-sizing border-box
    
    .shopItem
      width 100%
      height 140px
      background-color white
      margin 10px 0
      display flex
      align-items center
      .circle
        width 16px
        height 16px
        border 2px solid #eeeeee
        border-radius 50%
        margin 0 10px
      img
        width 90px
        height 90px
        margin-right 8px
      .selectionsText
        height 90px 
        font-size 16px
        .name
          width 100%
          height 20px
          margin-bottom 8px
        .specification
          background-color #FAFAFA 
          margin-left 5px
          height 20px
          line-height 20px
          display inline
        .price
          margin-top 27px
          
</style>
  

     
    

