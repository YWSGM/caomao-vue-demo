<template>
  <div class="controlContainer">
    <div class="reduceCount"  @click.stop="updateGoodCount(false)">-</div>
    <div class="count">{{good.count}}</div>
    <div class="addCount" @click.stop="updateGoodCount(true)">+</div>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  props: {
    good:Object
  },
  name: 'Control',
  methods: {
    updateGoodCount(isAdd){
      console.log(this)
     this.$store.dispatch('updateGoodCount',{isAdd,good:this.good})
    }
  }
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
    width 40%
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