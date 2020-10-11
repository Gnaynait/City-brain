<template>
  <div class="top-bar">
    <Logo />
    <UseFor />
    <MainNav />
  </div>
</template>

<script>
import Logo from "./MainLogo";
import UseFor from "./usefor";
import MainNav from "./MainNav";
export default {
  components: {
    Logo,
    UseFor,
    MainNav
  }
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
