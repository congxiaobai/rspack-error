const path = require('path');
const rspackConf = require('./rspack.base.js');
const config = rspackConf({
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "ProductSelect",
  })

  module.exports = config;


