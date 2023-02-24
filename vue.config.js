/*
module.exports = {
  devServer: {
    host: 'localhost'
  },
  chainWebpack: (config) => {
    config.module
    .rule("mjs")
    .test(/\.mjs$/)
    .type("javascript/auto")
    .include.add(/node_modules/)
    .end();
  }
}
*/

configureWebpack: {
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
    ]
  }
}

module.exports = {
  chainWebpack: config => {
    config.resolve
      .extensions
        .prepend('.mjs')

    config.module
      .rule('mjs')
        .test(/\.mjs$/)
        .include
          .add(/node_modules/)
          .end()
        .type('javascript/auto')
  },
}