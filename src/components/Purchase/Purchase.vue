<template>
  <div class="box">
    <Header />
    <div class="head1">
      <div class="imgs">
        <img src="./6.png" alt="">
      </div>
      <div class="text">
        <p class="p1">价格：499</p>
        <p class="p2">已选择：请选择规格</p>
      </div>
    </div>
    <div class="head2">
      颜色
    </div>
    <div class="head3">
      <div>
        <span>孔雀绿</span>
      </div>
      <div>
        <span>孔雀绿</span>
      </div>
      <div>
        <span>孔雀绿</span>
      </div>
      <div>
        <span>孔雀绿</span>
      </div>
    </div>
    <div class="head4">
      尺寸
    </div>
    <div class="head5">
      <div>
        <span>1.5m（5英尺）床</span>
      </div>
      <div>
        <span>1.5m（5英尺）床</span>
      </div>
    </div>
    <div class="head6">
      数量
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
.box
  width 100%
  .head1
    width 100%
    height 110px
    // background-color pink
    margin-top 40px
    position relative
    div
      float left
    .imgs 
      width 30%
      img 
        width 110px
        height 110px
    .text
      width 70%
      position absolute
      bottom 13px
      left 40%
      font-size 14px
      .p1
        color red    
  .head2
    width 100%
    height 30px
    line-height 30px
    // background-color skyblue
    padding-left 10px
  .head3
    width 100%
    height 40px
    line-height 40px
    text-align center
    // background-color yellow
    div
      float left
      width 25%
      span 
        padding 7px
        border 1px #000 solid
  .head4  
    width 100%
    height 30px
    // background-color green  
    line-height 30px
    padding-left 10px
  .head5
    width 100%
    height 40px
    // background-color blue
    div
      width 50%
      float left
      height 40px
      line-height 40px
      text-align center
      span  
        padding 7px
        border 1px #000 solid
  .head6
    width 100%
    height 30px
    line-height 30px
    // background-color orange  
    padding-left 10px  
</style>