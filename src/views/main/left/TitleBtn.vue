<template>
  <div class="tit-btn">
    <span v-if="mod">{{ title }}</span>
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
    animation: in 0.2s linear 0.3s forwards;
    opacity: 0;
  }
  > ol {
    width: 0.2rem;
    height: 0.2rem;
    background: url("~@/assets/images/icon_nag_pack up.png");
    margin: 0.16rem;
    cursor: pointer;
  }
}
@keyframes in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
