<template>
  <div class="conatiner">
    <Header />
    <div class="List">
      <div class="listLeft">
        <ul>
          <li :class="{active:$route.path==='/classify/recommend'}" @click="goto('/classify/recommend')">
            <span :class="{active:$route.path==='/classify/recommend'}">推荐专区</span>
          </li>
          <li @click="goto('/classify/season')" :class="{active:$route.path==='/classify/season'}">
            <span :class="{active:$route.path==='/classify/season'}">秋冬好物</span>
          </li>
          <li @click="goto('/classify/faddish')" :class="{active:$route.path==='/classify/faddish'}">
            <span :class="{active:$route.path==='/classify/faddish'}">爆款专区</span>
          </li>
          <li @click="goto('/classify/new')" :class="{active:$route.path==='/classify/new'}">
            <span :class="{active:$route.path==='/classify/new'}">新品专区</span>
          </li>
          <li @click="goto('/classify/living')" :class="{active:$route.path==='/classify/living'}">
            <span :class="{active:$route.path==='/classify/living'}">居家生活</span>
          </li>
          <li @click="goto('/classify/costume')" :class="{active:$route.path==='/classify/costume'}">
            <span :class="{active:$route.path==='/classify/costume'}">服饰鞋包</span>
          </li>
          <li @click="goto('/classify/food')" :class="{active:$route.path==='/classify/food'}">
            <span :class="{active:$route.path==='/classify/food'}">美食酒水</span>
          </li>
          <li @click="goto('/classify/person')" :class="{active:$route.path==='/classify/person'}">
            <span :class="{active:$route.path==='/classify/person'}">个人清护</span>
          </li>
          <li @click="goto('/classify/son')" :class="{active:$route.path==='/classify/son'}">
            <span :class="{active:$route.path==='/classify/son'}">母婴亲子</span>
          </li>
          <li @click="goto('/classify/run')" :class="{active:$route.path==='/classify/run'}">
            <span :class="{active:$route.path==='/classify/run'}">运动旅行</span>
          </li>
          <li @click="goto('/classify/appliances')" :class="{active:$route.path==='/classify/appliances'}">
            <span :class="{active:$route.path==='/classify/appliances'}">数码家电</span>
          </li>
          <li @click="goto('/classify/summer')" :class="{active:$route.path==='/classify/summer'}">
            <span :class="{active:$route.path==='/classify/summer'}">反季服饰</span>
          </li>
        </ul>
      </div>

      <div>
        <router-view></router-view>
      </div>
      <!-- <Right /> -->
    </div>
    <Footer />
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Right from "./Right";
//import {reqClassfiy,reqHomelist,reqSearchlist,reqGoods} from '../../api'
export default {
  components: {
    Right
  },
  methods: {
    _initBscroll() {
      let scroll = new BScroll(".listLeft");
    },
    goto(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this._initBscroll();
    this.$store.dispatch('getClassify')
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl'
.classify-header
  width 100%
  height 44px
.search
  width 90%
  height 60%
  margin 8px auto
  input
    width 100%
    height 100%
    box-sizing border-box
    text-align center
    background-color #ccc
.List
  // margin-top 38px
  height calc(100vh - 38px - 51px)
  display flex
  flex-direction row
  .listLeft
    
    width 80px
    top-border-1px(#ccc)
    ul
      padding-top 40px
      li
        width 80px
        height 50px
        font-size 14px
        text-align center
        line-height 50px
        border-right 0.5px solid #ccc
        &.active
          background-color #ccc
        span
          width 100%
          padding 2px
          &.active
            border-left #b4282d solid 4px
</style>