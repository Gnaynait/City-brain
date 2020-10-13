/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 18:01:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.less";
import ElementUI from "element-ui";
import Mixin from "@/mixins";
import "./styles.scss";
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
