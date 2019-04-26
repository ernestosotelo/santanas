const minify = require("@node-minify/core")
const uglifyES = require("@node-minify/uglify-es")
const htmlMinifier = require("@node-minify/html-minifier")

minify({
  compressor: cssnano,
  input: "./app/public/index.css",
  output: "index.min.css",
  callback: function(err, min) {}
})

minify({
  compressor: uglifyES,
  input: "./app/public/index.js",
  output: "index.min.js",
  callback: function(err, min) {}
})

minify({
  compressor: htmlMinifier,
  input: "./app/public/index.html",
  output: "index.min.html",
  callback: function(err, min) {}
})
