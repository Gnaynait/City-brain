<template>
  <div class="wrap" v-if="currentMain">
    <TopBar />
    <Main />
  </div>
</template>

<script>
import TopBar from "@/views/topbar/Topbar.vue";
import Main from "@/views/main/main.vue";
import pageMixin from "@/mixins/pageMixins";

export default {
  components: {
    TopBar,
    Main
  },
  mixins: [pageMixin],
  async created() {
    console.log("SUN", this.$store.state.page.test);
    this.$store.dispatch("GET_MENU_LIST");
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: skyblue;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
