<template>
  <div>
    test
  </div>
</template>

<script>
export default {
  props: {
    param: {
      type: String
    }
  },
  created() {
    console.log(this.param);
  }
};
</script>

<style lang="scss" scoped></style>
