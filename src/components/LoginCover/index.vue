<template>
  <div class="cover">
    <LogoWrap :size="{width:134,height:45}" />
    <div class="btnWrap">
      <Button @click="onSwitch('phoneCodeForm')" type="danger" size="large" class="mt-16">
        <div class="s">
          <i class="icon icon-phone mr-8"></i>
          <p>手机号快捷登录</p>
        </div>
      </Button>
      <Button @click="onSwitch('emailForm')" type="danger" size="large" plain>
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
import LogoWrap from "../../pages/Login/logoWrap";
export default {
  components: {
    LogoWrap,
    Button
  },
  props: {
    onSwitch: {
      required: true,
      type: Function
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

.cover {
  width: 100%;
  height: 100%;

  .mr-8 {
    margin-right: 8px;
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