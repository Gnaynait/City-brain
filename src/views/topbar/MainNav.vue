<template>
  <div class="main-nav">
    <ol
      v-for="(nav, index) in selfNav"
      :key="index"
      :style="navStyle(nav)"
      @click="changeNav(nav)"
    >
      {{
        nav.title
      }}
    </ol>
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
        return item.active
          ? { color: "#ffffff", background: "#214094" }
          : { color: "#C0C4CC" };
      };
    }
  },
  methods: {
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
      Object.assign(item, { active: item.name === this.currentMain.name })
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
}
</style>
