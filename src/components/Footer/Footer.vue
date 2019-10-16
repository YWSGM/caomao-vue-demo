<template>
<footer class="footer_guide">
  <ul>
    <li class="guide_item">
      <span class="item">首页</span>
     <span class="iconfont font">&#xe615;</span>
    </li>
    <li class="guide_item">
      <span class="item">分类</span>
     <span class="iconfont font">&#xe624;</span>
    </li>
    <li class="guide_item">
      <span class="item">识物</span>
     <span class="iconfont font">&#xe7fd;</span>
    </li>
    <li class="guide_item">
      <span class="item">购物车</span>
     <span class="iconfont font">&#xe657;</span>
    </li>
    <li class="guide_item">
      <span class="iconfont font">&#xe615;</span>
      <span class="item">个人</span>
     
    </li>
  </ul>
  </footer>
</template>
<script>
export default {
  name:'Footer'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
@font-face {
  font-family: 'iconfont';  /* project id 1461237 */
  src: url('//at.alicdn.com/t/font_1461237_w731nh5w5d.eot');
  src: url('//at.alicdn.com/t/font_1461237_w731nh5w5d.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1461237_w731nh5w5d.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1461237_w731nh5w5d.woff') format('woff'),
  url('//at.alicdn.com/t/font_1461237_w731nh5w5d.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1461237_w731nh5w5d.svg#iconfont') format('svg');
}
.iconfont{
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#999999;
  position absolute
  left 18px
  top 2px
  
}
.footer_guide
  width 100%
  height 50px
  position fixed
  bottom  0px
  border-top 1px solid #999999
  background-color #fff
  ul
    width 100%
    height 100%
    // background-color red
    display flex
    .guide_item
      flex 1
      position relative
      .item
        position absolute
        top 30px
        left 20px
        color #999999
        font-size 14px
      span 
        display block
        text-align center
      .font
        position absolute
        left 23px
        top 8px
        font-size 20px
</style>
