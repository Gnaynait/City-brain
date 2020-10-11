<template>
  <div class="wrap">
    <TopBar />
    <Main />
  </div>
</template>

<script>
import TopBar from "@/views/topbar/Topbar.vue";
import Main from "@/views/main/main.vue";

export default {
  components: {
    TopBar,
    Main,
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: skyblue;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
