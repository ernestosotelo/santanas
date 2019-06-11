var gulp = require("gulp"),
  watch = require("gulp-watch")

gulp.task("watch", function() {
  watch("./assets/styles/**/*.css", () => {
    gulp.start("cssInject")
  })
  watch("./assets/scripts/**/*.js", () => {
    gulp.start("scripts")
  })
})

gulp.task("cssInject", ["styles"], () => {
  return gulp.src("./")
})
