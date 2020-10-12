<!--
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-12 16:29:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\main.vue
-->
<template>
  <div class="main">
    <LeftMenu :currentList="currentMain" />
    <!-- <div v-for="(item, index) in currentMain.children" :key="index">
      {{ item.title }}2
    </div> -->
  </div>
</template>

<script>
import LeftMenu from "./left/LeftMenu";
import pageMixin from "@/mixins/pageMixins";
export default {
  components: {
    LeftMenu
  },
  mixins: [pageMixin]
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background: rebeccapurple;
  overflow: hidden;
}
</style>
