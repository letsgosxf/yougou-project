// common/http.interceptor.js

// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html
const install = (Vue, vm) => {
  // 此为自定义配置参数，具体参数见上方说明
  Vue.prototype.$u.http.setConfig({
    baseUrl: "https://api-hmugo-web.itheima.net/api/public/v1",
    loadingText: "努力加载中~",
    loadingTime: 1000,
    // 设置自定义头部content-type
    // header: {
    // 	'content-type': 'xxx'
    // }
    // ......
  });
};

export default {
  install,
};
