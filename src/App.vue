<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus">
dangerColor = #dd1a21;

body, html {
  overflow: hidden;
}

.mint-button--danger {
  background-color: dangerColor;

  &.is-plain {
    color: dangerColor;
    border-color: dangerColor;
  }
}
</style>
