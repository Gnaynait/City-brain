<!--
 * @Author: sally
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 16:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\left\MenuItem.vue
-->
<template>
  <div class="menu" :style="slideOn && 'overflow-y: auto'">
    <List :list="list" v-if="slideOn" />
    <SubList :list="list" v-else />
  </div>
</template>

<script>
import SubList from "./SubNode";
import List from "./BigNode";
export default {
  components: {
    List,
    SubList,
  },
  props: {
    slideOn: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: calc(100% - 0.8rem);
  position: relative;
}
</style>
