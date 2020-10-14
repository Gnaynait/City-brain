<!--
 * @Author: your name
 * @Date: 2020-10-14 10:09:59
 * @LastEditTime: 2020-10-14 16:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\mod\home\index.vue
-->
<template>
  <div class="home-wrap">
    <div
      class="block-inner"
      v-for="(bl, index) in blocks"
      :style="blockStyle(bl)"
    >
      <template v-if="false"> </template>
      <template v-else>
        <Container :hasTitle="bl.title">
          <template slot="header"> </template>
          <template slot="content">
            <div class="fake">chart</div>
          </template>
        </Container>
      </template>
    </div>
  </div>
</template>

<script>
import Container from '@/layout/container'
export default {
  components: {
    Container,
  },
  computed: {
    blockStyle() {
      return function(item) {
        return { width: item.w }
      }
    },
  },
  data() {
    return {
      blocks: [
        {
          title: '班次执行计划',
          w: '50%',
          dindex: 'bczx',
        },
        {
          title: '出车率',
          w: '30%',
          dindex: 'ccl',
        },
        {
          title: '当日平均速度',
          w: '20%',
          dindex: 'drpjsd',
        },
        {
          title: '总里程',
          w: '33.3%',
          dindex: 'zlc',
        },
        {
          title: '平均发车时间',
          w: '33.3%',
          dindex: 'pjfcsj',
        },
        {
          title: '正点率',
          w: '33.3%',
          dindex: 'zdl',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  .block-inner {
    position: relative;
    height: 4.2rem;
    padding-right: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
.fake {
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
