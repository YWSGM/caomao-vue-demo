<template>
  <div>
    <!-- <header class="header">
      <div class="search">
        <input type="text" placeholder="请输入搜索商品" />
      </div>
    </header> -->
    <Header/>
    <div class="List">
      <div class="listLeft">
        <ul>
          <li class="active">
            <a class="active" href="#javascript:;">推荐专区</a>
          </li>
          <li>
            <a href="#javascript:;">推荐专区</a>
          </li>
          <li>
            <a href="#javascript:;">秋冬好物</a>
          </li>
          <li>
            <a href="#javascript:;">爆款专区</a>
          </li>
          <li>
            <a href="#javascript:;">新品专区</a>
          </li>
          <li>
            <a href="#javascript:;">居家生活</a>
          </li>
          <li>
            <a href="#javascript:;">服饰鞋包</a>
          </li>
					<li>
            <a href="#javascript:;">美食酒水</a>
          </li>
					<li>
            <a href="#javascript:;">个人清护</a>
          </li>
					<li>
            <a href="#javascript:;">母婴亲子</a>
          </li>
					<li>
            <a href="#javascript:;">运动旅行</a>
          </li>
					<li>
            <a href="#javascript:;">数码家电</a>
          </li>
        </ul>
      </div>
      <div class="listRight">
        <mt-swipe :auto="4000" class="swiper-item">
          <mt-swipe-item >
						<img src="./img/lunbotu1.jpg" alt="	">
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="./img/lunbotu2.png" alt="	">
					</mt-swipe-item>
        </mt-swipe>
        <div>
          <ul class="shopList">
            <li>
              <img src="./img/boutique/01.png" alt />
              <p>明星商品地质69元</p>
            </li>
            <li>
              <img src="./img/boutique/02.png" alt />
              <p>999+好评</p>
            </li>
            <li>
              <img src="./img/boutique/03.png" alt />
              <p>员工精选好货低至15元</p>
            </li>
            <li>
              <img src="./img/boutique/04.png" alt />
              <p>秋冬服配特惠低至5折</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
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
.List
  margin-top 40px
  display flex
  .listLeft
    top-border-1px(#ccc)
    ul
      li
        width 80px
        height 50px
        font-size 14px
        text-align center
        line-height 50px
        border-right 0.5px solid #ccc
        &.active
          background-color #ccc
        a
          width 100%
          padding 2px
          &.active
            border-left red solid 4px
  .listRight
    // border-top 1px solid #ccc
    top-border-1px(#ccc)
    box-sizing border-box
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
          font-size 14px
		.swiper-item
			width 300px
			height 100px
			img 
				width 100%
				height 100%
</style>