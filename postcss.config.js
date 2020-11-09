module.exports = {
  plugins: {
    // 将这个插件进行一个降级操作  ^9.0.0  重新下载该插件
    autoprefixer: {
      // 不需要设置这个选项，它会自动去使用 .browserslistrc 这个文件的配置项
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
      // 这里会有一个小问题 autoprefixer 最近新更新了10.x系列版本，需要降级成9.x系列
    },
    'postcss-pxtorem': {
      // 转换的基准值  1rem = 37.5px
      // x rem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
