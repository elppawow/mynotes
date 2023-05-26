// 官网
// https://www.babeljs.cn/

// 先安装babel
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npm install --save @babel/polyfill

// 安装说明：
// @babel/core  核心库
// @babel/cli  命令行
// @babel/preset-env  名称为env的预设
// @babel/polyfill  用于模拟JS的新功能，例如Promise 和 WeakMap等
// env preset 提供了一个 "useBuiltIns" 参数，当此参数设置为 "usage" 时，就会加载上面所提到的最后一个优化措施，也就是只包含你所需要的 polyfill。

const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",  //自动加载所需的polyfill
      },
    ],
  ];
  
  module.exports = { presets };