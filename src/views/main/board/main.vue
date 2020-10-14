<!--
 * @Author: your name
 * @Date: 2020-10-14 10:09:59
 * @LastEditTime: 2020-10-14 16:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\board\main.vue
-->
<template>
  <div class="main-content">
    <template v-for="(node, index) in tabArr">
      <Render
        :node="node"
        v-show="node.name === currentView.name"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import pageMixins from "@/mixins/pageMixins";
import Render from "../../ModRender";
export default {
  mixins: [pageMixins],
  components: {
    Render
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: calc(100% - 0.56rem);
  padding: 0.16rem;
}
</style>
