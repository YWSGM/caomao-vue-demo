<template>
  <div class="container">
    <div v-if="current" class="content">
      
      <!-- <div class="personTitle">个人中心</div> -->
      
      <div class="user">
        <img src="./img/1.png" alt="">
        <span>用户名:</span>
        <span>{{current.name}}</span>
        <p>{{current.phone}}</p>
      </div>
      <div class="pic">
        <img src="./img/2.png" alt="">
      </div>
      <!-- <div class="phonenum">
        <span>手机号:</span>
        
      </div> -->
      <!-- <button @click="$router.push('/home')" class="home">主页</button> -->
      <button @click="logout" class="logout">退出登陆</button>
    </div>
    <Spinner v-else-if="token" type="fading-circle"></Spinner>
    <div v-else>something wrong</div>
    <Footer/>
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
<style lang="stylus">
.container
  width 100%
  height 100%
  // background-color #C3A76E 
  .content
    width 100%
    height 60%
    .personTitle
      width 40%
      // height 20px
      font-size 25px
      text-align center
      // line-height 20px
      margin 0 auto
      // background-color 
      color gray 
      font-weight 700
    .user
      width 100%
      height 150px
      // margin 30px 0
      font-size 20px
      border 1px solid #f2f2f2
      background-color #C3A76E 
      // text-align center
      line-height 60px
      color gray
      position relative
      img 
        width 60px
        height 60px
        border-radius 50%
        vertical-align middle
        margin-top 25px
        margin-left 12px
      p
        position absolute
        top 45px
        left 70px
    .pic
      width 100%
      height 143px
      img 
        width 100%
        height 100%
    .home
      // margin-top 40px 
      margin-left 10px
      width 90%
      height 40px
      background-color white
      border-radius 8px
      margin-top 190px
      margin-left 19px
      font-size 20px
    .logout
      margin-top 105px
      width 100%
      height 40px
      background-color #EF4F4F
      // border-radius 8px
      font-size 20px
      font-weight 700
      color white
      border none 
      text-align center
      border-radius 5px


</style>