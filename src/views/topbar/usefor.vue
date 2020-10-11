<template>
  <div class="use">
    <div class="tit">常用功能</div>
    <i></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.use {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 0.3rem 0 0.4rem;
  height: 0.32rem;
  align-items: center;
  border-right: 1px rgba($color: #ffffff, $alpha: 0.4) solid;
  .tit {
    font: 0.18rem "微软雅黑";
    color: #bdc2c4;
  }
  > i {
    display: block;
    width: 0.1rem;
    height: 0.1rem;
    margin-left: 0.08rem;
    background: url("~@/assets/images/icon_arrow_down.png");
  }
}
</style>
