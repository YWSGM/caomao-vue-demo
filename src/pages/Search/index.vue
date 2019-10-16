<template>
  <div class="big">
    <header class="search-header">
      <span class="iconfont font-home" @click="goto('/home')">&#xe642;</span>
      <div class="header-mid">
        <a class="font" href="javascript:;">发现</a>
        <a class="select-home" href="javascript:;">甄选家</a>
      </div>
      <div class="font-box">
        <span class="iconfont search-font">&#xe658;</span>
        <span class="iconfont car-font" @click="goto('/shopcar')">&#xe602;</span>
      </div>
    </header>
    <div class="topList">
      <ul class="topList-ul">
        <li>
          <a class="active" href="javascript:;">推荐</a>
        </li>
        <li>
          <a href="javascript:;">好物大赏</a>
        </li>
        <li>
          <a href="javascript:;">好货内部比价</a>
        </li>
        <li>
          <a href="javascript:;">选购指南</a>
        </li>
        <li>
          <a href="javascript:;">晒单</a>
        </li>
      </ul>
    </div>
    <div class="content-list">
      <ul class="content-ul">
        <li class="content-item">
          <div class="left">
            <div class="top">
              <img src="./img/touxiang1.jpg" alt />
              <span>网易游戏：波涛</span>
            </div>
            <p>两种意见|终于找到了一款颜值在线的保温杯</p>
          </div>
          <div class="right">
            <img src="./img/ringt1.jpg" alt />
          </div>
        </li>
        <li class="content-item">
          <div class="left">
            <div class="top">
              <img src="./img/touxiang1.jpg" alt />
              <span>网易游戏：波涛</span>
            </div>
            <p>两种意见|终于找到了一款颜值在线的保温杯</p>
          </div>
          <div class="right">
            <img src="./img/ringt1.jpg" alt />
          </div>
        </li>
        <li class="content-item">
          <div class="left">
            <div class="top">
              <img src="./img/touxiang1.jpg" alt />
              <span>网易游戏：波涛</span>
            </div>
            <p>两种意见|终于找到了一款颜值在线的保温杯</p>
          </div>
          <div class="right">
            <img src="./img/ringt1.jpg" alt />
          </div>
        </li>
        <li class="content-item">
          <div class="left">
            <div class="top">
              <img src="./img/touxiang1.jpg" alt />
              <span>网易游戏：波涛</span>
            </div>
            <p>两种意见|终于找到了一款颜值在线的保温杯</p>
          </div>
          <div class="right">
            <img src="./img/ringt1.jpg" alt />
          </div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  methods: {
    _initBscroll() {
      
      let scroll = new BScroll('.content-list')
      /* this.rightScroll = new BScroll(".foods-wrapper", {
        click: true,
        // 计算滚动的位置
        probeType: 2
      });
      // 右侧列表的滑动事件
      this.rightScroll.on("scroll", ({ x, y }) => {
        // console.log(y);
        this.scrollY = Math.abs(y);
      }); */
    },
    goto(path){
      this.$router.replace(path)
    }
  },
  mounted () {
    this._initBscroll();
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl'
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1461446_uge1knhxboh.eot');
  src: url('//at.alicdn.com/t/font_1461446_uge1knhxboh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1461446_uge1knhxboh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1461446_uge1knhxboh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1461446_uge1knhxboh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1461446_uge1knhxboh.svg#iconfont') format('svg');
}
.iconfont
  font-family 'iconfont' !important
  font-size 22px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #666666
  position absolute
  left 17px
  top 2px
  font-weight 600
.big
  width 100%
  height 100%
  position relative
  background-color #eee
  .search-header
    bottom-border-1px(black)
    position absolute
    left 0
    top 0
    z-index 99
    background-color #d9d9d9
    width 100%
    height 44px
    display flex
    justify-content space-evenly
    .font-home
      margin-top 10px
    .header-mid
      margin 10px auto
      .font
        font-size 20px
        font-weight 700
        color #b4282d
      .select-home
        padding-left 5px
    .font-box
      position relative
      .search-font
        position absolute
        left 0
        top 10px
      .car-font
        position absolute
        right 15px
        top 10px
    
  .font-box
    width 44px
    height 22px
    display flex
  .topList
    position relative
    padding-top 40px
    border-bottom 1px solid #666
    .topList-ul
      padding-right 5px
      position absolute
      left 0
      top 40px
      z-index 99
      background-color #d9d9d9
      display flex
      white-space nowrap
      height 40px
      line-height 40px
      li
        margin-left 20px
        text-align center
        font-size 15px
        a
          display inline-block
          height 100%
          &.active
            border-bottom 2px solid #b4282d
            color #b4282d
  .content-list
    padding-top 100px
    margin-top 10px
    width 100%
    height 500px
    .content-ul
      padding-top 40px
      width 100%
      .content-item
        margin-top 10px
        width 100%
        height 200px
        background-color #fff
        display flex
        .left
          padding-top 30px
          width 200px
          padding 10px
          .top
            margin-top 20px
            margin-bottom 30px
            display flex
            img
              width 30px
              height 30px
              vertical-align middle
              border-radius 50%
            span
              vertical-align middle
              line-height 30px
              padding-left 6px
        .right
          padding-right 10px
          padding-top 20px
          img
            width 150px
            height 150px
            border-radius 10px
</style>