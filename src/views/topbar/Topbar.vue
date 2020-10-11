<template>
  <div class="top-bar">
    <Logo />
    <UseFor />
  </div>
</template>

<script>
import Logo from "./MainLogo";
import UseFor from "./usefor";
export default {
  components: {
    Logo,
    UseFor,
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 0.8rem;
  background: blue;
  display: flex;
  flex-flow: row nowrap;
  background: #171d29;
  align-items: center;
}
</style>
