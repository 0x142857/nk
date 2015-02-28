var gulp = require('gulp'),
    server = require('gulp-express'),
    livereload = require('gulp-livereload'),
    stylus = require('gulp-stylus');

livereload({ start: true })

var paths = {
  css: ['./public/css/*.css'],
  styl: ['./src/styl/*.styl']
};

gulp.task('server', function () {
  return server.run({
    file: 'app.js'
  });

});

gulp.task('styl', function () {
  gulp.src(paths.styl)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('css', function () {
  return gulp.src(paths.css)
        .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.styl, ['styl']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(['app.js'], [server.run]);

});

gulp.task('run', ['server', 'styl', 'watch']);
