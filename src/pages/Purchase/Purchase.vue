<template>
  <div class="box">
    <Header/>
    <div class="head1">
      <div class="imgs">
        <img :src="good.url" alt="">
      </div>
      <div class="text">
        <p class="p1">价格：{{good.price}}</p>
        <p class="p2">已选择：{{arr[highLightIndex]}}  型号</p>
      </div>
    </div>
    <div class="head4">
      尺寸
    </div>
    <div class="head5">
      <div v-for="(item,index) in arr" :key="index">
        <span :class="{active:index===highLightIndex}" @click="changeHighLightIndex(index)">{{item}}</span>
      </div>
    </div>
    <div class="head6">
      数量
    </div>
    <div class="count">
      <Control/>
    </div>
    <div class="shopcardetail">
      <div class="shopcardetailA">返回</div>
      <div class="shopcardetailB">立即购买</div>
      <div class="shopcardetailC">加入购物车</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      good:{} ,
      arr:[],
      isSelected:false,
      highLightIndex:0,
    }
  },
  // name: 'Purchase'
  mounted () {
    console.log(this.$route.query);
    this.good = this.$route.query
    this.arr = this.$route.query.norms.split(',')
    console.log(this.arr);
  },
  methods: {
    changeHighLightIndex(index){
      if(typeof index !== 'number'){
        throw new TypeError('index error')
      }
      console.log('index', index);
      this.highLightIndex = index;
    }
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
.box
  width 100%
  .head1
    width 100%
    height 110px
    // background-color pink
    margin-top 40px
    position relative
    div
      float left
    .imgs 
      width 30%
      img 
        width 110px
        height 110px
    .text
      width 70%
      position absolute
      bottom 13px
      left 40%
      font-size 14px
      .p1
        color red    
  .head2
    width 100%
    height 30px
    line-height 30px
    // background-color skyblue
    padding-left 10px
  .head3
    width 100%
    height 40px
    line-height 40px
    text-align center
    // background-color yellow
    div
      float left
      width 25%
      span 
        padding 7px
        border 1px #000 solid
  .head4  
    width 100%
    height 30px
    // background-color green  
    line-height 30px
    padding-left 10px
    margin-top 15px
  .head5
    width 100%
    height 40px
    // background-color blue
    div
      width 20%
      float left
      height 40px
      line-height 40px
      text-align center
      span  
        padding 7px
        border 1px #000 solid
        &.active
          background-color orange 
  .head6
    width 100%
    height 30px
    line-height 30px
    // background-color orange  
    padding-left 10px 
  .count
    margin-left 14px
  .shopcardetail
    display inline-block
    width 100%
    height 50px
    position fixed
    bottom 0
    z-index 999
    div
      display inline-block
      height 50px
      text-align center
      line-height 50px
    .shopcardetailA
      width 20%
      background-color #fff
      // border-right 1px solid #fff
    .shopcardetailB
      width 40%
      background-color #fff
    .shopcardetailC
      width 40%
      background-color #b4282d
</style>