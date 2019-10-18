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
          <a class="active" href="javascript:;" >推荐</a>
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
    <Content :lists="lists" />
    <Footer />
  </div>
</template>
<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
import Content from "./content";
export default {
  components: {
    Content
  },

  methods: {
    _initBscroll() {
      let scroll = new BScroll(".content-list");
    },
    goto(path) {
      this.$router.replace(path);
    }
  },
  mounted() {
    this._initBscroll();
    this.$store.dispatch("getSearchList")
  },
  computed: {
    ...mapState({
      lists: state => state.Search.list
    })
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
</style>