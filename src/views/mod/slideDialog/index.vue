<!--
 * @Author: your name
 * @Date: 2020-10-14 16:09:09
 * @LastEditTime: 2020-10-14 16:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\mod\table\index.vue
-->
<template>
  <div class="base-page">
    <Container>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>

      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;"
      >
        点我打开
      </el-button>

      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <span>我来啦!</span>
      </el-drawer>
    </Container>
  </div>
</template>

<script>
import Container from "@/layout/container";
export default {
  components: {
    Container,
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.base-page {
  width: 100%;
  height: 100%;
  position: relative;
  //   > div {
  //     margin: 20px;
  //   }
}
</style>
