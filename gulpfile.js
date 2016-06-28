var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssNano = require('gulp-cssnano');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var es = require('event-stream');
var rename = require('gulp-rename');

gulp.task('default', ['sass', 'javascript', 'watch']);

gulp.task('sass', function() {
	return gulp.src('./app/static/scss/main.scss')
	.pipe(sass())
	.pipe(cssNano())
	.pipe(rename({ suffix: '.min'}))
	.pipe(gulp.dest('./app/static/dist'));
});

gulp.task('css', function() {
	var cssFromSass = gulp.src('./app/static/scss/main.scss')
	.pipe(sass())

	var css = gulp.src('./app/static/css/*.css');

	return es.merge(cssFromSass, css)
	.pipe(concatCss('all.min.css'))
	.pipe(cssNano())
	.pipe(gulp.dest('./app/static/dist'));
});

gulp.task('javascript', function() {
	return gulp.src('./app/static/javascript/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./app/static/dist'));
});

gulp.task('watch', function () {
	gulp.watch('./app/static/sass/*.scss', ['css']);
})
