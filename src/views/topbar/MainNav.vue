<template>
  <div class="main-nav">
    <ol
      v-for="(nav, index) in navs"
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
export default {
  data() {
    return {
      navs: [
        {
          name: "zndd",
          title: "智能调度",
        },
        {
          name: "klfx",
          title: "客流分析",
        },
        {
          name: "gjERP",
          title: "公交ERP",
        },
        {
          name: "zdaqfy",
          title: "主动安全防御",
        },
      ],
    };
  },
  computed: {
    navStyle() {
      return function(item) {
        return item.active
          ? { color: "#ffffff", background: "#214094" }
          : { color: "#C0C4CC" };
      };
    },
  },
  methods: {
    changeNav(item) {
      this.navs = this.navs.map((n) => ({
        ...n,
        active: n.name === item.name,
      }));
    },
  },
  created() {
    this.navs = this.navs.map((item, index) =>
      Object.assign(item, { active: !index })
    );
    console.log(this.navs);
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 0.24rem;
  > ol {
    padding: 0.28rem 0.2rem;
    font: 0.2rem/1 "微软雅黑";
    color: white;
  }
}
</style>
