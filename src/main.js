/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-14 16:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\main.js
 */
import "@/assets/style/index.less";
import "@/assets/theme/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Mixin from "@/mixins";
// import "./styles.scss";
import "./assets/iconfont/iconfont.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.mixin(Mixin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
