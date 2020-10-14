<!--
 * @Author: sally
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 14:07:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\main.vue
-->
<template>
  <div class="main">
    <LeftMenu :currentList="currentMain" />
    <Board />
  </div>
</template>

<script>
import Board from "./board/board";
import LeftMenu from "./left/LeftMenu";
import pageMixin from "@/mixins/pageMixins";
export default {
  components: {
    LeftMenu,
    Board
  },
  mixins: [pageMixin],
  provide() {
    return {
      addTab: this.addTab,
      changeChoice: this.changeChoice
    };
  },
  methods: {
    addTab(item) {
      if (item.children) return;
      this.$store.commit("addView", item);
    },
    changeChoice(item) {
      if (this.currentView.name === item.name) return;
      this.$store.commit("changeCurrentView", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100% - 0.8rem);
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background: #f2f3f7;
  overflow: hidden;
}
</style>
