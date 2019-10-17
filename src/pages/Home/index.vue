<template>
  <section class="home">
    <!--首页头部-->
    <Header />
    <div class="header-list" >
      <div class="content-wrap">
        <div class="list-content">
          <div class="content1">
            <span class="active">推荐使用</span>
            <span>居家生活</span>
            <span>服饰鞋包</span>
            <span>美食酒水</span>
            <span>个护清洁</span>
            <span>母婴亲子</span>
            <span>运行旅游</span>
            <span>数码家电</span>
            <span>全球特色</span>
          </div>
        </div>
      </div>

     
    </div>
    <div class="firstView">
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
        <div class="swiper-slide1">
          <ul class="slide-top">
            <li class="top-item" v-for="(homelist,index) in homelists" :key="index">
              <img :src="homelist.url" alt />
              <span>{{homelist.name}}</span>
            </li>
            <!-- <li class="top-item">
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
            </li> -->
          </ul>
          <ul class="slide-top">
            <li class="top-item"  v-for="(homelisttwo,index) in homelisttwos" :key="index">
              <img :src="homelisttwo.url" alt />
              <span>{{homelisttwo.name}}</span>
            </li>
            <!-- <li class="top-item">
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
            </li> -->
          </ul>
        </div>
        <div class="bgImage">
          <img src="./images/big-img.gif" alt />
        </div>
        <div class="firstView-content">
          <div class="content">
            <div class="content-left">
              <p class="font-top">9.9超值专区</p>
              <p class="font-bottom">190款商品定价直降</p>
              <div class="content-img">
                <img src="./images/item-6.png" alt />
                <img src="./images/item-7.png" alt />
              </div>
            </div>
            <div class="content-right">
              <p class="font-top">9.9超值专区</p>
              <p class="font-bottom">190款商品定价直降</p>
              <div class="content-img">
                <img src="./images/item-22.png" alt />
                <img src="./images/item-23.png" alt />
              </div>
            </div>
            <div class="content-bottom1">
              <p class="font-top">9.9超值专区</p>
              <p class="font-bottom">190款商品定价直降</p>
              <div class="content-img">
                <img src="./images/item-24.png" alt />
                <img src="./images/item-25.png" alt />
              </div>
            </div>
            <div class="content-bottom2">
              <p class="font-top">9.9超值专区</p>
              <p class="font-bottom">190款商品定价直降</p>
              <div class="content-img">
                <img src="./images/item-26.png" alt />
                <img src="./images/item-27.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="text">
          <div class="text-content">
            <p>私人定制</p>
          </div>
        </div>
        <div class="swiper-content-profile">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-list">
                <ul>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-9.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-10.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-11.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-list">
                <ul>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-9.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-10.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-11.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-list">
                <ul>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-9.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-10.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-11.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-list">
                <ul>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-12.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-13.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                  <li>
                    <div class="list-books">
                      <img src="./images/item-14.png" alt />
                    </div>
                    <p>
                      严选礼品卡 500元面值
                      <span>￥50</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="moduleTitle">
          <div class="Title-content">
            <p>限时购</p>
          </div>
        </div>
        <div class="ctn">
          <div class="slide-list">
            <ul>
              <li>
                <div class="list-books">
                  <img src="./images/item-15.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
              <li>
                <div class="list-books">
                  <img src="./images/item-16.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
              <li>
                <div class="list-books">
                  <img src="./images/item-17.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
              <li>
                <div class="list-books">
                  <img src="./images/item-18.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
              <li>
                <div class="list-books">
                  <img src="./images/item-19.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
              <li>
                <div class="list-books">
                  <img src="./images/item-21.png" alt />
                </div>
                <p>
                  严选礼品卡 500元面值
                  <span>￥50</span>
                </p>
              </li>
            </ul>
          </div>
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
import { mapState } from "vuex";
export default {
  methods: {
    scroll() {}
  },
  mounted() {
    // 开始滑动
    /* eslint-disable */
    let scroll = new BScroll('.firstView')
    let scroll1 = new BScroll('.list-content', {
      scrollX:true,
      scrollY:false,
    })
    console.log(scroll1)
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
    var mySwiper = new Swiper('.swiper-content-profile', {
      loop: true, //循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        // el: '.swiper-pagination'
      }
    })
    this.$store.dispatch('getHomelist')
    this.$store.dispatch('getHomelisttwo')
    this.$store.dispatch('getHomegood')
  },
  computed: {
    ...mapState({
      homelists:state=>state.Home.homelist,
      homelisttwos:state=>state.Home.homelisttwo,
      homegoods:state=>state.Home.homegood
    })
  }
}
</script>
<style lang="stylus" scoped>
.firstView
  height 600px
 
