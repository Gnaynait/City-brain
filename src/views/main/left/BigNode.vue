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
    >
      <div
        class="block-item"
        :style="listStyle(height)"
        @click="itemClick(item)"
      >
        <div
          class="icon"
          :class="`iconfont ${item.icon || 'icon--FaceBatchClusterNode'}`"
          v-if="height === 0"
        ></div>
        <div class="point" v-if="height !== 0 && !item.children"></div>
        <span> {{ item.title }}</span>
        <i v-if="item.children" :class="item.expand ? 'open' : 'close'"></i>
      </div>
      <transition name="slide-fade">
        <div v-if="item.children && item.expand">
          <List :list="item.children" :height="height + 1" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: 0
    }
  },
  watch: {
    list: {
      handler() {
        this.init();
      },
      deep: true
    }
  },
  data() {
    return {
      selfList: []
    };
  },
  computed: {
    blockStyle() {
      return function(item) {
        return { background: item.expand ? "#2c3950" : "none" };
      };
    },
    listStyle() {
      return height => {
        return { paddingLeft: `${(36 + height * 16) / 100}rem` };
      };
    }
  },
  name: "List",
  methods: {
    itemClick(item) {
      item.children && (item.expand = !item.expand);
    },
    init() {
      this.selfList = this.list.map(n => ({ ...n, expand: false }));
    }
  },

  created() {
    this.init();
  }
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
  transform: translateY(-20px);
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
  }
  .block-item {
    height: 0.64rem;
    width: 100%;
    // border-bottom: 1px black solid;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    &:hover {
      background: #2c3950;
      color: #ffffff;
      font-weight: bold;
    }

    .point {
      width: 0.04rem;
      height: 0.04rem;
      border-radius: 50%;
      background: #cdd4e0;
      margin-right: 0.14rem;
    }
    > span {
      flex: 1;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
      margin-right: 0.16rem;
      font-weight: normal !important;
    }
  }
}
</style>
