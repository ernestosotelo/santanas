var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  cssConditions = require("postcss-conditionals"),
  cssFor = require("postcss-for"),
  cssEach = require("postcss-each"),
  cssColor = require("postcss-color-function"),
  hexRGBA = require("postcss-hexrgba")

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/index.css")
    .pipe(
      postcss([
        cssImport,
        mixins,
        cssConditions,
        cssEach,
        cssFor,
        cssvars,
        nested,
        cssColor,
        hexRGBA,
        autoprefixer
      ])
    )
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString())
      this.emit("end")
    })
    .pipe(gulp.dest("./app/public/"))
})
