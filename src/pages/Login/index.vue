<template>
  <div class="container">
    <MtHeader class="down-banner"></MtHeader>
    <MtHeader></MtHeader>
  </div>
</template>

<script>
import { Header } from "mint-ui";
export default {
  components: {
    MtHeader: Header
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #eee;

  .down-banner {
    background-color: #333;
  }
}
</style>