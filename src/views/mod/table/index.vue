<!--
 * @Author: your name
 * @Date: 2020-10-14 16:09:09
 * @LastEditTime: 2020-10-14 16:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\mod\table\index.vue
-->
<template>
  <div class="table-page">
    <Container>
      <div style="margin-bottom:20px;overflow:hidden">
        <div style="float:left">
          <el-button type="primary">新建</el-button> <el-button>删除</el-button>
        </div>
        <div style="float:right;display:flex;flex-flow:row">
          <el-input></el-input><el-button type="primary">新建</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
    
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    <div style="display:flex;flex-flow:row nowrap;justify-content: flex-end; margin-top:20px">
        <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {
    this.tableData = [...this.tableData, ...this.tableData];
  },
};
</script>

<style lang="scss" scoped>
.table-page {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
