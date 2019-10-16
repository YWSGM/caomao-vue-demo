<template>
 <header class="header">
    <div class="header-log">
        <img src="./images/logo.png"/>
    </div>
    <div class="header-content" >
       <img src="" alt="">
    </div>
  </header>
</template>
<script>
export default {
  name:'Header'
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.header
  width 300px
  height 38px
  border-bottom  1px solid #666
  margin auto
  display flex
  position relative
  .header-log
    width 70px
    height 30px
    line-height  30px
    img
     width 70px
     height 30px
     display inline-block
     vertical-align middle
  .header-content
    width 150px
    height 25px
    background-color #EDEDED
    position absolute
    left 80px
    top 5px
    border-radius:5px 
    

     
     
    
   

</style>