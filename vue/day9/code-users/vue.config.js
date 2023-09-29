module.exports = {
  devServer: {
    port: 8080,
    open: true,
    proxy: 'http://localhost:8099'
  }
}