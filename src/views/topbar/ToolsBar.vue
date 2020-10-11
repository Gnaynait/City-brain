<template>
  <div class="tools-bar">
    <div class="message">
      <div class="point" v-if="hasNew"></div>
    </div>
    <div class="help">帮助</div>
    <div class="admin">
      <div class="admin-img" ref="admin"></div>
      <div class="admin-name">{{ adminName }}</div>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      //   default: "https://www.baidu.com/img/flexible/logo/pc/result.png",
      default: "",
    },
    adminName: {
      type: String,
      default: "admin",
    },
    hasNew: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
  methods: {
    getImage() {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = this.img;
        img.width = 28;
        img.height = 28;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (e) => {
          reject(e);
        };
      });
    },
  },
  async mounted() {
    try {
      const node = await this.getImage();
      this.$refs.admin.prepend(node);
    } catch (error) {
      console.log(error);
      const url = require("@/assets/images/icon_default.png");
      const img = new Image();
      img.src = url;
      img.width = 28;
      img.height = 28;
      img.onload = () => {
        this.$refs.admin.prepend(img);
      };
    }
  },
};
</script>

<style lang="scss" scoped>
.tools-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .message {
    width: 0.22rem;
    height: 0.17rem;
    background: url("~@/assets/images/icon-text.png") no-repeat center center;
    margin-right: 0.4rem;
    position: relative;
    .point {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: red;
      position: absolute;
      right: -4px;
      top: -6px;
    }
  }
  .help {
    font: 0.18rem / 1 "微软雅黑";
    color: #bdc2c4;
    margin-right: 0.46rem;
  }
  .admin {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .admin-img {
      display: flex;
      width: 0.28rem;
      height: 0.28rem;
      border-radius: 50%;
      position: relative;
      background: #006eff;
      overflow: hidden;
      margin-right: 0.1rem;
    }
    .admin-name {
      font: 0.18rem/1 "微软雅黑";
      color: #bdc2c4;
    }
    > i {
      display: block;
      width: 0.1rem;
      height: 0.1rem;
      margin-left: 0.08rem;
      background: url("~@/assets/images/icon_arrow_down.png");
      margin-right: 0.48rem;
    }
  }
}
</style>
