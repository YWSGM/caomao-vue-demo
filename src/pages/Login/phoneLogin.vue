<template>
  <div class="container">
    <Header />
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <div class="form">
      <div class="input-item bottom-border-1px">
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
      <p class="error-msg">{{error}}</p>
      <div>
        <div class="ad links">
          <span>遇到问题?</span>
          <span :style="{color: '#333'}">使用密码验证登录</span>
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
import Checkbox from "../../components/Checkbox/index";
import { Button } from "mint-ui";
export default {
  components: {
    Header,
    logoWrap,
    Button,
    Checkbox
  },
  data() {
    return {
      phone: "18842606347",
      code: "444444",
      isAllowAgreements: true,
      hideError: true,
      countdown: 0
    };
  },
  computed: {
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
  updated() {
    window.console.log("isAllowAgreements", this.isAllowAgreements);
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
  },
  methods: {
    changeAllowAgreements() {
      const nextValue = !this.isAllowAgreements;
      this.isAllowAgreements = nextValue;
    },
    sendCode() {
      this.countdown = 3;
    },
    submit() {
      if (!this.error && this.isAllowAgreements) {
        window.console.log("you can submit");
      }else{
        window.console.error("you cant submit");
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

  .form {
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

  .agreements {
    font-size: 14px;
    margin-top: 16px;

    .info-link {
      color: #007aff;
    }
  }
}
</style>