.home
  width 100%
  height 100%
  position fixed
  top 80px
  
  .swiper-container
    // padding-top 1px
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
  .swiper-slide1
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
    border-bottom 8px solid #ededed
    .content
      width 350px
      height 290px
      background-color #f5f5f5
      margin auto
      position relative
      .content-left
        width 175px
        height 130x
        border-right 2px solid #ffffff
        border-bottom 2px solid #ffffff
        // margin-bottom 5px
        // background-color red
        .font-bottom
          font-size 14px
          padding-top 10px
          padding-left 20px
          color #7F7F7F
        .font-top
          padding-top 15px
          padding-left 20px
          color #333333
        .content-img
          width 150px
          height 75px
          // background-color red
          padding-left 10px
          padding-top 10px
          img
            width 70px
            height 70px
      .content-right
        position absolute
        left 175px
        top 0px
        width 175px
        height 130x
        border-left 2px solid #ffffff
        border-bottom 2px solid #ffffff
        // margin-bottom 5px
        // background-color red
        .font-bottom
          font-size 14px
          padding-top 10px
          padding-left 20px
          color #7F7F7F
        .font-top
          padding-top 15px
          padding-left 20px
          color #333333
        .content-img
          width 150px
          height 75px
          // background-color red
          padding-left 10px
          padding-top 10px
          img
            width 70px
            height 70px
      .content-bottom1
        top 0px
        width 175px
        height 130x
        border-right 2px solid #ffffff
        // margin-bottom 5px
        // background-color red
        .font-bottom
          font-size 14px
          padding-top 10px
          padding-left 20px
          color #7F7F7F
        .font-top
          padding-top 15px
          padding-left 20px
          color #333333
        .content-img
          width 150px
          height 75px
          // background-color red
          padding-left 10px
          padding-top 10px
          img
            width 70px
            height 70px
      .content-bottom2
        position absolute
        left 175px
        top 150px
        width 175px
        height 130x
        border-left 2px solid #ffffff
        // margin-bottom 5px
        // background-color red
        .font-bottom
          font-size 14px
          padding-top 10px
          padding-left 20px
          color #7F7F7F
        .font-top
          padding-top 8px
          padding-left 20px
          color #333333
        .content-img
          width 150px
          height 75px
          // background-color red
          padding-left 10px
          padding-top 10px
          img
            width 70px
            height 70px
  .text
    width 100%
    height 50px
    // background-color red
    .text-content
      width 350px
      height 50px
      margin auto
      // background-color green
      p
        line-height 50px
  .swiper-content-profile
    width 100%
    height 180px
    border-bottom 10px solid #ededed
    .slide-list
      width 100%
      height 100%
      // background-color red
      ul
        display flex
        li
          flex 1
          padding-left 12px
          .list-books
            width 100px
            height 100px
            background-color #f5f5f5
            img
              width 100px
              height 100px
          p
            padding-top 5px
            font-size 12px
            width 100px
            height 30px
            display block
            line-height 20px
            // background-color green
            span
              color red
  .moduleTitle
    width 100%
    height 50px
    // background-color red
    .Title-content
      width 350px
      height 50px
      margin auto
      // background-color green
      p
        line-height 50px
.ctn
  width 380px
  height 360px
  border-bottom 10px solid #ededed
  // background-color green
  .slide-list
    width 100%
    height 100%
    // background-color red
    ul
      width 380px
      height 360px
      display flex
      flex-wrap wrap
      li
        flex 1
        padding-left 12px
        .list-books
          width 100px
          height 100px
          background-color #f5f5f5
          img
            width 100px
            height 100px
        p
          padding-top 5px
          font-size 12px
          width 100px
          height 30px
          display block
          line-height 20px
          // background-color green
          span
            color red
.header-list
  position fixed
  top 38px
  width 100%
  // height 100px
  background-color #fff
  z-index 999
  .list-content
    width 380px
    height 50px
    // background-color green
    .content1
      width 800px
      height 50px
      display flex
      // background-color red
      span
        flex 1
        padding-left 20px
        line-height 50px
        color #666
        &.active
          color #b4282d
</style>