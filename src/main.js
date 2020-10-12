import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.less";
import ElementUI from "element-ui";
import Mixin from "@/mixins";
import "./styles.scss";
import "./assets/iconfont/iconfont.css"
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.mixin(Mixin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
