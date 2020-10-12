<!--
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-12 16:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\left\LeftMenu.vue
-->
<template>
  <div class="left-menu" :style="leftWidth">
    <TitleBtn v-model="slideOn" :title="currentList.title" />
    <MenuItem :list="currentList.children" />
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
import TitleBtn from "./TitleBtn";
export default {
  props: {
    currentList: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    TitleBtn,
    MenuItem
  },
  data() {
    return {
      slideOn: true
    };
  },
  computed: {
    leftWidth() {
      return { width: this.slideOn ? "2.24rem" : "0.52rem" };
    }
  },
  watch: {
    slideOn(val) {
      console.log("变变变", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.left-menu {
  width: 2.24rem;
  height: 100%;
  background: #262f3f;
  display: flex;
  flex-flow: column nowrap;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
}
</style>
