var gulp = require("gulp"),
  watch = require("gulp-watch")

gulp.task("watch", function() {
  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("cssInject")
  })
  watch("./app/assets/scripts/**/*.js", () => {
    gulp.start("scripts")
  })
})

gulp.task("cssInject", ["styles"], () => {
  return gulp.src("./app/public/index.css")
})
