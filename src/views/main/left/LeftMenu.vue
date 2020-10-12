<!--
 * @Author: sally
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-12 17:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\left\LeftMenu.vue
-->
<template>
  <div class="left-menu" :style="leftWidth">
    <TitleBtn v-model="slideOn" :title="currentList.title" />
    <MenuItem :list="currentList.children" :slideOn="slideOn" />
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
      return { width: this.slideOn ? "2.7rem" : "0.52rem" };
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
  width: 2.7rem;
  height: 100%;
  background: #262f3f;
  display: flex;
  flex-flow: column nowrap;
  transition: 0.2s;
  position: relative;
  // overflow: hidden;
}
</style>
