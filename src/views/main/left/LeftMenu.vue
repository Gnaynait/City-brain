<template>
  <div class="left-menu">
    <TitleBtn v-model="slideOn" :title="currentTit" />
  </div>
</template>

<script>
import TitleBtn from "./TitleBtn";
export default {
  components: {
    TitleBtn,
  },
  data() {
    return {
      slideOn: true,
      currentTit: "智能调度",
    };
  },
  watch: {
    slideOn(val) {
      console.log("变变变", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.left-menu {
  width: 2.24rem;
  height: 100%;
  background: #262f3f;
  display: flex;
  flex-flow: column nowrap;
}
</style>
