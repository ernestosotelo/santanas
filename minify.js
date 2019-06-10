const minify = require("@node-minify/core")
const uglifyES = require("@node-minify/uglify-es")
const htmlMinifier = require("@node-minify/html-minifier")
const cssnano = require("@node-minify/cssnano")

minify({
  compressor: cssnano,
  input: "./index.css",
  output: "./public/index.css",
  callback: function(err, min) {}
})

minify({
  compressor: uglifyES,
  input: "./assets/scripts/index.js",
  output: "./public/index.js",
  callback: function(err, min) {}
})

minify({
  compressor: htmlMinifier,
  input: "./index.html",
  output: "./public/index.html",
  callback: function(err, min) {}
})
