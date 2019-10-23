<template>
   <div class="header-list" >
     <!-- 列表 箭头朝上的时候-->
      <div class="content-wrap"  v-show="isShow">
        <div class="list-content">
          <div class="content1">
            <span class="active" @click="goto('/home')">推荐使用</span>
            <span  @click="goto('/classify/season')">秋冬好物</span>
            <span  @click="goto('/classify/faddish')">爆款专区</span>
            <span  @click="goto('/classify/new')">新品专区</span>
            <span  @click="goto('/classify/living')">居家生活</span>
            <span @click="goto('/classify/costume')">服饰鞋包</span>
            <span @click="goto('/classify/food')">美食酒水</span>
            <span @click="goto('/classify/person')">个人清护</span>
            <span @click="goto('/classify/son')">母婴亲子</span>
          </div>
          <div class="list-btn" @click="toggleShow">
             <span class="iconfont font">&#xe60c;</span>
          </div>
        </div>
      </div>
    <!-- 列表 箭头朝下的时候-->
      <div class="content-text" v-show="!isShow">
        <div class="list-content">
          <div class="content1">
            <span>全部频道</span>
          </div>
          <div class="list-btn" @click="toggleShow" >
             <span class="iconfont font">&#xe619;</span>
          </div>
        </div>
        <div class="moretext">
          <ul class="moretext-list">
            <li class="moretext-item">
              <div class="item active"  @click="goto('/home')">
                  <p>推荐使用</p>
              </div>
            </li>
             <li class="moretext-item" @click="goto('/classify/season')" >
               <div class="item" >
                  <p>秋冬好物</p>
              </div>
            </li>
             <li class="moretext-item"  @click="goto('/classify/faddish')">
              <div class="item" >
                  <p>爆款专区</p>
              </div>
            </li>
            <li class="moretext-item"  @click="goto('/classify/new')">
              <div class="item" >
                  <p>新品专区</p>
              </div>
            </li>
            <li class="moretext-item"  @click="goto('/classify/living')">
              <div class="item" >
                  <p>居家生活</p>
              </div>
            </li>
            <li class="moretext-item"  @click="goto('/classify/costume')">
              <div class="item" >
                  <p>服饰鞋包</p>
              </div>
            </li>
              <li class="moretext-item"  @click="goto('/classify/food')">
              <div class="item" >
                  <p>美食酒水</p>
              </div>
            </li>
                <li class="moretext-item"  @click="goto('/classify/person')">
              <div class="item" >
                  <p>个人清护</p>
              </div>
            </li>
               <li class="moretext-item"  @click="goto('/classify/son')">
              <div class="item" >
                  <p>母婴亲子</p>
              </div>
            </li>
            
          </ul>
          <div class="moretext-shade"></div>
        </div>
      </div>
     
    </div>
</template>
<script>
// 引入 better-scroll
import BScroll from 'better-scroll'
export default {
  name: 'List',
    data(){
     return{
       isShow:true
    }
  },
  mounted(){
    let scroll1 = new BScroll('.list-content', {
      scrollX:true,
      scrollY:false,
    })
   window.console.log(scroll1)
  },
  methods:{
    toggleShow(){
      this.isShow=!this.isShow
    },
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1461237 */
  src: url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.eot');
  src: url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.woff') format('woff'),
  url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1461237_1xn69ytehsr.svg#iconfont') format('svg');
}
.iconfont
  font-family 'iconfont' !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
.header-list
  position fixed
  top 38px
  width 100%
  // height 100px
  background-color #fff
  z-index 999
  .list-content
    width 330px
    height 50px
    // background-color green
    .content1
      width 800px
      height 50px
      display flex
      // background-color red
      position relative
      span
        flex 1
        padding-left 20px
        line-height 50px
        color #666
        &.active
          color #b4282d
    .list-btn
       width 45px
       height 50px
       background-color #fff
       position  absolute
       right 0px
       top 0px
       .font
         display block
         text-align  center
         line-height 50px
// 列表 箭头朝下的时候
  .moretext
    width 100%
    height 140px
   
    .moretext-list
      width 380px
      height 140px
      display flex
      flex-wrap wrap
      .moretext-item
        flex 1
        padding-left 10px
        .item
          width 70px
          height 28px
          background-color #f5f5f5
          line-height 28px
          text-align center
          border-radius: 2px
          font-size 12px
          border 1px solid #ededed
          &.active
            border 1px solid #b4282d
            color #b4282d
            
          
        
    .moretext-shade
      width 380px
      height 1000px
      background-color rgba(0,0,0,0.5)
      // background-color red
       
        







</style>