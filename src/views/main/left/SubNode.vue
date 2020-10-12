<!--
 * @Author: sally
 * @Date: 2020-10-12 15:23:21
 * @LastEditTime: 2020-10-12 17:44:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\left\BigNode.vue
-->
<template>
  <div class="list">
    <div
      v-for="(item, index) in selfList"
      class="block"
      :key="index"
      :style="blockStyle(item)"
      @mouseover="itemOver(item)"
      @mouseleave="itemOut(item)"
    >
      <div class="block-item">
        <div
          class="icon"
          :class="`iconfont ${item.icon || 'icon--FaceBatchClusterNode'}`"
          v-if="height === 0"
          :title="item.title"
        ></div>
        <span v-if="height !== 0"> {{ item.title }}</span>
        <i v-if="item.children && height !== 0" class="close"></i>
        <transition name="slide-fade">
          <div
            v-if="item.children && item.expand"
            class="child-wrap"
            :style="lineStyle"
          >
            <List :list="item.children" :height="height + 1" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    list: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
  data() {
    return {
      selfList: [],
    };
  },
  computed: {
    blockStyle() {
      return function(item) {
        return { background: item.expand ? "#2c3950" : "#262f3f" };
      };
    },
    lineStyle() {
      return this.height
        ? { left: `${(this.height * 160) / 100}rem` }
        : { left: "0.52rem" };
    },
  },
  name: "List",
  methods: {
    itemOver(item) {
      item.children && (item.expand = true);
    },
    itemOut(item) {
      item.children && (item.expand = false);
    },
    init() {
      this.selfList = this.list.map((n) => ({ ...n, expand: false }));
    },
  },

  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-5px);
  opacity: 0;
}
.list {
  font: 0.18rem "微软雅黑";
  color: #cdd4e0;
  display: flex;
  flex-flow: column nowrap;
  transition: 2s;
  .block {
    transition: all 0.3s ease;
    position: relative;
  }
  .block-item {
    height: 0.64rem;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: #2c3950;
      color: #ffffff;
      font-weight: bold;
    }
    > span {
      flex: 1;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-left: 0.24rem;
    }
    > i {
      width: 0.16rem;
      height: 0.16rem;
      display: block;
      transition: 0.2s;
      margin-right: 0.2rem;
    }
    .open {
      background: url("~@/assets/images/icon_16_next.png");
      transform: rotate(0deg);
    }
    .close {
      background: url("~@/assets/images/icon_16_next.png");
      transform: rotate(-90deg);
    }
    .icon {
      font-size: 0.24rem;
      font-weight: normal !important;
      text-align: center;
    }
    .child-wrap {
      position: absolute;
      top: 0;
      left: 0.52rem;
      width: 1.6rem;
      z-index: 999;
    }
  }
}
</style>
