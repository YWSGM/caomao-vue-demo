<template>
  <div class="big">
    <div class="header">Heade</div>
  <!--遮罩显示列表-->
    <div class="unit" v-show="isShow">
     <div class="unit_1">
       <div class="le">全部频道</div>
       <div class="ri" @click="handleHold">^</div>
     </div>
     <div class="unit-list">
     <ul>
       <li>推荐</li>
       <li>居家生活</li>
       <li style="color:red;">服饰鞋包</li>
       <li>美食酒水</li>
       <li>个护清洁</li>
       <li>母婴亲子</li>
       <li>运动旅行</li>
       <li>数码家电</li>
       <li>全球特色</li>
     </ul>
     </div>
     <!--遮罩显示-->
     <div id="show"></div>

    </div>
    <!--列表-->
    <div>
      <ul class="ulList">
        <li>服饰鞋包
            <span class="current"></span>
        </li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴<span class="currentzi">亲子</span></li>
        <li @click="handleHold">x</li>


      </ul>
    </div>
<!--轮播图-->
<div class="swiper-container">
    <div class="swiper-wrapper" autoplay>
        <div class="swiper-slide">
           <img src="./images/a.jpg"/>
        </div>
        <div class="swiper-slide">
            <img src="./images/b.jpg"/>
        </div>
        <div class="swiper-slide">
             <img src="./images/c.jpg"/>
        </div>
        <div class="swiper-slide">
               <img src="./images/d.jpg"/>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
<!--秋季新品-->
<div class="gray">
<span>秋季新品</span>
<p>早秋时尚 抢先预览</p>
</div>

<!--底部列表-->
<div class="footer">
  <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/89a2ed86f8d27129c9ae8a9bdb88fa61.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
       经典让儒雅更持久
     </div>
     <p>男士经典英伦风衣2.0</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">559</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">669</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/47e73d8a1b9b0ec44e0e60856b1efffe.png"/>
      
     <div class="first">
       强韧非凡的牛仔裤，给你充...
     </div>
     <p>男士强韧耐磨大直筒牛仔裤</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">329</span>
     </span>
  </li>
  </ul>
  </div>
<!--第二个低步列表-->

 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/c.png"/>
    
     <div class="first">
      自带文胸的保暖打底上衣...
     </div>
     <p>女式heatease带杯保暖内衣</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">99</span>
     </span>
  </li>
  <li>
     <img src="./images/d.png"/>
        <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      经典日系的基础简约风
     </div>
     <p>经典日系的基础简约风</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">199</span>
     </span>
  </li>
  </ul>
  </div>
<!--第三个地步列表-->
 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/e.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      色织双股法兰绒，给秋冬输...
     </div>
     <p>男式法兰绒经典居家套装</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">149</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">299</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/f.png"/>
      
     <div class="first">
      100%棉法兰绒，保暖舒适
     </div>
     <p>女式法兰绒开衫睡裙</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">179</span>
     </span>
  </li>
  </ul>
  </div>
<!--第四个底部列表-->
 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/g.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      舒适仿针织面料 自由亲肤
     </div>
     <p>女式仿针织翻边合体直筒...</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">249</span>
     </span>
  </li>
  <li>
     <img src="./images/o.png"/>
      <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
      
     <div class="first">
     经典条纹升级版，阳光宅家...
     </div>
     <p>男式纯棉条纹居家套装</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">169</span>
     </span>
  </li>
  </ul>
  </div>
<!--第五个列表-->
 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/89a2ed86f8d27129c9ae8a9bdb88fa61.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
       经典让儒雅更持久
     </div>
     <p>男士经典英伦风衣2.0</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">559</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">669</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/47e73d8a1b9b0ec44e0e60856b1efffe.png"/>
      
     <div class="first">
       强韧非凡的牛仔裤，给你充...
     </div>
     <p>男士强韧耐磨大直筒牛仔裤</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">329</span>
     </span>
  </li>
  </ul>
  </div>
<!--第六个列表-->
<div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/e.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      色织双股法兰绒，给秋冬输...
     </div>
     <p>男式法兰绒经典居家套装</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">149</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">299</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/f.png"/>
      
     <div class="first">
      100%棉法兰绒，保暖舒适
     </div>
     <p>女式法兰绒开衫睡裙</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">179</span>
     </span>
  </li>
  </ul>
  </div>
<!--第七个列表-->

 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/c.png"/>
    
     <div class="first">
      自带文胸的保暖打底上衣...
     </div>
     <p>女式heatease带杯保暖内衣</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">99</span>
     </span>
  </li>
  <li>
     <img src="./images/d.png"/>
        <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      经典日系的基础简约风
     </div>
     <p>经典日系的基础简约风</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">199</span>
     </span>
  </li>
  </ul>
  </div>
<!--第八个列表-->
<div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/e.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      色织双股法兰绒，给秋冬输...
     </div>
     <p>男式法兰绒经典居家套装</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">149</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">299</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/f.png"/>
      
     <div class="first">
      100%棉法兰绒，保暖舒适
     </div>
     <p>女式法兰绒开衫睡裙</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">179</span>
     </span>
  </li>
  </ul>
  </div>
<!--第九个列表-->
<div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/e.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      色织双股法兰绒，给秋冬输...
     </div>
     <p>男式法兰绒经典居家套装</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">149</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">299</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/f.png"/>
      
     <div class="first">
      100%棉法兰绒，保暖舒适
     </div>
     <p>女式法兰绒开衫睡裙</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">179</span>
     </span>
  </li>
  </ul>
  </div>
