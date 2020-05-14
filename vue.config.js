var webpack = require('webpack')
module.exports = {
    devServer: {
      port: 8082,
      proxy: {
        '/api': {
            target: 'http://140.249.205.136:8082/cgpt/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/zbgl'
            }
        }
      }
    },
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery"
        })
       ]
    }
    // devServer: {
    //   port: 8081,
    //   proxy: {
    //     '/api': {
    //         target: 'http://localhost:8081',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': '/mock'
    //         }
    //     }
    //   }
    // }
    // publicPath: '/project',
    // devServer: {
    //   proxy: {
    //     '/api': {
    //         target: 'http://localhost:8080'
    //     }
    //   }
    // }
}