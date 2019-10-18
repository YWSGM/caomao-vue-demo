<template>
  <div class="form">
    <div class="input-item ad">
      <input type="text" placeholder="请输入手机号" v-model="phone" />
    </div>
    <div class="input-item ad">
      <input type="text" placeholder="请输入短信验证码" v-model="code" />
      <Button
        type="default"
        plain
        size="small"
        :style="{height: `27px`, padding: '0 6px',marginRight:'8px'}"
        :disabled="countdown>0"
        @click="sendCode"
      >{{ countdown ? `${countdown}秒后重发` : '获取验证码' }}</Button>
    </div>
    <p class="error-msg" v-show="!hideError">{{error}}</p>
    <div>
      <div class="ad links">
        <span>遇到问题?</span>
        <span :style="{color: '#333'}" @click="onSwitchForm('password')">使用密码验证登录</span>
      </div>
      <div>
        <Button :style="{ fontSize: `15px`}" @click="submit" type="danger" size="large">
          <div class="s">
            <p>登录</p>
          </div>
        </Button>
      </div>
      <div class="row agreements">
        <Checkbox :value="isAllowAgreements" :onChange="changeAllowAgreements" />
        <p :style="{marginLeft:`5px`}">
          我同意
          <span class="info-link">《服务条款》</span>
          和
          <span class="info-link">《网易隐私政策》</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import Checkbox from "../Checkbox/index";
export default {
  components: {
    Button,
    Checkbox
  },
  props: {
    onSwitchForm: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      phone: "1884260347",
      code: "44444",
      isAllowAgreements: true,
      hideError: true,
      countdown: 0
    };
  },
  methods: {
    changeAllowAgreements() {
      const nextValue = !this.isAllowAgreements;
      this.isAllowAgreements = nextValue;
    },
    sendCode() {
      this.hideError = false;
      if (!this.phoneError) {
        this.countdown = 3;
      }
    },
    submit() {
      this.hideError = false;
      if (!this.error && this.isAllowAgreements) {
        window.console.log("you can submit");
      } else {
        window.console.error("you cant submit");
      }
    },
    checkCurrent() {
      if (this.current) {
        this.$router.replace("/home");
      }
    }
  },
  mounted() {
    this.checkCurrent();
  },
  watch: {
    current() {
      this.checkCurrent();
    }
  },
  computed: {
    current() {
      return this.$store.state.Current.current;
    },
    phoneError() {
      if (!this.phone || !/^1\d{10}$/.test(this.phone)) {
        return "手机号格式不对";
      } else {
        return "";
      }
    },
    codeError() {
      if (!this.code || !/^\d{6}$/.test(this.code)) {
        return "验证码格式不对";
      } else {
        return "";
      }
    },
    error() {
      return this.phoneError || this.codeError || "";
    }
  },
  watch: {
    countdown() {
      if (this.countdown > 0) {
        setTimeout(() => {
          const nextCount = this.countdown - 1;
          this.countdown = nextCount;
        }, 1000);
      }
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

.ad {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
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

    input {
      height: 100%;
      flex-grow: 1;
      outline: none;
    }
  }

  .agreements {
    font-size: 14px;
    margin-top: 16px;

    .info-link {
      color: #007aff;
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