<template>
  <div class="header ad bottom-border-1px">
    <div class="text-logo-holder">
      <i class="icon icon-text-logo"></i>
    </div>
    <div class="left">
      <i class="icon icon-home" @click="$router.push('/home')"></i>
    </div>
    <div class="ad right">
      <i class="icon icon-search right-10" @click="$router.push('/search')"></i>
      <i class="icon icon-cart" @click="$router.push('/cart')"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.ad {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  display: block;
  background-image: url('./login-icons.png');
  background-size: 86px 210px;
}

.icon-text-logo {
  width: 86px;
  height: 27px;
  background-position-y: -64px;
}

.icon-home {
  width: 24px;
  height: 22px;
  background-position-y: -37px;

  &:before {
    content: '';
  }
}

.icon-search {
  width: 32px;
  height: 32px;
  background-position-y: 32px;
}

.icon-cart {
  width: 32px;
  height: 32px;
  background-position-y: 0;
}

.header {
  height: 44px;
  padding: 0px 8px 0px 12px;
  background-color: #fafafa;
  position: relative;
  top: 0;
  left: 0;
  border-color: #eee;
  width: 100vw;
  box-sizing: border-box;

  .right-10 {
    margin-right: 10px;
  }

  .text-logo-holder {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }

  .left {
    z-index: 1;
  }

  .right {
    z-index: 1;
  }
}
</style>