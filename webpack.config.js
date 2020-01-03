const path = require('path');

// 提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, ''),
  entry: {
    'main': './js/main.js',
    'main2': './js/main2.js'
  },

  output: {
    // 将所有依赖的模块合并输出到一个叫bundle.js文件内
    // filename: '[name]_[hash:8].js',
    filename: '[name].js',
    // 将输出的文件都放在dist目录下
    chunkFilename: '[name].min.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 使用正则去匹配要用该loader转换的css文件
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          // 转换 .css文件需要使用的Loader
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从js文件中提取出来的 .css文件的名称
      filename: `main.css`
    })
  ]
};
