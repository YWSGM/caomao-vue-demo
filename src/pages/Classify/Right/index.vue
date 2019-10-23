<template>
  <div class="listRight">
    <div class="swipeWrap">
      <mt-swipe :auto="4000" class="swiper-item">
        <mt-swipe-item>
          <img src="../img/lunbotu1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/lunbotu2.png" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="shopWarp">
     <!--  <ul class="shopList">
        <li v-for="(list,index) in lists" :key="index" >
          <img :src="list.url" alt />
          <p>{{list.text}}</p>
        </li>
      </ul> -->
      <ul class="shopList">
        <li>
          <img src="../img/boutique/01.png" alt />
          <p>明星商品地质69元</p>
        </li>
        <li>
          <img src="../img/boutique/02.png" alt />
          <p>999+好评</p>
        </li>
        <li>
          <img src="../img/boutique/03.png" alt />
          <p>员工精选好货低至15元</p>
        </li>
        <li>
          <img src="../img/boutique/04.png" alt />
          <p>秋冬服配特惠低至5折</p>
        </li>
        <li>
          <img src="../img/boutique/04.png" alt />
          <p>秋冬服配特惠低至5折</p>
        </li>
        <li>
          <img src="../img/boutique/04.png" alt />
          <p>秋冬服配特惠低至5折</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   computed: {
    ...mapState({
      lists:state => state.classify.lists
    })

  }
};
</script>
<style lang="stylus">
.listRight
  top-border-1px(#ccc)
	height 100%
  box-sizing border-box
	.swipeWrap
    padding-top 40px
		height 100px
		img 
			width 100%
			height 100%
	.shopWarp
    padding-top 20px
		.shopList
			display flex
			flex-wrap wrap
			margin-left 20px
			padding-left 10px
			li
				width 80px
				height 80px
				img
					width 60px
					height 60px
          border-radius 50%
				p
					font-size 14px
</style>