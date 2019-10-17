<template>
  <div class="container">
    <Header />
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <div class="email-form">
      <div class="input-item bottom-border-1px">
        <input type="text" placeholder="请输入手机号" v-model="email" />
      </div>
      <div class="input-item ad">
        <input type="password" placeholder="请输入短信验证码" v-model="password" />
        <Button
          type="default"
          plain
          size="small"
          :style="{height: `27px`, padding: '0 6px',marginRight:'8px'}"
        >获取验证码</Button>
      </div>
      <div>
        <div class="ad links">
          <span>遇到问题?</span>
          <span :style="{color: '#333'}">使用密码验证登录</span>
        </div>
        <div>
          <Button
            :style="{ fontSize: `15px`}"
            @click="$router.push('/emailLogin')"
            type="danger"
            size="large"
          >
            <div class="s">
              <i class="icon icon-email mr-8"></i>
              <p>登录</p>
            </div>
          </Button>
        </div>
        <div class="row infos">
          <input type="checkbox" checked>
          <p>
            我同意
            <span class="info-link">《服务条款》</span>
            和
            <span class="info-link">《网易隐私政策》</span>
          </p>
        </div>
      </div>
    </div>
    <div class="s foot">
      <span class="s" @click="$router.push('/login')">
        <p>其他登录方式</p>
        <i class="icon icon-arrow-right" :style="{marginLeft: `2px`}"></i>
      </span>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import logoWrap from "./logoWrap";
import { Button } from "mint-ui";
export default {
  components: {
    Header,
    logoWrap,
    Button
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
<style lang="stylus" scoped>
::-webkit-input-placeholder { /* WebKit browsers */
  color: #bdbdbd;
  font-size: 16px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #bdbdbd;
  font-size: 16px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #bdbdbd;
  font-size: 16px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.s {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  display: block;
}

.icon-arrow-right {
  background-image: url('./right-arrow.png');
  background-size: 100%;
  width: 14px;
  height: 14px;
}

.container {
  width: 100vw;
  height: 100vh;

  .email-form {
    width: 335px;
    margin: 0 auto;
    color: #999;
    font-size: 14px;

    .input-item {
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #c5cddb;
      display: flex;
      align-items: center;

      input {
        height: 100%;
        width: 80;
        outline: none;
      }
    }

    .links {
      margin: 21px 0;
    }
  }

  .foot {
    margin-top: 28px;
    font-size: 14px;
  }

  .infos {
    font-size 14px;
    .info-link {
      color: #007aff;
    }
  }
}
</style>