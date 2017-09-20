const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

$dirname = path.resolve();
console.log($dirname);
module.exports = {
  devtool: "eval-soutce-map", //配置生成Source Maps方便调试
  entry: $dirname + "/src/main.js", //文件入口
  output: {
    path: $dirname + "/public",
    filename: "bundle.js"
  }, //输出

  module: { //在配置文件中添加JSON loader
    rules: [
      {
        test: /\.json$/,
        use: ["json-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: "style-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        ]
        //loader: "style-loader!css-loader?modules", //感叹号的作用在于使同一文件能够使用不同类型的loader
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "test",
      template: $dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
    contentBase: path.join($dirname, "public"), //数组形式多个目录提供内容
    historyApiFallback: false, // 
    // https: true, // 默认情况下采用http，设置为true用https协议
    compress: true, // 以gzip格式打包
    // lazy: true, // 不会监听变化
    // noInfo: true, // 不显示打包信息，error和warnning任然显示
    clientLogLevel: "none", 
    port: 9000, // 指定监听端口号
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }, // 有独立的后端服务，可以代理端口，详情查看webpack
    // progress: true, // 将进度显示到控制台
    publicPath: "/", // 可访问静态资源路径
    // quiet: true, // 除了打包信息，任何信息都不会显示包括错误和提示
    // watchOptions: {
    //   poll: true
    // }, //暂时不解
    historyApiFallback: true, // 给任何404请求返回index.html,详细配置见webpack
    stats: {
      colors: true
    }
  }
}