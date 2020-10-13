<!--
 * @Author: your name
 * @Date: 2020-10-13 14:04:18
 * @LastEditTime: 2020-10-13 14:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\board\board.vue
-->
<template>
  <div class="board">
    <NavList />
    <Main />
  </div>
</template>

<script>
import Main from "./main";
import NavList from "./navList";
export default {
  components: {
    NavList,
    Main
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
</style>
