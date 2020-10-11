<template>
  <div class="tit-btn">
    <span>{{ title }}</span>
    <ol @click="ChangeHandler"></ol>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.mod = val;
    },
    mod: {
      handler(val) {
        this.$emit("input", val);
      },
      immediate: true
    }
  },
  data() {
    return {
      mod: this.value
    };
  },
  methods: {
    ChangeHandler() {
      this.mod = !this.mod;
    }
  }
};
</script>

<style lang="scss" scoped>
.tit-btn {
  width: 100%;
  height: 0.8rem;
  color: #ffffff;
  text-align: center;
  font: 0.18rem "微软雅黑";
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  > span {
    margin-left: 0.4rem;
  }
  > ol {
    width: 0.2rem;
    height: 0.2rem;
    background: url("~@/assets/images/icon_nag_pack up.png");
    margin-right: 0.16rem;
    cursor: pointer;
  }
}
</style>
