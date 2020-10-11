<template>
  <div class="left-menu" :style="leftWidth">
    <TitleBtn v-model="slideOn" :title="currentList.title" />
  </div>
</template>

<script>
import TitleBtn from "./TitleBtn";
export default {
  props: {
    currentList: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    TitleBtn,
  },
  data() {
    return {
      slideOn: true,
    };
  },
  computed: {
    leftWidth() {
      return { width: this.slideOn ? "2.24rem" : "0.52rem" };
    },
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
  transition: 0.5s;
}
</style>
