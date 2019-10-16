<template>
  <div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus">
.tab
  width 100%
  height 40px
  border 1px solid red
  display flex
	position fixed
	bottom 0
	left 0
  .tab-item
    width 20%
  .showView
    width 100%
    height 100%
</style>
