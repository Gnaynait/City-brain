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
    <div class="nom-container flexcol" v-else-if="col.length > 1" :style="styleObj">
      <div
        class="col-container"
        v-for="(percent, index) in col"
        :key="index"
        :style="colStyle(percent)"
      >
        <slot :name="'col' + (index+1)"></slot>
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
    col: {
      type: Array,
      default: () => [100],
    },
    hasTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    colStyle() {
      return (p) => {
        return { width: p + "%" };
      };
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
  font-size: 0.16rem;
  overflow-y: auto;
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
        font: bold 0.16rem/0.44rem "微软雅黑";
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
    .col-container{
      height: 100%;
      border-right: 1px #eeeeee solid;
      display: flex;
      flex-flow: column nowrap;
      box-shadow: 2px 0px 4px #eeeeee;
      padding-left: 20px;
      &:last-child{
        border: 0;
        box-shadow:0 0 0
      }
      &:first-child{
        padding:0
      }
    }
  }
  .flexcol{
    display: flex;
    flex-flow: row nowrap;
    
  }
}
</style>
