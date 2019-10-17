<template>
  <div class="login">
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <!-- 动态组件位置 -->
    <div class="yield">
  
        <EmailForm v-if="mode==='email'" />
        <PhonePasswordForm v-else-if="mode==='password'" :onSwitchForm="switchForm" />
        <PhoneCodeForm v-else :onSwitchForm="switchForm" />
    
    </div>
    <div class="s foot">
      <span class="s" @click="onSwitch('cover')">
        <p>其他登录方式</p>
        <i class="icon icon-arrow-right" :style="{marginLeft: `2px`}"></i>
      </span>
    </div>
  </div>
</template>

<script>
import logoWrap from "../../pages/Login/logoWrap";
import EmailForm from "../EmailForm/index";
import PhoneCodeForm from "../PhoneCodeForm/index";
import PhonePasswordForm from "../PhonePasswordForm/index";
export default {
  components: { logoWrap, EmailForm, PhoneCodeForm, PhonePasswordForm },
  props: {
    onSwitch: {
      required: true,
      type: Function
    },
    formMode:{
      required: false,
      type: String,
    },
  },
  mounted(){
    if(this.formMode){
      this.switchForm(this.formMode)
    }
    window.console.log('formprop', this.formMode)
  },
  data() {
    return {
      mode: "password"
    };
  },
  methods: {
    switchForm(mode) {
      if (["email", "password", "code"].includes(mode)) {
        this.mode = mode;
      }
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

.icon {
  display: block;
}

.icon-arrow-right {
  background-image: url('./right-arrow.png');
  background-size: 100%;
  width: 14px;
  height: 14px;
}

.login {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .yield {
    width: 335px;
    height: 290px;
    margin: 0 auto;
  }

  .foot {
    margin-top: 28px;
    font-size: 14px;
  }
}
</style>