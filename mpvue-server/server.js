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
koaRouter.get('/home', (ctx, next) => {
  //获取调用接口传入的参数
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas
})
koaRouter.get('/personal', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas.classify
})
koaRouter.get('/classify', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas
})
koaRouter.get('/search', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas.search
})
koaRouter.get('/shopcar', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas
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
