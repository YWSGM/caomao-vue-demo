<template>
  <div class="box">
    <Header />
    <div class="box1">
      <div class="detail">
        <div class="photo">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/1.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/2.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/3.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/4.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="./images/5.png" alt />
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>-->
          </div>
        </div>
        <div class="center-top">
          <div class="text">
            <p>下方可领券，领券后再省15元，到手价484元</p>
          </div>
        </div>
        <div class="content">
          <div class="content-price">
            <p class="content-p">￥449</p>
            <div class="content-discount">
              <div class="content-a">
                <div class="content-c">
                  <span class="contentfirst">专享95折</span>
                  <span>超级会员价¥474.1,可省</span>
                  <span class="contenttext">￥24.9</span>
                </div>
                <div>
                  <span>再享每单返利6%/每月1件40元赠品等省钱权益</span>
                </div>
              </div>
              <div class="content-b">
                <div class="iconfont btn1">&#xe65a;</div>
                <p class="content-b1">
                  60s臻密绒磨毛四件套
                  <span class="content-b3">99.7%</span>
                </p>
                <p class="content-b2">
                  浅绒如脂臻密，高级莫兰迪色系
                  <span class="content-b4">
                    <span>好评率</span>
                  </span>
                </p>
              </div>
              <button class="btn">立即开通</button>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="inner1">
            <span class="span1">领券：</span>
            <span class="span2">新人15元直减</span>
            <span class="span3">每满200减20</span>
            <span class="iconfont span4">&#xe65a;</span>
          </div>
          <div class="inner2">
            <span>购物返：新用户最高返</span>
            <span class="span5">￥4.99回馈金+49积分</span>
            <span class="iconfont span6">&#xe65a;</span>
          </div>
        </div>
        <div class="center-footer">
          <div class="center-footer-top" @click="goto">
            <span class="center-footer-text">请选择规格数量</span>
            <span class="iconfont center-footer-icon">&#xe65a;</span>
          </div>
          <div class="center-footer-center">
            <span>配送：请选择配送地址</span>
            <span class="iconfont center-center-icon">&#xe65a;</span>
          </div>
          <div class="center-footer-bottom">
            <span class="center-footer-text">服务：支持7天无理由退货，48小时极速退款</span>
            <span class="iconfont center-bottom-icon">&#xe65a;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopcardetail">
      <div class="shopcardetailA">图片</div>
      <div class="shopcardetailB">立即购买</div>
      <div class="shopcardetailC">加入购物车</div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import BScroll from "better-scroll";
