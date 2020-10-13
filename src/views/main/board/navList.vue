<!--
 * @Author: your name
 * @Date: 2020-10-13 13:52:25
 * @LastEditTime: 2020-10-13 18:10:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \City-brain\src\views\main\board\navList.vue
-->
<template>
  <div class="nav-bar">
    <transition-group name="slide-fade" class="inner" ref="listWrap">
      <ol
        :class="blockClass(item)"
        v-for="(item, index) in tabArr"
        :key="index"
        @click="changeTab(item)"
      >
        <span>{{ item.title }}</span>
        <i
          v-if="!item.home"
          class="iconfont icon-ico-btnclose"
          @click.stop="removeTab(item)"
        ></i>
      </ol>
    </transition-group>
    <div class="cotrl" v-if="showCotrl">dfsf</div>
  </div>
</template>

<script>
import pageMixins from '@/mixins/pageMixins'
export default {
  mixins: [pageMixins],
  data() {
    return {
      showCotrl: false,
    }
  },
  computed: {
    blockClass() {
      return function(item) {
        const cArr = []
        item.home && cArr.push('home')
        item.name === this.currentView.name && cArr.push('choice')
        return cArr
      }
    },
  },
  mounted() {
    this.overWidth()

    this.$bus.$on('RESIZE', () => {
      this.overWidth()
    })
  },
  methods: {
    removeTab(item) {
      this.$store.commit('removeView', item)
    },
    changeTab(item) {
      this.$store.commit('changeCurrentView', item)
    },
    overWidth() {
      this.$nextTick(() => {
        const wrapEl = this.$refs.listWrap.$el
        const childrenEl = wrapEl.children
        const childTolW = Array.from(childrenEl).reduce(
          (tol, el) =>tol+ el.offsetWidth,
          0
        )

        if (childTolW >= wrapEl.offsetWidth) {
            console.log('超出');
          this.showCotrl = true
        }
        console.log(childTolW, wrapEl.offsetWidth)
      })
    },
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
  transform: translateX(-20px);
  opacity: 0;
}

.nav-bar {
  width: 100%;
  height: 0.56rem;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba($color: #000000, $alpha: 0.05);
  padding: 0 0.16rem;
  position: relative;
  overflow-x: auto;
  font: 0.16rem/1 '微软雅黑';
  color: #a5afb8;
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    > ol {
      padding: 0.1rem;
      border: 1px solid #a5afb8;
      min-width: 1.3rem;
      height: 0.36rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      margin-right: 0.12rem;
      cursor: pointer;
      transition: 0.2s;
      > i {
        display: block;
        text-align: center;
        text-indent: 0;
        cursor: pointer;
        color: #a5afb8;
        font-size: 0.16rem;
        &:hover {
          color: red;
        }
      }
    }
    .home {
      background: url('~@/assets/images/icon_tab_home_choose.png') no-repeat
        0.08rem center;
      text-indent: 0.28rem;
      background-size: 0.24rem 0.24rem !important ;
      //   color: #0040ff;
    }
    .choice {
      color: #0040ff;
      border: 1px solid #0040ff;
      font-weight: bold;
    }
  }
}
</style>
