const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/account/login',
    createProxyMiddleware({
      target: 'https://api.bodam.site:8080',
      changeOrigin: true,
    })
  );
};
