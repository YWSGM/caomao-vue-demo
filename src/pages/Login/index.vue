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
    <Header />
    <LogoWrap :size="{width:134,height:45}" />
    <div class="btnWrap">
      <Button @click="$router.push('/phoneLogin')" type="danger" size="large" class="mt-16">
        <div class="s">
          <i class="icon icon-phone mr-8"></i>
          <p>手机号快捷登录</p>
        </div>
      </Button>
      <Button @click="$router.push('/emailLogin')" type="danger" size="large" plain>
        <div class="s">
          <i class="icon icon-email mr-8"></i>
          <p>邮箱账号登录</p>
        </div>
      </Button>
    </div>
    <div class="thirdWrap s">
      <div class="itemWrap s">
        <i class="icon icon-weixin"></i> 微信
      </div>
      <div class="itemWrap s">
        <i class="icon icon-qq"></i> QQ
      </div>
      <div class="itemWrap s">
        <i class="icon icon-weibo"></i> 微博
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import Header from "./header";
import LogoWrap from "./logoWrap";
export default {
  components: { Button, Header, LogoWrap },
  data() {
    return {
      defaultBannerSeen: true
    };
  },
  computed: {},
  methods: {}
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

.s {
  display: flex;
  align-items: center;
  justify-content: center;
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

.mr-8 {
  margin-right: 8px;
}

.icon-phone {
  background-image: url('./login-btn-icons.png');
  background-size: 20px 145px;
  background-position-y: -25px;
  height: 20px;
  width: 20px;
}

.icon-email {
  background-image: url('./login-btn-icons.png');
  background-size: 20px 145px;
  background-position-y: 0px;
  height: 20px;
  width: 20px;
}

.icon-weixin {
  background-image: url('./weixin.png');
  background-size: 98%;
  background-position-y: 0px;
  height: 20px;
  width: 20px;
}

.icon-qq {
  background-image: url('./qq.png');
  background-size: 98%;
  background-position-y: 0px;
  height: 20px;
  width: 20px;
}

.icon-weibo {
  background-image: url('./weibo.png');
  background-size: 98%;
  background-position-y: 0px;
  height: 20px;
  width: 20px;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #f2f5f4;

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

  .btnWrap {
    width: 335px;
    margin: 0 auto;

    .mt-16 {
      margin-bottom: 16px;
    }

    .mint-button {
      height: 47px;
      font-size: 14px;
    }
  }

  .thirdWrap {
    position: absolute;
    width: 100%;
    bottom: 40px;
    color: #8c8c8c;

    .itemWrap {
      height: 20px;
      padding: 0 20px;
      border-right: 1px solid #8c8c8c;

      .icon {
        margin-right: 2.5px;
      }

      &:last-child {
        border: none;
      }
    }
  }
}
</style>