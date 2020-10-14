/*
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-14 19:34:33
 * @LastEditors: Please set LastEditors
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
    },
    currentHover() {
      return this.$store.state.page.currentHover;
    }
  }
};
