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
      <ul class="shopList">
        <li v-for="(list,index) in lists" :key="index" >
          <img :src="list.url" alt />
          <p>{{list.text}}</p>
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
  // border-top 1px solid #ccc
  top-border-1px(#ccc)
	height 100%
  box-sizing border-box
	
	.swipeWrap
		height 100px
		img 
			width 100%
			height 100%
	.shopWarp
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