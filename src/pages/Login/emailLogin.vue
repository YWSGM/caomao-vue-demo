<template>
  <div class="container">
    <Header />
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <div class="email-form">
      <label class="input-item ad">
        <input
          type="text"
          placeholder="邮箱账号"
          v-model="email"
          @blur="paddingEmail"
          @focus="hideError = true"
        />
        <i class="icon icon-cancal" v-show="email && email.length>0" @click="email = ''"></i>
      </label>
      <label class="input-item ad">
        <input type="password" placeholder="密码" v-model="password" />
        <i class="icon icon-cancal" v-show="password && password.length>0" @click="password = ''"></i>
      </label>
      <p class="error-msg" v-show="!hideError">{{error}}</p>
      <div>
        <div class="ad links">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
        <div>
          <Button
            :style="{color: `rgba(255,255,255,0.5)`, fontSize: `15px`}"
            @click="submit"
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
const emailPattern = /^\w{1,63}@(163.com|126.com|yeah.net|188.com|vip.163.com)$/;
export default {
  components: {
    Header,
    logoWrap,
    Button
  },
  data() {
    return {
      email: "",
      password: "",
      hideError: true
    };
  },
  methods: {
    paddingEmail() {
      if (
        this.email &&
        !/@(163.com|126.com|yeah.net|188.com|vip.163.com)$/.test(this.email)
      ) {
        const front = this.email
          .trim()
          .replace(/\s+/g, "")
          .match(/^[^@]+/);
        this.email = front ? front[0].concat("@163.com") : "";
      }
    },
    submit() {
      this.hideError = false;
      if (!this.error) {
        window.console.log(" you can submit");
      }else{
        window.console.error("you cant submit");
      }
    }
  },
  computed: {
    emailError() {
      if (!this.email) {
        return "请输入账号";
      } else if (!emailPattern.test(this.email)) {
        return "账号格式不正确";
      } else {
        return "";
      }
    },
    passwordError() {
      const minLength = 8;
      const maxLength = 16;
      if (!this.password) {
        return "请输入密码";
      } else if (
        this.password.length < minLength ||
        this.password.length > maxLength
      ) {
        return `密码长度应在${minLength}-${maxLength}位之间`;
      } else if (this.password.match(/\s/)) {
        return "密码内不能有空白符号";
      } else if (!/^\w{8,16}$/.test(this.password)) {
        return "密码只能包含字母数字_";
      } else {
        return "";
      }
    },
    error() {
      return this.emailError || this.passwordError || "";
    }
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

.icon-cancal {
  background-image: url('./cancal.png');
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
      padding-right: 8px;

      input {
        height: 100%;
        width: 80;
        outline: none;
        flex-grow: 1;
      }
    }

    .error-msg {
      margin-top: 8px;
      font-size: 14px;
      color: #dd1a21;
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