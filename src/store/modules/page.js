/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-14 19:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\store\modules\page.js
 */
import { setSession, getSession } from "@/utils/util";
import { resourceAction } from "@/api/manage";
const hasView = (list, name) => list.map(n => n.name).includes(name);
const getHome = list => {
  for (const node of list) {
    if (node.home) {
      return node;
    } else {
      if (node.children) {
        return getHome(node.children);
      } else {
        return false;
      }
    }
  }
};
const ORG_TEMP = {
  mainCurrent: null,
  currentPage: null,
  allList: null,
  tabArr: [],
  currentView: null,
  currentHover:null,
};

const ObState = (temp = ORG_TEMP) =>
  new Proxy(temp, {
    set(obj, prop, value) {
      setSession("menu", { ...obj, [prop]: value });
      return Reflect.set(...arguments);
    }
  });
const state = ObState(getSession("menu"));
export default {
  state,
  mutations: {
    setAllList(state, val) {
      state.allList = val;
    },
    setCurrentHover(state,val){
      console.log("SSSS",val);
      state.currentHover=val
    },
    setMainCurrent(state, val) {
      if (state.mainCurrent && state.mainCurrent.name === val.name) return;
      state.mainCurrent = val;
      state.tabArr = [];
      const home = getHome(val.children);
      if (home) {
        state.tabArr = [home];
        state.currentView = home;
      } else {
        alert("没有设置首页");
        throw Error("没有设置首页");
      }
    },
    setCurrentView(state, val) {
      state.currentView = val;
    },
    addView(state, val) {
      hasView(state.tabArr, val.name) || state.tabArr.push(val);
      state.currentView = val;
    },
    changeCurrentView(state, val) {
      state.currentView = val;
    },
    removeView(state, val) {
      if (hasView(state.tabArr, val.name)) {
        if (val.name === state.currentView.name) {
          const previous =
            state.tabArr[
              state.tabArr.findIndex(n => n.name === state.currentView.name) - 1
            ];
          state.currentView = previous;
        }
        state.tabArr = state.tabArr.filter(n => n.name !== val.name);
      }
    }
  },
  actions: {
    async GET_MENU_LIST({ commit }) {
      if (getSession("menu")) return Promise.resolve(true);
      try {
        const res = await resourceAction("/mock/menu.json");
        commit("setAllList", res);
        commit("setMainCurrent", res[0]);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
