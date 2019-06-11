const path = require("path")

module.exports = {
  mode: "production",
  entry: ["./assets/scripts/index.js"],
  output: {
    path: path.join(__dirname, "./"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    open: true,

    historyApiFallback: true
  },
  devtool: "cheap-module-eval-source-map"
}
