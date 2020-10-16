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
    <Container :col="[16, 84]">
      <template slot="col1">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
        </el-tree>
      </template>
      <template slot="col2">
        <div style="margin-bottom:20px;overflow:hidden">
          <div style="float:left">
            <el-button type="primary">新建</el-button>
            <el-button>删除</el-button>
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
        <div
          style="display:flex;flex-flow:row nowrap;justify-content: flex-end; margin-top:20px"
        >
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </template>
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
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
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
