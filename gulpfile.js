/*

	gulpfile.js

	Run a BrowserSync server at http://localhost:3000 that uses
	the Jekyll generated site located in _site. Compile and minify
	all sass and js files.

*/

var browserSync  = require('browser-sync');
var cp  = require('child_process');
var gulp  = require('gulp');
var rename  = require('gulp-rename');
var sass  = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');

gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
	browserSync(
		{
			server: {baseDir: '_site'},
			open: false
	});
});

gulp.task('jekyll-build', function (done) {
	browserSync.notify('Building Jekyll');
	return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
		.on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

gulp.task('styles', function () {
	return gulp.src('./src/*.scss')
	.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(rename('mattdoesthings.css'))
	.pipe(gulp.dest('_site/')) // browser-sync live injection
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('./'));
});

gulp.task('js', function() {
	return gulp.src([
		'./node_modules/jquery/jquery.js',
		'./node_modules/slick-carousel/slick/slick.js',
		'./node_modules/remodal/dist/remodal.js',
		'./src/scripts.js'
	])
	.pipe(concat('mattdoesthings.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('_site/'))
	.pipe(browserSync.reload({stream: true}))
	.pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	gulp.watch("./src/*.js", ['js']);
	gulp.watch("./src/*.scss", ['styles']);
	gulp.watch(['*.html', '*/*.html', '*/*/*.html', '*/*/*/*.html', '*/*.md', '!_site/**', '!_site/*/**'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'js', 'watch']);
