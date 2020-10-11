<template>
  <div class="main">
    <Left />
  </div>
</template>

<script>
import Left from "./left/LeftMenu";
export default {
  components: {
    Left,
  },
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
}
</style>
