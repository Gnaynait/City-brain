<!--
 * @Author: your name
 * @Date: 2020-10-14 10:09:59
 * @LastEditTime: 2020-10-14 17:28:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\components\StringCmp.vue
-->
<template>
  <component :is="Cmp" param="haha" />
</template>

<script>
import ErrorView from './errorView'
import AsyncLoading from './asyncLoading'

const AsyncComponent = (cmpString) => () => ({
  // 需要加载的组件
  component: import(`@/${cmpString}`),
  // 异步组件加载时使用的组件
  loading: AsyncLoading,
  // 加载失败时使用的组件
  error: ErrorView,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000,
})
// function checkUrl(cmpString) {
//   return new Promise((reslove, reject) => {
//     import(`@/${cmpString}`)
//       .then((res) => {
//         setTimeout(() => {
//           reslove(res)
//         }, 2500)
//       })
//       .catch((e) => reject(e))
//   })
// }
export default {
  props: {
    cmp: {
      type: String,
      default: '',
    },
  },
  watch: {
    cmp(val) {
      this.Cmp = AsyncComponent(val)
    },
  },
  data() {
    return {
      Cmp: AsyncComponent(this.cmp),
    }
  },
}
</script>

<style lang="scss" scoped></style>
