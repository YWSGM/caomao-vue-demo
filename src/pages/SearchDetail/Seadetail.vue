<template>
  <div class="box">
    <Header/>
    <div class="searchname">
      <div class="photo">
        <img src="./1.jpg" alt="">
      </div>
      <div class="text">网易云课堂:末末</div>
    </div>
    <div class="title">
      <span>一次吃到两种好吃又养人的秋冬补品</span>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
  .box
    height 100%
    width 100%
    .searchname
      margin-top 40px
      border-top 1px solid #f5f5f5
      height 30px 
      width 100%
      background-color skyblue
      padding-top 10px
      padding-left 10px
      .photo
        width 30px
        height 30px
        border-radius 50%
        // background-color green
        overflow hidden
        display inline-block
        float left
        img 
          width 30px
          height 30px 
      .text
        width 150px
        height 30px
        display inline-block
        // margin-bottom 10px
        line-height 30px   
        float left
        margin-left 10px
        font-size 14px
    .title
      font-size 20px
      height 60px
      width 100%
      background-color pink  
      line-height 60px
    .line
      height 2px
      width 50px
      background-color #bc9162
</style>