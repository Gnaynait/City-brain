<!--
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-14 20:12:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\topbar\MainNav.vue
-->
<template>
  <div class="main-nav">
    <div class="nav-button" @mouseleave="mouseleaveHandle">
      <div class="nav-box" v-for="(nav, index) in selfNav" :key="index">
        <ol
          :style="navStyle(nav)"
          @click.stop="changeNav(nav)"
          @mouseover="mouseoverHandle(nav)"
        >
          {{
            nav.title
          }}
        </ol>
        <i v-if="currentHover && nav.name === currentHover.name"></i>
      </div>
    </div>
  </div>
</template>

<script>
import pageMixins from "@/mixins/pageMixins";
export default {
  mixins: [pageMixins],

  props: {
    navs: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      selfNav: []
    };
  },
  computed: {
    navStyle() {
      return function(item) {
        return (this.currentMain && item.name === this.currentMain.name) ||
          (this.currentHover && item.name === this.currentHover.name)
          ? { color: "#ffffff", background: "#214094" }
          : { color: "#C0C4CC" };
      };
    }
  },
  methods: {
    mouseleaveHandle() {
      this.$emit("mouseleaveHandle");
    },
    mouseoverHandle(item) {
      this.selfNav = this.selfNav.map(n => ({
        ...n,
        hover: n.name === item.name
      }));
      this.$emit("changeHoverNav", item);
    },
    changeNav(item) {
      this.selfNav = this.selfNav.map(n => ({
        ...n,
        active: n.name === item.name
      }));
      this.$emit("changeNav", item);
    }
  },
  created() {
    this.selfNav = JSON.parse(JSON.stringify(this.navs)).map(item =>
      Object.assign(item, {
        active: item.name === this.currentMain.name,
        hover: false
      })
    );
  }
};
</script>

<style lang="scss" scoped>
.main-nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 1;
  margin-left: 0.24rem;
  .nav-button {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .nav-box {
      position: relative;
      > ol {
        padding: 0.28rem 0.2rem;
        font: 0.2rem/1 "微软雅黑";
        color: #c0c4cc;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background: #214094;
          color: #ffffff !important;
        }
      }
      > i {
        width: 0;
        height: 0;
        border-left: 0.1rem solid transparent;
        border-right: 0.1rem solid transparent;
        border-bottom: 0.1rem solid #151822;
        display: block;
        position: absolute;
        z-index: 99999;
        left: calc(50% - 0.1rem);
        bottom: 0rem;
      }
    }
  }
}
</style>
