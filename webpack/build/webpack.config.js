const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-soutce-map", //配置生成Source Maps方便调试
  entry: __dirname + "/src/main.js", //文件入口
  output: {
    path: __dirname + "/public",
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
        use: ["babel-loader"]
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
      template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
    contentBase: "./public", //本地服务所加载的页面所在的目录
    port: "9090",
    color: true, //终端输出是否为彩色
    historyApiFallback: true, //跳转到index.html
    inline: true //实时刷新
  }
}