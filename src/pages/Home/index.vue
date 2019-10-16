<template>
  <section class="home">
    <!--首页头部-->
    <Header />
    <div class="content" @click="clickItem(index)">
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
      <div class="goods">
      <div class="menu-wrapper">
        <ul ref="leftUl">
          <!--:class="{current:}"-->
          <li
            class="menu-item"
            :class="{current:currentIndex===index}"
            v-for="(good,index) in goods"
            :key="index"
            @click="clickItem(index)"
          >
            <img class="icon" :src="good.icon" v-if="good.icon" />
            <span class="text bottom-border-1px">{{good.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food,index) in good.foods"
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--购物车-->
      <ShopCart />
    </div>
    </div>
    <Footer />
  </section>
</template>
<script>
import Swiper from "swiper"
import 'swiper/css/swiper.css'
// 引入better-scroll
import BScroll from 'better-scroll'
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
    // 开始滑动
    this._initBscroll()
  },
  methods:{
      // 开始滚动
    /* eslint-disable */
    _initBscroll(){
     this.scroll = new BScroll('.content',{
       click:true,
       probeType:1
     })
     // 上下列表的滑动事件
     this.scroll.on('scroll',({x,y})=>{
       console.log('哈哈')
     })
    },
    _initTops() {
      // 获取列表的高度
      const tops = []
      let top = 0
      tops.push(top)
      // 获取ul中所有的li
      const list = this.$refs.rightUl.children
      Array.prototype.slice.call(list).forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      console.log(tops)
      // 更新数据
      this.tops = tops
    },
    // 点击左侧的列表选项,右侧的列表滑动
    clickItem(index) {
      // 获取上下滑动的值
      const scrollY = this.tops[index]
      this.scrollY = scrollY
      this.Scroll.scrollTo(0, -scrollY, 300)
    }
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
    background red

</style>