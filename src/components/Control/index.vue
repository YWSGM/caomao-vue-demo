<template>
  <div class="controlContainer">
    <div class="reduceCount">-</div>
    <div class="count">1</div>
    <div class="addCount">+</div>
  </div>
</template>

<script>
export default {
 name: 'Control'
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.controlContainer
  width 100%
  height 30px
  border 1px solid #666666
  display flex
  .reduceCount
    width 30%
    height 100%
    border-right 1px solid #666666
    line-height 30px
    text-align center
  .count
    width 30%
    height 100%
    border-right 1px solid #666666
    line-height 30px
    text-align center
  .addCount
    width 30%
    height 100%
    line-height 30px
    text-align center
</style>