<template>
  <div class="main-content">
    <template v-for="(node, index) in tabArr">
      <Render :node="node"  v-show="node.name === currentView.name"/>
    </template>
  </div>
</template>

<script>
import pageMixins from "@/mixins/pageMixins";
import Render from "../../ModRender";
export default {
  mixins: [pageMixins],
  components: {
    Render,
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: calc(100% - 0.56rem);
  padding: 0.16rem;
}
</style>
