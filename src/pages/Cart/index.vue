<template>
  <div class="shopCar-container">
    <!-- 头部 -->
    <div class="shopCar-header">
      <span class="car">购物车</span>
      <span class="posh">领券</span>
      <span class="edit" style="display:none">编辑</span>
    </div>
    <!-- 内容区 有数据时-->
    <div class="content" style="display:none">
      <div class="shopCart">
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
        <span class="right">去凑单></span>
      </div>
      <div class="shopCar-contented">
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
      </div>
    </div>
    <!-- 购物车结算清单 -->
    <div class="shopCar-order" style="display:none">
      <div class="shopCar-left">
        <div class="left-circle"></div>
        <span>已选(0)</span>
      </div>
      <div class="shopCar-price">
        <span>合计:￥0</span>
      </div>
      <div class="shopCar-count">
        <span>下单</span>
      </div>
    </div>
    <!-- 内容区 没有登录时-->
    <div class="shopCar-content">
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
      <div class="emptyShop">
        <img src="./imgs/shopCar.png" alt="">
        <span class="font">去添点什么吧</span>
        <div class="btn" @click="goLogin">登录</div>
      </div>
    </div>
    <!-- 底部导航 -->
    <Footer />
  </div>
</template>
 
<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    let scroll = new BScroll('.content',{
      click:true
    })
  },
  methods: {
    goLogin(){
      this.$router.replace('/login')
    }
  }
};
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
  background-color #eeeeee
  .shopCar-header
    width 100%
    height 40px
    line-height 40px
    background-color white
    padding 0 15px
    position fixed
    top 0
    left 0
    z-index 99
    box-sizing border-box
    border-bottom 1px solid #000
    .posh
      position absolute
      right 35px
      color #BA393D
      font-size 16px
    .edit
      position absolute
      right 15px
      font-size 14px
  .content
    width 100%
    height 500px
    .shopCart
      padding-top 40px
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
              top 4px
      .discounts
        width 100%
        height 40px
        display flex
        align-items center
        font-size 12px
        background-color white
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
      .shopCar-contented
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
            height 100px
            background-color white
            margin 10px 0
            display flex
            align-items center
            .circle
              width 14px
              height 14px
              border 2px solid #eeeeee
              border-radius 50%
              margin 0 10px
            img
              width 80px
              height 80px
              margin-right 10px
            .selectionsText
              height 80px
              font-size 14px
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
                margin-top 20px
  .shopCar-order
    width 100%
    height 46px
    box-sizing border-box
    background-color white
    border-top 1px solid #999
    position fixed
    left 0
    bottom 50px
    z-index 99
    display flex
    align-items center
    .shopCar-left
      width  33%
      height 100%
      line-height 46px
      margin-left 0
      display flex
      box-sizing border-box
      padding-left 10px
      .left-circle
        width 14px
        height 14px
        border-radius 50%
        margin-top 16px
        margin-right 8px
    .shopCar-price
      width 33%
      height 100%
      box-sizing border-box
      line-height 46px
      padding-left 52px
      color #b4282d
    .shopCar-count
      width 34%
      height 100%
      background-color #CCCCCC
      text-align center
      line-height 46px
      color white
  .shopCar-content
    width 100%
    margin-top 40px
    // background-color #EEEEEE
    .shopCar-safe
      width 100%
      height 35px
      background-color #EEEEEE
      ul
        width 100%
        height 100%
        margin-left 10px
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
            top 4px
    .emptyShop
      width 100%
      min-height 700px
      background-color #F4F4F4
      // position absolute
      // left 0
      // top 0
      // right 0
      // bottom 0
      // margin auto 
      display flex
      flex-direction column
      align-items center
      text-align center
      img 
        display block
        width 210px
        height 210px
        margin-top 110px
      .font
        color #666666
      .btn
        width 210px
        height 40px
        line-height 40px
        text-align center
        background-color #B4282D
        color white
        margin-top 10px
</style>
  

     
    

