<!--
 * @Author: your name
 * @Date: 2020-10-14 10:09:59
 * @LastEditTime: 2020-10-14 16:28:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\ModRender.vue
-->
<template>
  <div class="render">
    <StringCmp :cmp="node.path" v-if="frontMod" />
    <iframe
      v-else
      :src="node.path"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import StringCmp from "@/components/StringCmp";
export default {
  props: {
    node: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    StringCmp
  },
  computed: {
    frontMod() {
      return !this.node.type || this.node.type === "mod";
    }
  }
};
</script>

<style lang="scss" scoped>
.render {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
}
</style>
