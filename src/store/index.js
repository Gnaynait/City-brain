/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-12 15:08:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import page from "./modules/page";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page
  },
  getters
});
