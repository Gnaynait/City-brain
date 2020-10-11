<template>
  <div class="top-bar">
    <Logo />
    <UseFor />
    <MainNav :navs="navs" @changeNav="changeNav" />
    <ToolsBar />
  </div>
</template>

<script>
import Logo from "./MainLogo";
import UseFor from "./usefor";
import MainNav from "./MainNav";
import ToolsBar from "./ToolsBar";
export default {
  components: {
    Logo,
    UseFor,
    MainNav,
    ToolsBar,
  },
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
  methods: {
    changeNav(item) {
      console.log("变换至这个", item.title);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 0.8rem;
  background: blue;
  display: flex;
  flex-flow: row nowrap;
  background: #171d29;
  align-items: center;
}
</style>
