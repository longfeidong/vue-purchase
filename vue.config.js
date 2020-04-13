module.exports = {
    devServer: {
      port: 8081,
      proxy: {
        '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/mock'
            }
        }
      }
    }
    // publicPath: '/project',
    // devServer: {
    //   proxy: {
    //     '/api': {
    //         target: 'http://localhost:8080'
    //     }
    //   }
    // }
}