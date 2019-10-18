<template>
  <header class="header">
    <div class="header-log" @click="goto('/home')">
      <img src="./images/logo.png" />
    </div>
    <div class="header-content" @click="goto('/homesearch')">
      <span class="iconfont font">&#xe601;</span>
      <p>搜索商品, 共23255款好物</p>
    </div>
    <div class="header-btn" @click="goto('/login')">
      <p @click="goto('/login')">登录</p>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" scoped>
@font-face
  font-family 'iconfont' /* project id 1461237 */
  src url('//at.alicdn.com/t/font_1461237_w731nh5w5d.eot')
  src url('//at.alicdn.com/t/font_1461237_w731nh5w5d.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1461237_w731nh5w5d.woff2') format('woff2'), url('//at.alicdn.com/t/font_1461237_w731nh5w5d.woff') format('woff'), url('//at.alicdn.com/t/font_1461237_w731nh5w5d.ttf') format('truetype'), url('//at.alicdn.com/t/font_1461237_w731nh5w5d.svg#iconfont') format('svg')
.iconfont
  font-family 'iconfont' !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.header
  width 350px
  height 38px
  background-color #fff
  // border-bottom  1px solid #666
  display flex
  position fixed
  top 0px
  left 0px
  padding-left 10px
  padding-right 15px
  z-index 999
  .header-log
    width 70px
    height 30px
    line-height 30px
    img
      width 70px
      height 30px
      display inline-block
      vertical-align middle
  .header-content
    width 236px
    height 25px
    background-color #EDEDED
    position absolute
    left 80px
    top 5px
    border-radius 5px
    p
      font-size 13px
      position absolute
      left 55px
      top 5px
      color #666666
    .font
      font-weight 700
      left 29px
      color #666666
      position absolute
      left 25px
      top 2px
      font-size 22px
  .header-btn
    width 40px
    height 18px
    border 1px solid #B4282D
    position absolute
    right 10px
    top 8px
    border-radius 5px
    p
      font-size 12px
      text-align center
      line-height 18px
      color #B4282D
</style>