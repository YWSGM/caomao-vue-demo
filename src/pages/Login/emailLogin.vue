<template>
  <div class="container">
    <Header />
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <div class="email-form">
      <div class="input-item bottom-border-1px">
        <input type="text" placeholder="邮箱账号" v-model="email" />
      </div>
      <div class="input-item">
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div>
        <div class="ad links">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
        <div>
          <Button
            :style="{color: `rgba(255,255,255,0.5)`, fontSize: `15px`}"
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
}
</style>