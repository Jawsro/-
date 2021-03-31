module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
        '/api': {  
            target: 'http://dahonghua.shangyouyun.cn',  // 后台接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite:{
                '^/api':'/'
            }
        }
    }
  },
}