export default {
  mounted() {
    let scroll = new BScroll(".box1");
    //创建swiper对象，实现轮播效果
    let mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    console.log(this, this.$route.query);
    var obj = this.$route.query;
    obj.norms = obj.norms
      .replace("[", "")
      .replace("]", "")
      .split(",")
      .map(item => item.replace(/\'/g, ""));
    console.log("obj", obj);
  },
  methods: {
    goto() {
      this.$router.replace("/detail/purchase");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@font-face
  font-family 'iconfont' /* project id 1462554 */
  src url('//at.alicdn.com/t/font_1462554_je77ivxair.eot')
  src url('//at.alicdn.com/t/font_1462554_je77ivxair.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1462554_je77ivxair.woff2') format('woff2'), url('//at.alicdn.com/t/font_1462554_je77ivxair.woff') format('woff'), url('//at.alicdn.com/t/font_1462554_je77ivxair.ttf') format('truetype'), url('//at.alicdn.com/t/font_1462554_je77ivxair.svg#iconfont') format('svg')
.iconfont
  font-family 'iconfont' !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
.box
  width 100%
  height 700px
  position relative
  .box1
    height 600px
    .detail
      width 100%
      height 800px
      .photo
        height 300px
        width 100%
        background-color #fff
        // margin-top 45px
        .swiper-container
          .swiper-wrapper
            div
              img
                height 300px
                width 100%
      .center-top
        height 35px
        width 100%
        background-color #fff0DD
        overflow hidden
        .text
          height 20px
          width 80%
          margin-top 10px
          margin-left 10px
          p
            font-size 13px
            color #f48f18
      .content
        height 200px
        width 100%
        position relative
        // background-color red
        .content-price
          height 170px
          width 95%
          // background-color skyblue
          position absolute
          right 0
          top 15px
          .content-p
            color #b4282d
            font-size 26px
            font-weight 700
            margin-bottom 10px
          .content-discount
            // background-color green
            width 95%
            height 130px
            position relative
            .content-a
              width 100%
              height 50%
              background-color #f0e7d3
              font-size 12px
              overflow hidden
              .content-c
                margin-top 15px
                margin-bottom 10px
                .contentfirst
                  background-color #736140
                  width 60px
                  height 15px
                  line-height 15px
                  text-align center
                  display inline-block
                .contenttext
                  color red
            .content-b
              width 100%
              height 50%
              // background-color yellow
              overflow hidden
              position relative
              margin-top 10px
              .content-b1
                font-size 16px
                margin-top 5px
                margin-bottom 10px
                .content-b3
                  margin-left 110px
                  color #b4282d
                  font-weight 700
              .content-b2
                font-size 12px
                .content-b4
                  color #7f7f7f
                  margin-left 110px
              .btn1
                position absolute
                font-size 22px
                color #7f7f7f
                width 20px
                height 20px
                top 17px
                // right 0px
                left calc(93% - -3px)
                // margin-left 300px
                // margin-top 10px
            .btn
              height 30px
              width 70px
              position absolute
              top 20px
              right 10px
              border none
              font-size 12px
              color #fff
              background-color #cbb588
      .inner
        width 100%
        height 120px
        background-color #F5F5F5
        padding-top 10px
        .inner1
          width 100%
          height 60px
          background-color #fff
          line-height 60px
          position relative
          padding 10px
          box-sizing border-box
          .span2
            color orange
            margin-right 10px
            font-size 14px
            border 1px solid orange
            height 20px
          .span3
            color orange
            font-size 14px
            border 1px solid orange
          .span4
            font-size 22px
            color #7f7f7f
            width 20px
            height 20px
            position absolute
            top 10px
            left 335px
        .inner2
          width 100%
          height 60px
          // background-color skyblue
          line-height 60px
          padding 5px
          box-sizing border-box
          position relative
          .span5
            color #dd1a21
          .span6
            font-size 22px
            color #7f7f7f
            width 20px
            height 20px
            position absolute
            top 7px
            left 335px
      .center-footer
        .center-footer-top
          position relative
          width 100%
          height 60px
          padding 0 5px
          line-height 60px
          // background-color green
          .center-footer-icon
            font-size 22px
            color #7f7f7f
            width 20px
            height 20px
            position absolute
            top 5px
            left 335px
        .center-footer-center
          position relative
          width 100%
          height 60px
          padding 0 5px
          line-height 60px
          background-color #F5F5F5
          .center-center-icon
            font-size 22px
            color #7f7f7f
            width 20px
            height 20px
            position absolute
            top 5px
            left 335px
        .center-footer-bottom
          position relative
          width 100%
          height 60px
          padding 0 5px
          line-height 60px
          background-color #fff
          font-size 16px
          .center-bottom-icon
            font-size 22px
            color #7f7f7f
            width 20px
            height 20px
            position absolute
            top 5px
            left 335px
  .shopcardetail
    display inline-block
    width 100%
    height 50px
    position fixed
    bottom 0
    z-index 999
    div
      display inline-block
      height 50px
      text-align center
      line-height 50px
    .shopcardetailA
      width 20%
      background-color #fff
      // border-right 1px solid #fff
    .shopcardetailB
      width 40%
      background-color #fff
    .shopcardetailC
      width 40%
      background-color #b4282d
</style>