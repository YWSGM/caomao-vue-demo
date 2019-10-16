<template>
  <div class="container">
    <div v-if="defaultBannerSeen" class="defaultBanner full-width ad">
      <i class="icon close" @click="defaultBannerSeen = false"></i>
      <div class="ad left">
        <i class="icon brand"></i>
        <div class="wx">
          <p class="txt1">前往APP领1000元新用户现金礼包</p>
          <p>网易自营 品质生活</p>
        </div>
      </div>
      <div class="right">
        <button class="w-button">打开APP</button>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      defaultBannerSeen: true
    };
  },
  computed: {},
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
.full-width {
  width: 100%;
}

.ad {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wx {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.icon {
  display: block;
  background-image: url('./login-icons.png');
  background-size: 86px 210px;
}

.icon-home {
  width: 24px;
  height: 22px;
  background-position-y: -37px;
}

.icon-search {
  width: 32px;
  height: 32px;
  background-position-y: 32px;
}

.icon-cart {
  width: 32px;
  height: 32px;
}

.icon-text-logo {
  width: 86px;
  height: 27px;
  background-position-y: -64px;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #eee;

  .defaultBanner {
    background-color: #333;
    height: 52px;
    color: #fff;
    position: relative;
    box-sizing: border-box;
    padding: 0 10px 0 15px;
    font-size: 13px;

    .close {
      position: absolute;
      height: 19px;
      width: 19px;
      top: 0px;
      left: 0px;
      background-position-y: 114px;
    }

    .left {
      height: 36px;

      .brand {
        height: 36px;
        width: 36px;
        background-position-y: -136px;
        margin-right: 8px;
      }

      .txt1 {
        margin-top: 2px;
        margin-bottom: 3.5px;
      }
    }

    .right {
      .w-button {
        width: 69px;
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        padding-bottom: 2px;
        border: 0;
        border-radius: 2px;
        color: #fff;
        background-color: #b4282d;
      }
    }
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
}
</style>