var gulp = require('gulp'),
    server = require('gulp-express'),
    stylus = require('gulp-stylus');


var paths = {
  css: ['./public/css/*.css'],
  styl: ['./src/styl/*.styl'],
  jade: ['./template/*.jade']
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
    .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function () {
  return gulp.src(paths.css);
});

gulp.task('jade', function () {
  return gulp.src(paths.jade);
});

gulp.task('watch', function() {

  gulp.watch(paths.styl, ['styl']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.jade,['jade']);
  gulp.watch(['app.js'], [server.run]);

});

gulp.task('run', ['server', 'styl', 'watch']);
