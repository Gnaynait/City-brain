import { resourceAction } from "@/api/manage";
export default {
  state: {
    mainCurrent: null,
    currentPage: null,
    allList: null,
    tabArr: []
  },
  mutations: {
    setAllList(state, val) {
      state.allList = val;
    },
    setMainCurrent(state, val) {
      state.mainCurrent = val;
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
