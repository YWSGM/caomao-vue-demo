<template>
  <div class="box">
    <Header />
    <div class="box1">
      <div class="parent">
        <div class="goback">
          <span class="back" @click="goBack('/search/searchrecommend')">《</span>
          <span class="iconfont icon-fen_xiang"></span>
        </div>
        <div class="detail">
          <div class="searchname">
            <div class="photo">
              <img src="./1.jpg" alt />
            </div>
            <div class="text">网易云课堂:末末</div>
          </div>
          <div class="title">
            <span>一次吃到两种好吃又养人的秋冬补品</span>
          </div>
          <div class="line"></div>
          <div class="bigimg">
            <img src="./2.jpg" alt />
          </div>
          <div class="bodytext">
            <p>☆我的意见:</p>
            <p>自从之前安利了黑芝麻丸和红豆薏米丸后，这两款都成了严选爆品，好评率都在99%以上。周围同事买了也说好吃，吃完还觉得不够吃。</p>
            <p>秋冬季节吃这种丸子再合适不过了。刚好最近推出了组合装，3瓶黑芝麻加3瓶红豆薏米丸，6瓶才卖138元，建议大家果断囤起来。</p>
            <p>@菲****：三罐都快吃完了才想起来拍照，买过四个不同品牌的芝麻丸，这款味道最好。</p>
            <p>@ 1****1：胡庆余堂的品质绝对值得信赖！挺大一颗，还没打开包装就闻到芝麻香啦，软软糯糯的非常好吃，也不是很甜，赞！</p>
            <p>@1****5：已经买了不知道多少盒了，一开始三盒三盒买，后来干脆六盒六盒买，吃不腻。当零嘴吃，也可以是早餐营养品。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.$nextTick(() => {
      let scroll = new BScroll(".box1");
    });
  },
  methods: {
    goBack(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style lang="stylus">
.box
  height 800px
  width 100%
  .box1
    width 100%
    height 500px
    padding-top 40px
    .parent
      padding-top 40px
      .goback
        width 100%
        height 25px
        display flex
        justify-content space-between
        padding-left 10px
        padding-right 10px
        box-sizing border-box
        .back
          position relative
          padding-top 4px
          display block
          width 25px
          height 25px
          box-sizing border-box
          margin-bottom 10px
          background-color #ccc
          border-radius 50%
          text-align center
          margin-right 20px
          padding-right 6px
      .detail
        height 800px
        width 100%
        .searchname
          // margin-top 40px
          border-top 1px solid #f5f5f5
          height 30px
          width 100%
          // background-color skyblue
          padding-top 10px
          padding-left 10px
          display flex
          .photo
            width 30px
            height 30px
            border-radius 50%
            // background-color green
            overflow hidden
            display inline-block
            float left
            img
              width 30px
              height 30px
          .text
            width 150px
            height 30px
            display inline-block
            // margin-bottom 10px
            line-height 30px
            float left
            margin-left 10px
            font-size 14px
        .title
          font-size 20px
          height 60px
          width 100%
          // background-color pink
          line-height 60px
        .line
          height 1px
          width 40px
          background-color #bc9162
          margin-left 10px
        .bigimg
          width 100%
          height 200px
          margin-top 40px
          text-align center
          img
            width 95%
            height 200px
        .bodytext
          width 100%
          height 100%
          padding 0 10px
          p
            width 95%
            margin-top 15px
            color #333333
            font-size 16px
</style>