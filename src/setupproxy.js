const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    './api',
    proxy.createProxyMiddleware({
      target: 'http://apis.data.go.kr/B551011/KorService1/searchKeyword1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
