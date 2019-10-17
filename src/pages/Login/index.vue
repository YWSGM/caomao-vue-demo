<template>
  <div class="container">
    <Advertisement />
    <Header />
    <div class="yield">
      <Login v-if="yieldOut === 'email'" :onSwitch="switchLoginComponent" formMode="email" />
      <Login
        v-else-if="yieldOut === 'password'"
        :onSwitch="switchLoginComponent"
        formMode="password"
      />
      <Login v-else-if="yieldOut === 'code'" :onSwitch="switchLoginComponent" formMode="code" />
      <LoginCover v-else :onSwitch="switchLoginComponent" />
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
      yieldOut: "password"
    };
  },
  methods: {
    switchLoginComponent(name) {
      if (["email", "password", "code", "cover"].includes(name)) {
        this.yieldOut = name;
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