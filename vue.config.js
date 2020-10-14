/*
 * @Author: your name
 * @Date: 2020-10-13 18:18:50
 * @LastEditTime: 2020-10-13 18:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \safe\vue.config.js
 */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463
   */
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: true,
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */

  configureWebpack: {},

  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layout", resolve("src/layout"))
      .set("@static", resolve("src/static"));
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 100, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: ["weui", "mu"],
            propList: ["*"]
          })
        ]
      },
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    port: 8181,
    // port: 30181,
    proxy: {
      //平台登录，请勿注释掉
      "/jsti-pm-bff-pc/bff/author": {
        //target: 'http://10.60.2.142:8080/',85:5110 // 微服务地址：网关+服务名/jsti-mdm-bff
        target: "http://192.168.85.111:5110/", // 微服务地址：网关+服务名/jsti-mdm-bff
        // target: 'http://192.168.85.111:5110/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          // 后端MOCK开关
          "^/jsti-pm-bff-pc/bff/author": "/jsti-mdm-bff/bff/author" //mock入口
        }
      }
    },
    hotOnly: true
  },

  lintOnSave: false
};
