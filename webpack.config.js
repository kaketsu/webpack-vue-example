module.exports = {
  // 这是一个主文件包括其他模块
  entry: './src/main.js',
  // 编译的文件路径
  output: {
      //`dist`文件夹
    path: './dist',
    // 文件 `build.js` 即 dist/build.js
    filename: 'build.js'
  },
  module:[
      {
            test: /\.js$/,
            loader:'js'
      }
  ]
  
}