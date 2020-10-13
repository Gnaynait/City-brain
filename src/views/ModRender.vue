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
}
</style>
