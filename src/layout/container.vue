<!--
 * @Author: your name
 * @Date: 2020-10-14 10:09:59
 * @LastEditTime: 2020-10-14 14:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\layout\container.vue
-->
<template>
  <div class="container">
    <div class="title-container" v-if="hasTitle" :style="styleObj">
      <div class="title-bar">
        <span>{{ hasTitle }}</span>
        <slot name="header"></slot>
      </div>
      <div class="title-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="nom-container" v-else :style="styleObj">
      <slot></slot>
    </div>
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
      default: '',
    },
  },
  created() {
    console.log(this.$slots)
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.05);
  font-size: 0.16rem;
  .title-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 0.2rem;
    display: flex;
    flex-flow: column nowrap;

    .title-bar {
      width: 100%;
      height: 0.44rem;
      display: flex;
      flex-flow: row nowrap;
      border-bottom: 1px solid #d5dae4;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.16rem;
      > span {
        font: bold 0.16rem/0.44rem '微软雅黑';
        color: #000022;
      }
    }
    .title-content {
      width: 100%;
      height: calc(100% - 0.6rem);
      padding-bottom: 0.2rem;
      // background: rebeccapurple;
    }
  }
  .nom-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0.16rem;
  }
}
</style>
