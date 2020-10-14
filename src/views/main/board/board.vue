<!--
 * @Author: your name
 * @Date: 2020-10-13 14:04:18
 * @LastEditTime: 2020-10-14 19:28:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\board\board.vue
-->
<template>
  <div class="board">
    <AllView />
    <NavList />
    <Main />
  </div>
</template>

<script>
import AllView from "../AllView";
import Main from "./main";
import NavList from "./navList";
export default {
  components: {
    NavList,
    Main,
    AllView
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
}
</style>
