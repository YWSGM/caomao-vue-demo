import ajax from './ajax'
const BAES = '/api'
//获取首页分类
export const reqHomelist = (id)=>ajax.get(BAES+`/homelist?id=${id}`)
//获取识物页列表
export const reqSearchlist = (id)=>ajax.get(BAES+`/search?id=${id}`)
//获取分类页分类
export const reqClassfiy = (id)=>ajax.get(BAES + `/classify?id=${id}`)
//获取商品
export const reqGoods = (id)=>ajax.get(BAES+`/goods?id=${id}`)
