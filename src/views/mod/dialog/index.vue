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
      <el-button type="text" @click="dialogVisible = true"
        >点击打开 Dialog</el-button
      >

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </Container>
  </div>
</template>

<script>
import Container from "@/layout/container";
export default {
  components: {
    Container
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
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
