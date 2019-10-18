import ajax from "./ajax";
const BAES = "/api";
//以下id就是传地址的字符串 如 'homelist'
//获取首页分类
export const reqHomelist = id => ajax.get(BAES + `/homelist?id=${id}`);
export const reqHomelisttwo = id => ajax.get(BAES + `/homelisttwo?id=${id}`);
//获取识物页列表
export const reqSearchlist = id => ajax.get(BAES + `/search?id=${id}`);
//获取分类页分类
export const reqClassfiy = id => ajax.get(BAES + `/classify?id=${id}`);
//获取商品
export const reqGoods = id => ajax.get(BAES + `/goods?id=${id}`);
//获取商品
export const reqGood = id => ajax.get(BAES + `/good?id=${id}`);

// 获取搜索默认列表
export const reqHomeSearchList = () =>
  ajax.get("http://m.you.163.com/xhr/search/init.json");

export const loginWithPassword = (phone, password) => {
  const isValidPhone = /^1\d{10}$/.test(phone);
  const isValidPassword = /^\w{8,16}$/.test(password);
  if (!isValidPhone || !isValidPassword) {
    throw new Error("账号或密码格式不正确");
  }
  return ajax.post(`${BAES}/loginWithPassword`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: { phone, password }
  });
};
export const loginWithEmail = (email, password) => {
  const isValidPhone = /^\w{1,32}@163.com$/.test(email);
  const isValidPassword = /^\w{8,16}$/.test(password);
  if (!isValidPhone || !isValidPassword) {
    throw new Error("邮箱或密码格式不正确");
  }
  return ajax.post(`${BAES}/loginWithEmail`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: { email, password }
  });
};
export const loginWithCode = (phone, code) => {
  const isValidPhone = /^1\d{10}$/.test(phone);
  const isValidCode = /^\d{6}$/.test(code);
  if (!isValidPhone || !isValidCode) {
    throw new Error("邮箱或验证码格式不正确");
  }
  return ajax.post(`${BAES}/loginWithCode`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: { phone, code }
  });
};
