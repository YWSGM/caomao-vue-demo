<template>
  <div class="logoWrap s">
    <i class="icon icon-logo-wrap" :style="logoWrapStyle"></i>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      default: () => ({
        width: 134,
        height: 45
      })
    }
  },
  computed: {
    logoWrapStyle() {
      const size = this.size;
      return {
        width: `${size.width}px`,
        height: `${size.height}px`
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
.s {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: block;
}

.logoWrap {
  padding: 80px 0 116px 0;
  width: 100%;

  .icon-logo-wrap {
    width: 134px;
    height: 45px;
    background-size: 100% 100%;
    background-image: url('./logo-wrap.png');
    background-position-y: 0px;
  }
}
</style>