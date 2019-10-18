<template>
  <div class="toplist">
    <!--首页头部-->
    <Header />
    <!--列表-->
    <List />
    <div class="firstView-content">
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
      <div class="content" style="border-top:10px solid #ededed">
        <p class="content-text">秋冬好物</p>
        <p class="content-botton">秋冬好物</p>
      </div>
      <!-- list列表 -->
      <div class="list">
        <ul class="content-list">
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
          <li class="content-item">
            <div class="box">
              <img src="./images/1-4.png" alt />
              <p>
                60s臻密绒磨毛四件套
                <span>￥399</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!--底部-->
      <Footer />
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
// 引入 better-scroll
import BScroll from "better-scroll";
export default {
  mounted() {
    // 开始滑动
    /* eslint-disable */
    let scroll = new BScroll(".firstView");
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, //循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="stylus" scoped>
.firstView
  height 600px
  margin-top 90px
  .home
    width 100%
    position fixed
    top 80px
    .swiper-container
      width 100%
      height 200px
      img
        width 100%
        height 100%
    .content
      border 10px soild green
      width 100%
      height 60px
      text-align center
      line-height 40px
      .content-botton
        margin-top -20px
        font-size 12px
        color #666
    .list
      width 100%
      height 1000px
      .content-list
        width 380px
        height 100%
        padding 0
        // background-color red
        display flex
        flex-wrap wrap
        .content-item
          // flex 1
          justify-content space-around
          padding-left 12px
          .box
            width 170px
            height 220px
            // background-color green
            img
              width 170px
              height 180px
            p
              height 20px
              line-height 18px
              font-size 14px
              color #333
              margin-top 2px
              span
                color #b4282d
</style>
