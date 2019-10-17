<template>
  <div class="container">
    <Advertisement />
    <Header />
    <div class="yield">
      <keep-alive>
        <Login v-if="yieldOut === 'emailForm'" :onSwitch="switchLoginComponent" formMode="emailForm" />
        <LoginCover v-else :onSwitch="switchLoginComponent"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "./header";

import Advertisement from "../../components/Advertisement/index";
import LoginCover from "../../components/LoginCover/index";
import Login from "../../components/Login/index";

export default {
  components: { Advertisement, LoginCover, Header, Login },
  data() {
    return {
      yieldOut: "login"
    };
  },
  methods: {
    switchLoginComponent(name) {
      switch (name) {
        case "login":
          this.yieldOut = "login";
          break;
        case "emailForm":
          this.yieldOut = "emailForm";
          break;
        case "phoneCodeForm":
          this.yieldOut = "phoneCodeForm";
          break;
        case "cover":
          this.yieldOut = "cover";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #f2f5f4;
  display: flex;
  flex-direction: column;

  .yield {
    flex-grow: 1;
  }
}
</style>