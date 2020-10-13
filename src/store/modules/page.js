/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 17:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\store\modules\page.js
 */
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
export default {
  state: {
    mainCurrent: null,
    currentPage: null,
    allList: null,
    tabArr: [],
    currentView: null
  },
  mutations: {
    setAllList(state, val) {
      state.allList = val;
    },
    setMainCurrent(state, val) {
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
        // console.log(state.tabArr.findIndex((n) => n.name === state.currentView.name));
        state.tabArr = state.tabArr.filter(n => n.name !== val.name);
      }
    }
  },
  actions: {
    async GET_MENU_LIST({ commit }) {
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
