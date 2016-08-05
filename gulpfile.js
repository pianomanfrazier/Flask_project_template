var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssNano = require('gulp-cssnano');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

var cssNormalize = require('node-normalize-scss').includePaths;
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;
//var refills = require('node-refills').includePaths;

var reload = browserSync.reload;

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['sass', 'javascript', 'sync', 'watch']);

gulp.task('sass', function() {
	return gulp.src('./app/static/scss/main.scss')
	.pipe(sass({
    includePaths: [].concat(
      cssNormalize,
      bourbon,
      neat
      //refills
      )
  }))
	.pipe(cssNano())
	.pipe(rename({ suffix: '.min'}))
	.pipe(gulp.dest('./app/static/dist'));
});

gulp.task('javascript', function() {
	return gulp.src('./app/static/javascript/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify().on('error', function(e){
            console.log(e);
         }))
	.pipe(gulp.dest('./app/static/dist'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/static/scss/**','./app/static/scss/**/*'] ,['sass']);
	gulp.watch('./app/static/javascript/**', ['javascript']);
  gulp.watch(['./app/templates/**', './app/static/dist/**'], reload);
});

//BrowserSync
gulp.task('sync', function() {
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5000"
  });
});
