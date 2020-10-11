<template>
  <div class="top-bar">
    <Logo />
    <UseFor />
    <MainNav v-if="navs" :navs="navs" @changeNav="changeNav" />
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
    ToolsBar
  },
  data() {
    return {
      // navs: [],
    };
  },

  computed: {
    navs() {
      return this.$store.state.page.allList;
    }
  },
  methods: {
    changeNav(item) {
      const currentOrg = this.navs.find(n => n.name === item.name);
      currentOrg && this.$store.commit("setMainCurrent", currentOrg);
    }
  }
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
