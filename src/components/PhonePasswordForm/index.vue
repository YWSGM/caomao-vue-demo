<template>
  <div class="form">
    <label class="input-item ad">
      <input
        type="text"
        placeholder="请输入手机号"
        v-model="phone"
        @focus="hideError = true"
      />
      <i class="icon icon-cancal" v-show="phone && phone.length>0" @click="phone = ''"></i>
    </label>
    <label class="input-item ad">
      <input type="password" placeholder="请输入密码" v-model="password" @focus="hideError = true"/>
      <i class="icon icon-cancal" v-show="password && password.length>0" @click="password = ''"></i>
    </label>
    <p class="error-msg" v-show="!hideError">{{error}}</p>
    <div>
      <div class="ad links">
        <span>注册账号</span>
        <span :style="{color: '#333'}" @click="onSwitchForm('code')">短信快捷登录</span>
      </div>
      <div>
        <Button
          :style="{ fontSize: `15px`}"
          @click="submit"
          type="danger"
          size="large"
        >
          <div class="s">
            <p>登录</p>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
export default {
  components: {
    Button
  },
  props: {
    onSwitchForm: {
      required: true,
      type: Function
    }
  },
  data() {
    return { phone: "", password: "", hideError: true };
  },
  methods: {
    submit() {
      this.hideError = false;
      if (!this.error) {
        window.console.log(" you can submit");
      } else {
        window.console.error("you cant submit");
      }
    }
  },
  computed: {
    phoneError() {
      if (!this.phone || !/^1\d{10}$/.test(this.phone)) {
        return "手机号格式不对";
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
      return this.phoneError || this.passwordError || "";
    }
  }
};
</script>

<style lang="stylus" scoped>
.ad {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-cancal {
  background-image: url('./cancal.png');
  background-size: 100%;
  width: 14px;
  height: 14px;
}

.form {
  width: 335px;
  height: 289px;
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
</style>