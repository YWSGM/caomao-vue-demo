//引入koa
let Koa = require('koa')
//引入koa-router
let KoaRouter = require('koa-router')
//实例化koa
let koa = new Koa()
//实例化koa-router
let KoaRouter = new KoaRouter()
//引入datas数据
let datas= require('./datas/data.json')
var Fly=require("flyio/src/node")
var fly=new Fly;
// 定义接口返回数据
KoaRouter.get('/home', () => {

})
KoaRouter.get('/classify', () => {
  
})
KoaRouter.get('/personal', () => {
  
})
KoaRouter.get('/search', () => {
  
})
KoaRouter.get('/shopcar', () => {
  
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
