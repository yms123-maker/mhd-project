module.exports = {
  devServer: {
    proxy: {
      '/migu': {
        target: 'https://api.asilu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/migu': ''
        }
      },
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
