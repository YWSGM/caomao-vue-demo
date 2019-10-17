<template>
  <div class="parent">
    <div class="top">
			<span class="iconfont icon-sousuo search-icon"></span>
      <input type="text" placeholder="请输入搜索内容" />
      <span class="close" @click="goto">取消</span>
    </div>
	<div class="bottom">
		<p>热门搜索</p>
		<ul>
			<li>
				回馈金卡买11得33
			</li>
			<li>
				保温杯限时7折
			</li>
			<li>
				百年传承珐琅锅
			</li>
			<li>
				冻干卤肉饭
			</li>
			<li>
				网红 流沙咸蛋黄酱
			</li>
			<li>
				即溶咖啡 直降54
			</li>
			<li>
				回馈金卡买11得33
			</li>
		</ul>
	</div>
  </div>
</template>
<script>
export default {
	methods: {
		goto(){
			this.$router.replace('/home')
		}
	}
};
</script>
<style lang="stylus">
.parent
	width 100%
	height 100%
	background-color #fff
	.bottom
		padding-top 20px
		padding-left 20px
		p
			color #666
			font-size 14px
			margin-bottom 10px
		ul
			display flex
			flex-wrap: wrap;
			li
				margin 10px
				padding 2px
				height 14px
				border 1px solid #ccc
				font-size 12px
	.top
		width 100%
		height 40px
		background-color #fff
		position relative
		input
			width 260px
			height 25px
			margin-top 5px
			background-color #f4f4f4
			position absolute
			left 44px
			top 3px
			
		.search-icon
			height 25px
			width 25px
			text-align center
			line-height 25px
			background-color #f4f4f4
			font-size 20px
			margin-left 10px
			position absolute
			left 10px
			top 8px
		.close
			position absolute
			right 30px
			top 12px
		
</style>