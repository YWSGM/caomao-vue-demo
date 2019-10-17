<template>
  <div class="big">
    <header class="search-header">
      <span class="iconfont icon-home font-home" @click="goto('/home')"></span>
      <div class="header-mid">
        <a class="font" href="javascript:;">发现</a>
        <a class="select-home" href="javascript:;">甄选家</a>
      </div>
      <div class="font-box">
        <span class="iconfont icon-sousuo search-font" @click="goto('/homesearch')"></span>
        <span class="iconfont icon-gouwuche1 car-font" @click="goto('/shopcar')"></span>
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
// import {reqClassfiy,reqHomelist,reqSearchlist,reqGoods} from '../../api'
export default {
  methods: {
    _initBscroll() {
      let scroll = new BScroll('.content-list')
    },
    goto(path){
      this.$router.replace(path)
    }
  },
  async  mounted () {
    this._initBscroll();
    this.$store.dispatch('getSearchList')
    // console.log(this);
    // let result = await reqSearchlist('search')
    // console.log(result);
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl'


.big
  width 100%
  height 100%
  position relative
  background-color #eee
  .search-header
    border-bottom 1px solid #000
    position absolute
    left 0
    top 0
    z-index 99
    background-color #fff
    width 100%
    height 44px
    display flex
    justify-content space-evenly
    .font-home
      margin-top 4px
      font-size 30px
    .header-mid
      padding-left 30px
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
        left -54px
        top 8px
        font-size 32px
      .car-font
        position absolute
        left 1px
        top 8px
        font-size 32px
  .font-box
    width 44px
    height 22px
    display flex
  .topList
    position relative
    padding-top 40px
    border-bottom 1px solid #000
    .topList-ul
      padding-right 5px
      position absolute
      left 0
      top 40px
      z-index 99
      background-color #fff
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
      padding-top 30px
      width 100%
      .content-item
        margin-top 10px
        width 100%
        height 140px
        background-color #fff
        display flex
        .left
          padding-top 30px
          width 200px
          padding 10px
          .top
            margin-top 20px
            margin-bottom 22px
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
          margin-left 32px
          img
            width 100px
            height 100px
            border-radius 10px
</style>