var webpack = require('webpack')
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/caigou/" : "/",
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
            target: 'http://140.249.205.136:8082/cgpt/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/zbgl'
            }
        },
        '/api/isLogin': {
            target: 'http://localhost:8080/cgpt/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
        // '/api/ueditor': {
        //   target: 'http://140.249.205.136:8082/cgpt/',
        //   changeOrigin: true,
        //   pathRewrite: {
        //       '^/api/ueditor': '/ueditor/jsp/controller.jsp'
        //   }
        // }
      }
    },
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery"
        })
       ]
    },
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
    // publicPath: '/caigou/',
    // devServer: {
    //   port: 8080,
    //   proxy: {
    //     '/api': {
    //         target: 'http://localhost:8080/cgpt',
    //         changeOrigin: true,
    //         pathRewrite: {
    //           '^/api': '/zbgl'
    //         }
    //     }
    //   }
    // }
}