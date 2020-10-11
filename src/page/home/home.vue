<template>
  <div class="wrap">
    <TopBar />
  </div>
</template>

<script>
import TopBar from "@/views/topbar/Topbar.vue";
export default {
  components: {
    TopBar,
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
