<template>
  <div class="container">
    <div v-if="current" class="content">
      <div>个人中心</div>
      <div>
        <span>用户名:</span>
        <span>{{current.name}}</span>
      </div>
      <div>
        <span>手机号:</span>
        <span>{{current.phone}}</span>
      </div>
      <button @click="$router.push('/home')">home</button>
      <button @click="logout">登出</button>
    </div>
    <Spinner v-else-if="token" type="fading-circle"></Spinner>
    <div v-else>something wrong</div>
  </div>
</template>
<script>
import { Spinner } from "mint-ui";
import { LOGOUT_ASYNC } from "../../store/mutation-type";
export default {
  components: { Spinner },

  data() {
    return {
      token: null
    };
  },
  mounted() {
    this.token = window.localStorage.getItem("token");
    this.checkCurrent();
  },
  computed: {
    current() {
      return this.$store.state.Current.current;
    }
  },
  watch:{
    current(newValue){
      if(!newValue){
        this.$router.replace('/home')
      }
    }
  },
  methods: {
    checkCurrent() {
      if (!this.current && !this.token) {
        this.$router.replace("/login");
      }
    },
    logout() {
     window.console.log("登出", this.token);
      this.$store.dispatch(LOGOUT_ASYNC, this.token);
    }
  }
};
</script>
<style lang="stylus"></style>