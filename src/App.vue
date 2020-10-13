<!--
 * @Author: your name
 * @Date: 2020-10-12 15:04:11
 * @LastEditTime: 2020-10-13 18:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted () {
      window.onresize=()=>this.$bus.$emit("RESIZE")
    },
  }
</script>

<style lang="scss" scoped>

</style>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
