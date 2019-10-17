//引入koa
let Koa = require('koa')
//引入koa-router
let KoaRouter = require('koa-router')
//实例化koa
let koa = new Koa()
//实例化koa-router
let koaRouter = new KoaRouter()
//引入datas数据
let datas= require('./datas/data.json')
// 定义接口返回数据
//首页分类的接口
koaRouter.get('/homelist', (ctx, next) => {
  if(ctx.query.id === 'homelist'){
    ctx.body = datas.homelist
  }
  
})
//分类组件列表
koaRouter.get('/classify', (ctx, next) => {
  if(ctx.query.id === 'classify'){
    ctx.body = datas.classify
  }
})
//识物组件列表
koaRouter.get('/search', (ctx, next) => {
  if(ctx.query.id === 'search'){
    ctx.body = datas.search
  }
})
//商品详情信息接口
koaRouter.get('/goods', (ctx, next) => {
  if(ctx.query.id === 'goods'){
    ctx.body = datas.goods
  }
})


//声明使用所有的路由及路由的相关的所有的方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())


//监听端口，启动服务器
koa.listen('4000', () => {
  console.log('服务器启动了')
  console.log('服务器的地址为:http://localhost:4000')
})
