<!--
 * @Author: your name
 * @Date: 2020-10-14 17:55:47
 * @LastEditTime: 2020-10-14 20:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\topbar\AllView.vue
-->
<template>
  <transition name="slide-fade">
    <div
      class="all-view"
      ref="allview"
      v-if="currentHover"
      @mouseleave="mouseleaveHandle"
      @mouseover="mouseover"
    >
      <el-input v-model="text" @focus="focusHandle" @blur="blurHandle"></el-input>
      <div
        v-for="item in currentHover.children"
        :style="item.title.includes(text) && text !== '' && 'color:red'"
      >
        {{ item.title }}
      </div>
      {{ text }}
    </div>
  </transition>
</template>

<script>
import pageMixins from '@/mixins/pageMixins'
export default {
  mixins: [pageMixins],
  data() {
    return {
      onView: false,
      text: 'sdf',
      typein:false,
    }
  },
  watch: {},
  beforeDestroy() {
    console.log('销毁')
  },
  mounted() {},
  methods: {
    blurHandle(){
      this.typein=false
    },
    focusHandle(){
      this.typein=true
    },
    mouseover() {
      this.onView = true
    },
    mouseleaveHandle() {
      if(this.typein) return
      this.onView = false
      this.$store.commit('setCurrentHover', null)
    },
  },
  created() {
    this.$bus.$on('LEAVE_NAV', () => {
      const tid = setTimeout(() => {
        this.onView || this.$store.commit('setCurrentHover', null)
        clearTimeout(tid)
      }, 200)
    })
  },
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-1000px);
  opacity: 0;
}
.all-view {
  width: 15.2rem;
  height: 100%;
  background: #151822;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 999;
  font-size: 16px;
}
</style>
