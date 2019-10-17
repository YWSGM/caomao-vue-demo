<template>
  <div class="container">
    <Advertisement />
    <Header />
    <div class="yield">
      <LoginCover />
    </div>
  </div>
</template>

<script>
import Header from "./header";

import Advertisement from "../../components/Advertisement/index";
import LoginCover from "../../components/LoginCover/index";
export default {
  components: { Advertisement, LoginCover, Header },
  data() {
    return {};
  },
  computed: {},
  methods: {}
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