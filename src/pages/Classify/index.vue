<template>
  <div>
    <header class="header">
      <div class="search">
        <input type="text" placeholder="请输入搜索商品" />
      </div>
    </header>
		<div>
			<div class="listLeft">
				<ul>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
					<li>
						<a href="#javascript:;">推荐专区</a>
					</li>
				
				</ul>
			</div>
			<div class="listRight"></div>
		</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl'
.header
  width 100%
  height 44px
	.search
		width 90%
		height 60%
		margin 8px auto
		input
			width 100%
			height 100%
			box-sizing border-box
			text-align center
			background-color #ccc
	.listLeft
		ul 
			li
				width 80px
				height 50px
				border 1px solid #ccc
				font-size 14px
				text-align center
				line-height 50px
				a
					padding 2px
					border-left red solid 4px
</style>