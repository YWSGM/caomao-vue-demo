<template>
<footer class="footer_guide">
  <ul>
    <li class="guide_item" @click="goto('/home')" :class="{active:$route.path==='/home'}">
      <span class="item">首页</span>
     <span class="iconfont font">&#xe615;</span>
    </li>
    <li class="guide_item" @click="goto('/classify')" :class="{active:$route.path==='/classify'}">
      <span class="item">分类</span>
     <span class="iconfont font">&#xe624;</span>
    </li>
    <li class="guide_item" @click="goto('/search')" :class="{active:$route.path==='/search'}">
      <span class="item">识物</span>
     <span class="iconfont font">&#xe7fd;</span>
    </li>
    <li class="guide_item" @click="goto('/cart')" :class="{active:$route.path==='/cart'}">
      <span class="item">购物车</span>
     <span class="iconfont font">&#xe657;</span>
    </li>
    <li class="guide_item" @click="goto('/login')" :class="{active:$route.path==='/login'}">
      <span class="iconfont font">&#xe615;</span>
      <span class="item">个人</span>
    </li>
  </ul>
  </footer>
</template>
<script>
export default {
  name:'Footer',
  mounted(){
    window.console.log('ssss', this.$route.path , this.$route.path==='/home')
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" scoped>
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
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color:#999999;
 

}
.footer_guide
  background-color #fff
  width 100%
  height 50px
  position fixed
  bottom  0px
  border-top 1px solid #999999
  background-color #fff
  z-index 10
  box-sizing border-box
  ul
    width 100%
    height 100%
    // background-color red
    display flex
    .guide_item
      flex 1
      color #999999
      position relative
      &.active
        color #b4282d
        .iconfont
          color #b4282d 
      .item
        position absolute
        top 30px
        left 20px
        
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
