<template>
  <div class="listRight">
    <div class="swipeWrap">
      <mt-swipe :auto="4000" class="swiper-item">
        <mt-swipe-item>
          <img src="./img/qiudong1.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="shopWarp">
      <ul class="shopList">
        <li>
          <img src="./img/qiudongxiao1.png" alt />
          <p>秋冬床品</p>
        </li>
        <li>
          <img src="./img/qiudongxiao2.png" alt />
          <p>滋补美食</p>
        </li>
        <li>
          <img src="./img/qiudongxiao3.png" alt />
          <p>换季扫除</p>
        </li>
        <li>
          <img src="./img/qiudongxiao4.png" alt />
          <p>秋冬服饰新品</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.listRight
  height 100%
  // border-top 1px solid #ccc
  top-border-1px(#ccc)
  box-sizing border-box
	.swipeWrap
		height 160px
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
				p
					font-size 12px
</style>