<template>
  <div class="container" :style="styleObj">
    <div class="title-bar"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    styleObj: {
      type: Object,
      default: () => {},
    },
    hasTitle: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log(this.$slots);
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.05);
  padding: 0.16rem;
  font-size: 0.16rem;
}
</style>
