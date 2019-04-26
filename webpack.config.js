const path = require("path")

module.exports = {
  entry: ["./app/assets/scripts/index.js"],
  output: {
    path: path.join(__dirname, "app/public"),
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
    contentBase: path.join(__dirname, "public"),
    open: true,

    historyApiFallback: true
  },
  devtool: "cheap-module-eval-source-map"
}

// todo WRITE NOTE ABOUT historyApiFallback
// ! NOTES BELOW

// ? LOADER
// * A LOADER helps you customize the behavior of webpack when it loads a file.

// ? RULES
// * A RULE  modifies how a module is created.

// ? TEST
// * A TEST defined which files should the rules apply to.
// * REG EXPRESSION EXPLAINED: /\.js$/ The '.' means something in JS so it is escaped with a forward slash '\' the '$' represents what the file should end so it should just be '.js' files.

// ? EXCLUDE
// * An EXCLUDE defines which files babel should NOT run through. Hence why all the /node_modules/ are exempted because /node_modules/ has a ton of '.js' files that don't need to be evaluated by babel.

// ? OPTIONS
// * The OPTIONS allow to add aditional configurations (presets) to the babel transpiler. These options can also just be inserted into a .babelrc file.

// ? PRESETS
// * The PRESETS allow you to add plugins to the babel transpiler to support certain language features (such as adding the REACT language).
// * The PRESET-ENV is a 'smart' preset that uses the latest JavaScript.
// * The PRESET-REACT allows compatibility with the React language environment.

// ? POLYFILL
// * A POLYFILL allows babel to add syntax that older browsers may understand. Hence whey '@babel/polyfill' is included under 'entry'.

// ? Proposal-Class-Properties
// * Allows the usage of class properties which removes the need of using constructors.

// ? devServer: OPEN
// * OPEN receives a boolean - set as fault by default. This tells webpack whether or not to open a browser automatically.
