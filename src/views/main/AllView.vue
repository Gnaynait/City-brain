<!--
 * @Author: your name
 * @Date: 2020-10-14 17:55:47
 * @LastEditTime: 2020-10-14 20:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\topbar\AllView.vue
-->
<template>
  <transition name="slide-fade">
    <!-- <div
      class="all-view"
      ref="allview"
      v-if="currentHover"
      @mouseleave="mouseleaveHandle"
      @mouseover="mouseover"
    > -->
    <div
      class="all-view"
      ref="allview"
      v-if="currentHover"
      @mouseleave="mouseleaveHandle"
      @mouseover="mouseover"
    >
      <div class="search-bar">
        <el-input
          v-model="text"
          @focus="focusHandle"
          @blur="blurHandle"
          @input="search"
          clearable
          placeholder="请输入想要搜索的内容"
          ><i slot="suffix" class="el-input__icon el-icon-search"></i
        ></el-input>
      </div>
      <div class="content-block" v-if="!text">
        <div
          class="p-block"
          v-for="item in currentHover.children"
          :style="item.title.includes(text) && text !== '' && 'color:red'"
        >
          <ol>
            <i
              :class="`iconfont ${item.icon || 'icon--FaceBatchClusterNode'}`"
            ></i
            ><span>{{ item.title }}</span>
          </ol>
          <div class="c-block">
            <div
              class="subitem"
              v-for="(sitem, sindex) in item.children"
              :key="sindex"
              :style="subStyle(sitem)"
              @click="subClick(sitem)"
            >
              {{ sitem.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="content-block" v-if="text">
        <div
          class="p-block"
          v-for="item in searchMatch"
          :style="item.title.includes(text) && text !== '' && 'color:red'"
        >
          <ol>
            <i
              :class="`iconfont ${item.icon || 'icon--FaceBatchClusterNode'}`"
            ></i
            ><span>{{ item.title }}</span>
          </ol>
          <div class="c-block">
            <div
              class="subitem"
              v-for="(sitem, sindex) in item.leaf"
              :key="sindex"
              :style="subStyle(sitem)"
              @click="subClick(sitem)"
            >
              {{ sitem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import pageMixins from "@/mixins/pageMixins";
export default {
  inject: ["addTab", "changeChoice"],
  mixins: [pageMixins],
  data() {
    return {
      onView: false,
      text: "",
      typein: false,
      searchMatch: [],
    };
  },
  watch: {},
  destroyed() {
    console.log("销毁");
  },
  computed: {
    subStyle(sitem) {
      return (sitem) => {
        const nameList = this.tabArr.map((n) => n.name);
        return {
          color: nameList.includes(sitem.name) && "#2c64ff",
          opacity: sitem.children && "0.5",
          cursor: sitem.children ? "not-allowed" : "pointer",
          pointerEvents: sitem.children && "none",
        };
      };
    },
  },
  mounted() {},
  methods: {
    search(str) {
      if (!str) return;
      const data = JSON.parse(JSON.stringify(this.currentHover));
      const { children } = data;
      const searchChild = (list, arr = [], top = null, height = 0) => {
        for (const item of list) {
          if (height === 0) {
            top = item;
            item.top = null;
          } else {
            item.top = top;
          }
          if (item.children) {
            searchChild(item.children, arr, top, height + 1);
          } else {
            arr.push(item);
          }
        }
        return arr;
      };
      const allMatchChildren = searchChild(children).filter((node) =>
        node.title.includes(str)
      );
      const searchList = allMatchChildren.reduce((tol, item) => {
        if (tol.map((n) => n.name).includes(item.top.name)) {
          const current = tol.find((n) => n.name === item.top.name);
          current.leaf || (current.leaf = []);
          current.leaf.push(item);
        } else {
          item.top.leaf = [item];
          tol = [...tol, item.top];
        }
        return tol;
      }, []);
      this.searchMatch = searchList;
    },
    subClick(item) {
      delete item.top;
      delete item.leaf;
      this.addTab(item);
      this.$store.commit("setCurrentHover", null);
    },
    blurHandle() {
      this.typein = false;
    },
    focusHandle() {
      this.typein = true;
    },
    mouseover() {
      this.onView = true;
    },
    mouseleaveHandle() {
      if (this.typein) return;
      this.onView = false;
      this.$store.commit("setCurrentHover", null);
    },
  },
  created() {
    this.$bus.$on("LEAVE_NAV", () => {
      const tid = setTimeout(() => {
        this.onView || this.$store.commit("setCurrentHover", null),
          (this.text = "");
        clearTimeout(tid);
      }, 200);
    });
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
  transform: translateY(-1000px);
  opacity: 0;
}
::v-deep .el-input__inner {
  background-color: #151822;
  // border: 1px solid rgba($color: #ffffff, $alpha: 0.35);
}
::v-deep .input__inner:focus {
    border-color: #2c64ff;
    outline: 0;
}
.all-view {
  width: 15.2rem;
  height: 100%;
  background: #151822;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 999;
  font-size: 16px;
  color: white;
  display: flex;
  flex-flow: column nowrap;

  .search-bar {
    margin: 32px 0 0 112px;
    width: 960px;
    height: 40px;
  }
  .content-block {
    margin-left: 112px;
    padding-top: 40px;
    width: 1360px;
    height: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    overflow-y: auto;
    .p-block {
      // height: 312px;
      width: 192px;
      display: flex;
      flex-flow: column nowrap;

      > ol {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        color: #b9bfc9;
        font-size: 20px;
        > i {
          margin-right: 8px;
          display: block;
          font-size: 22px;
          width: 28px;
          height: 28px;
          line-height: 28px;
          text-align: center;
        }
        > span {
          font-weight: bold;
        }
      }
      .c-block {
        height: 100%;
        color: #b9bfc9;
        width: 100%;
        // background: chocolate;
        padding-right: 20px;
        .subitem {
          margin-top: 16px;
          font-size: 16px;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
}
</style>
