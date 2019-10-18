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
            <div class="swiper-slide" >
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
    </div>
    </div>



    <!--底部-->
    <Footer />
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
   mounted(){
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
<style lang="stylus" rel="stylesheet/stylus" >


</style>
