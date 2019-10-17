<template>
  <section class="home">
    <!--首页头部-->
    <Header />
    <div class="firstView">
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
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="list-grow">
          <ul class="grow">
            <li>
              <img class="grow-images" src="./images/1.png" alt />
              <span>网易自营品牌</span>
            </li>
            <li>
              <img class="grow-images" src="./images/2.png" alt />
              <span>30天无忧退货</span>
            </li>
            <li>
              <img class="grow-images" src="./images/3.png" alt />
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="slide-top">
            <li class="top-item">
              <img src="./images/item-1.png" alt />
              <span>新品首发</span>
            </li>
            <li class="top-item">
              <img src="./images/item-2.png" alt />
              <span>新品首发</span>
            </li>
            <li class="top-item">
              <img src="./images/item-3.png" alt />
              <span>居家生活</span>
            </li>
            <li class="top-item">
              <img src="./images/item-4.png" alt />
              <span>服饰鞋包</span>
            </li>
            <li class="top-item">
              <img src="./images/item-4.png" alt />
              <span>美食酒水</span>
            </li>
            <li class="top-item">
              <img src="./images/item-5.png" alt />
              <span>个人清洁</span>
            </li>
          </ul>
           <ul class="slide-top">
            <li class="top-item">
              <img src="./images/item-3.png" alt />
              <span>新品首发</span>
            </li>
            <li class="top-item">
              <img src="./images/item-4.png" alt />
              <span>新品首发</span>
            </li>
            <li class="top-item">
              <img src="./images/item-5.png" alt />
              <span>居家生活</span>
            </li>
            <li class="top-item">
              <img src="./images/item-2.png" alt />
              <span>服饰鞋包</span>
            </li>
            <li class="top-item">
              <img src="./images/item-1.png" alt />
              <span>美食酒水</span>
            </li>
            <li class="top-item">
              <img src="./images/item-6.gif" alt />
              <span>个人清洁</span>
            </li>
          </ul>
        </div>
        <div class="bgImage">
          <img src="./images/big-img.gif" alt="">
        </div>
        <div class="firstView-content">
         <ul class="content-list">
           <li></li>
         </ul>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
// 引入 better-scroll
import BScroll from 'better-scroll'
export default {
  mounted() {
    // 开始滑动
    /* eslint-disable */
    let scroll =new BScroll('.firstView')
    // 创建Swiper对象，实现轮播
    /* eslint-disable */
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, //循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="stylus">
.firstView
  height 600px
.home
  width 100%
  height 100%
  
  .swiper-container
    padding-top 75px
    width 100%
    height 200px
    img
      width 100%
      height 100%
  .list-grow
    width 100%
    height 36px
    // background-color red
    .grow
      width 350px
      height 36px
      // background-color pink
      margin auto
      display flex
      li
        height 36px
        position relative
        flex 1
      .grow-images
        width 20px
        height 20px
        position absolute
        top 10px
      span
        position absolute
        left 25px
        top 15px
        font-size 12px
        color #333
  .swiper-slide
    width 100%
    height 170px
    // background-color red
    .slide-top
      width 100%
      height 85px
      // background-color pink
      display flex
      .top-item
        flex 1
        position relative
        left 5px
        top 5px
        img
          width 55px
          height 55px
        span
          position absolute
          left 2px
          top 60px
          font-size 12px
  .bgImage
    width 100%
    height 63px
    padding-bottom 10px
    img 
     width 100%
     height 100%
  .firstView-content
    width 100%
    height 290px
    // background-color red
    position relative
    .content-list
      width 350px
      height 290px
      background-color #f5f5f5
      margin auto
</style>