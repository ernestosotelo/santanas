const gulp = require("gulp")
const svgmin = require("gulp-svgmin")

gulp.task("minifySVG", function() {
  return gulp
    .src("./images/**/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("./public/images"))
})
