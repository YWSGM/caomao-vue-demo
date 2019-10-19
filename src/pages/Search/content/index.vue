<template>
  <div class="content-list">
    <ul class="content-ul">
      <li class="content-item" v-for="(list,index) in lists" :key="index" @click="goto('/seadetail')">
        <div class="left">
          <div class="top">
            <img :src="list.photo" alt />
            <span>{{list.name}}</span>
          </div>
          <p>{{list.text}}</p>
        </div>
        <div class="right">
          <img :src="list.url" alt />
        </div>
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
	props:['lists'],
	 methods: {
    _initBscroll() {
      let scroll = new BScroll('.content-list')
		},
		goto(path){
      this.$router.replace(path)
    }
  },
};
</script>
<style lang="stylus">
.content-list
  padding-top 100px
  margin-top 10px
  width 100%
  height 500px
  .content-ul
    padding-top 30px
    width 100%
    .content-item
      margin-top 10px
      width 100%
      height 140px
      background-color #fff
      display flex
      .left
        padding-top 30px
        width 200px
        padding 10px
        .top
          margin-top 20px
          margin-bottom 22px
          display flex
          img
            width 30px
            height 30px
            vertical-align middle
            border-radius 50%
          span
            vertical-align middle
            line-height 30px
            padding-left 6px
      .right
        padding-right 10px
        padding-top 20px
        margin-left 32px
        img
          width 100px
          height 100px
          border-radius 10px
</style>