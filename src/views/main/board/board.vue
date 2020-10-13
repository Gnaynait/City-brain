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
  </div>
</template>

<script>
import NavList from "./navList";
export default {
  components: {
    NavList
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 100%;
  height: 100%;
}
</style>
