<template>
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
</template>

<script>
export default {
  data() {
    return {
      defaultBannerSeen: true
    };
  }
};
</script>
<style lang="stylus" scoped>
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

.defaultBanner {
  background-color: #333;
  width: 100%;
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
</style>