<!--
 * @Author: your name
 * @Date: 2020-10-14 17:13:58
 * @LastEditTime: 2020-10-14 17:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\components\asyncLoading.vue
-->
<template>
  <div class="loading" v-loading="true" element-loading-text="拼命加载中"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  background: #f2f2f4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d7d7d7;
  font: bold 0.5rem arial;
}
</style>
