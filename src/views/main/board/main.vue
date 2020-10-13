<template>
  <div class="main">
    <StringCmp :cmp="url" />
  </div>
</template>

<script>
import pageMixins from "@/mixins/pageMixins";
import StringCmp from "../../../components/StringCmp";
export default {
  mixins: [pageMixins],
  components: {
    StringCmp
  },
  computed: {
    url() {
      return `${this.currentView.path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 500px;
  background: steelblue;
}
</style>
