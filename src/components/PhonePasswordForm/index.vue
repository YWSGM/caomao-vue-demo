<template>
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
      <p class="error-msg" v-show="!hideError">{{error}}</p>
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
</template>

<script>
export default {

}
</script>

<style>

</style>