<!--第十个列表-->
  <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/89a2ed86f8d27129c9ae8a9bdb88fa61.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
       经典让儒雅更持久
     </div>
     <p>男士经典英伦风衣2.0</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">559</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">669</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/47e73d8a1b9b0ec44e0e60856b1efffe.png"/>
      
     <div class="first">
       强韧非凡的牛仔裤，给你充...
     </div>
     <p>男士强韧耐磨大直筒牛仔裤</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">329</span>
     </span>
  </li>
  </ul>
  </div>
<!--第十一个列表-->
  <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/89a2ed86f8d27129c9ae8a9bdb88fa61.png"/>
     <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
       经典让儒雅更持久
     </div>
     <p>男士经典英伦风衣2.0</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">559</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">￥</span>
     <span style="font-size:14px;color:gray;text-decoration:line-through;">669</span>
     </span>

     <div style="margin-top:5px;">
       <p style="width:60px;height:17px;border:1px solid red;border-radius:20px;font-size:11px;line-height:17px;text-align:center;color:red;">抄低特惠</p>
     </div>

  </li>
  <li>
     <img src="./images/47e73d8a1b9b0ec44e0e60856b1efffe.png"/>
      
     <div class="first">
       强韧非凡的牛仔裤，给你充...
     </div>
     <p>男士强韧耐磨大直筒牛仔裤</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">329</span>
     </span>
  </li>
  </ul>
  </div>
<!--第十二列表-->
 <div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/c.png"/>
    
     <div class="first">
      自带文胸的保暖打底上衣...
     </div>
     <p>女式heatease带杯保暖内</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">99</span>
     </span>
  </li>
  <li>
     <img src="./images/d.png"/>
        <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      经典日系的基础简约风
     </div>
     <p>经典日系的基础简约风</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">199</span>
     </span>
  </li>
  </ul>
  </div>
<!--十三列表-->
<div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/c.png"/>
    
     <div class="first">
      自带文胸的保暖打底上衣...
     </div>
     <p>女式heatease带杯保暖内</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">99</span>
     </span>
  </li>
  <li>
     <img src="./images/d.png"/>
        <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      经典日系的基础简约风
     </div>
     <p>经典日系的基础简约风</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">199</span>
     </span>
  </li>
  </ul>
  </div>
<!--十四列表-->
<div class="footer-h">
  <ul class="ulList-h">
  <li>
     <img src="./images/c.png"/>
    
     <div class="first">
      自带文胸的保暖打底上衣...
     </div>
     <p>女式heatease带杯保暖内</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">99</span>
     </span>
  </li>
  <li>
     <img src="./images/d.png"/>
        <div class="in">
     <span>2</span>
     <span>色</span>
     <span>可</span>
     <span>选</span>
     </div>
     <div class="first">
      经典日系的基础简约风
     </div>
     <p>经典日系的基础简约风</p>

     <span>
     <span style="color:red;font-weight:700;">￥</span>
     <span style="font-size:17px;color:red;margin-right:2px;">199</span>
     </span>
  </li>
  </ul>
  </div>
</div>
<!--到头啦-->
  </div>
</template>
<script>

import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {

 data(){
     return {
       isShow:false
     }
 },
   
 
  
    mounted(){
 var mySwiper =new Swiper ('.swiper-container', {
   
    loop: true, // 循环模式选项
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    }
  });        
    },
    methods:{
    handleHold(){
      this.isShow=!this.isShow
    }
    }

};
</script>
<style lang="stylus">
.header 
  width 100%
  height 38px
  border 1px solid red


.ulList 
  overflow hidden
 
 
.ulList li 
  position relative
  height: 35px
  float: left
  margin-left 23px
  color #333
  line-height 35px
  
  .current 
     position absolute
     left -9px
     bottom 0
     width 80px 
     height 2px 
     background red
   .currentzi
     display inline-block
     height 25px
     opacity 0.4
 .swiper-container 
    width 100% 
    height 200px
    padding-bottom 10px
    background-color #F9F9F9
    img 
     width 100% 
     height 100% 
 .gray 
    width 100% 
    height 60px 
    text-align center
    padding-top 15px
  .gray span
   color #333333
   font-size 18px

  .gray p
     margin-top 10px
     color #999999
     font-size 14px
  .footer 
     width 100% 
     height 4445px
  
  .footer .footer-h
     width 100%
     height 315px
     background yellow
  .footer .footer-h ul
     overflow hidden
  .footer .footer-h ul li
     float left
     width 192px
     height 295px
     position relative
  
     padding 0 0px 20px 10px
  .footer .footer-h li img 
     width 190px
     height 190px
     display block
    .ulList-h .in 
        width 20px
        height 53px 
        background-color orange
        padding 8px 0 2px 0
        position absolute
        left 16px
        top 5px
      
    .in span
        display block
        float left
        width 18px
        height 14px
        font-size 12px
        line-height 6px
        text-align center
       .first 
         width 183px 
         height 20px 
         background orange
         padding 7px 0 0 7px
         font-size 14px 
         margin-bottom 8px
     .ulList-h li p 
         margin-bottom 5px
 .unit 
   width 414px
   height 206px
  
  
 .unit .unit_1
   width 100% 
   height 30px
   background red 
   overflow hidden 
  .unit .unit_1 .le 
     float left
     text-align center 
     line-height 30px
     margin-left 15px 
  .unit .unit_1 .ri 
     float right  
  .unit-list
       width  414px
       height 158px 
       
       padding-top 18px
   .unit-list ul 
       overflow hidden
       width 100%
       height 100%
   .unit-list ul li 
       width 80px 
       height 28px 
       background #FAFAFA
       float left
       margin 0 0 23px 21px
       text-align center 
       line-height 28px
       font-size 13px
       border 1px solid #d9d9d9
       border-radius 5px
    #show
      position absolute
      width 414px 
      height 4715px 
      background gray
      z-index 5
      opacity 0.6

      





    
     

   
   
  
 
</style>