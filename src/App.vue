<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { LOGIN_WITH_TOKEN } from "./store/mutation-type";
export default {
  mounted() {
    const token = window.localStorage.getItem("token");
    console.log(token)
    if (token) {
      this.$store.dispatch(LOGIN_WITH_TOKEN, token);
    }
  }
};
</script>
<style lang="stylus">
dangerColor = #dd1a21;

body, html {
  overflow: hidden;
}

.mint-button--danger {
  background-color: dangerColor;

  &.is-plain {
    color: dangerColor;
    border-color: dangerColor;
  }
}
</style>
