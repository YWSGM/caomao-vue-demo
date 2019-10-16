<template>
  <section class="home">
    <!--首页头部-->
    <Header />
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
    <div class="list"></div>
    </div>
    <Footer />
  </section>
</template>
<script>
import Swiper from "swiper"
import 'swiper/css/swiper.css'

export default {
  mounted() {
  
    // 创建Swiper对象，实现轮播
    /* eslint-disable */

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, //循环模式选项
      autoplay:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })

  }

}
</script>
<style lang="stylus">
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
  .list
    width 100%
    height 1000px
    

</style>