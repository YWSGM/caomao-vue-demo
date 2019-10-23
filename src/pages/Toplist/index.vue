<template>
  <div class="toplist">
    <!--首页头部-->
    <Header />
    <!--列表-->
    <List />
    <div class="firstView-content">
      <div class="parent">
        <div class="content">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/e.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/a.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/b.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/c.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/d.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/f.png" alt />
              </div>
            </div>
          </div>
        </div>
        <!--中间图体-->
        <div class="content-two" style="border-top:10px solid #ededed">
          <p class="content-text">秋冬好物</p>
          <p class="content-botton">秋冬好物</p>
        </div>
        <!-- list列表 -->
        <div class="list">
          <ul class="content-list">
            <li class="content-item" v-for="(toplistgood,index) in toplistgoods" :key="index" @click="goDetail('/detail',toplistgood)">
              <div class="box">
                <img v-lazy="toplistgood.url" alt />
                <p>{{toplistgood.text}}</p>
                <span>￥{{toplistgood.price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--底部-->
    <Footer />
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
// 引入 better-scroll
import BScroll from "better-scroll";
import { mapState } from 'vuex';
import {RECEIVE_SELECTGOOD} from '../../store/mutation-type.js';
export default {
  data () {
    return {
      goods:{}  
    }
  },
  mounted() {
    // 开始滑动
    /* eslint-disable */
    let scroll = new BScroll(".firstView-content");
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, //循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.$store.dispatch('gettoplistgood')
  },
  computed: {
    ...mapState({
      toplistgoods:state => state.toplist.toplistgood
    })
  },
  methods: {
    goDetail(path, topgood) {
      let good = JSON.stringify(topgood)
      window.localStorage.setItem('homegood',good)
      this.$router.push(path);
      this.$store.commit(RECEIVE_SELECTGOOD,topgood)
    }
  }
}
</script>
<style lang="stylus" scoped>
.firstView-content
  padding-top 80px
  width 100%
  height 600px
  .parent
    padding-top 80px
    width 100%
    height 1000px
    .content
      width 100%
      .swiper-container
        width 100%
        height 200px
        img
          width 100%
          height 100%
    .content-two
      text-align center
      padding-top 20px
      .content-text
        font-size 16px
      .content-botton
        font-size 14px
        color #666
    .list
      .content-list
        padding 30px
        display flex
        flex-wrap wrap
        position relative
        // padding 0
        .content-item
          height 200px
          .box
            padding 10px
            box-sizing border-box
            width 150px
            height 160px
            img
              width 150px
              height 150px
            p
              color #666
            span 
              color #b4282d
</style>
