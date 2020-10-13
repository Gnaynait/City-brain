/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 16:06:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\mixins\pageMixins.js
 */
export default {
  computed: {
    NAVS() {
      return this.$store.state.page.allList;
    },
    currentMain() {
      return this.$store.state.page.mainCurrent;
    },
    tabArr() {
      return this.$store.state.page.tabArr;
    },
    currentView() {
      return this.$store.state.page.currentView;
    }
  }
};
