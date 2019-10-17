<template>
  <div class="container">
    <Header />
    <logoWrap :size="{width:96,height:32}" :style="{padding: '28px 0 64px 0'}" />
    <PhoneCodeForm />
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
import PhoneCodeForm from '../../components/PhoneCodeForm/index'
export default {
  components: {
    Header,
    logoWrap,
    PhoneCodeForm
  },
  data() {
    return {
 
    };
  },
};
</script>
<style lang="stylus" scoped>
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
  .foot {
    margin-top: 28px;
    font-size: 14px;
  }
}
</style>