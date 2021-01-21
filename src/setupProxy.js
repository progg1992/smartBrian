const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pacific-springs-42214.herokuapp.com',
      changeOrigin: true,
    })
  );
};