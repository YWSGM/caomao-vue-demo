<template>
  <div class="form">
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
            <p>登录</p>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import { LOGIN_WITH_EMAIL } from "../../store/mutation-type";
const emailPattern = /^\w{1,63}@(163.com|126.com|yeah.net|188.com|vip.163.com)$/;
export default {
  components: {
    Button
  },
  data() {
    return {
      email: "w18842606347@163.com",
      password: "qwer1234",
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
        this.$store.dispatch(LOGIN_WITH_EMAIL, {
          email: this.email,
          password: this.password
        });
      } else {
        window.console.error("you cant submit");
      }
    },
    checkCurrent() {
      if(this.current){
        this.$router.replace("/personal");
      }
    }
  },
  mounted() {
    this.checkCurrent();
  },
  watch:{
    current(){
      console.log('emailddd')
      this.checkCurrent();
    },
  },
  computed: {
    current() {
      return this.$store.state.Current.current;
    },
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