var gulp           = require('gulp');
var sass           = require('gulp-sass');
var minifyCSS      = require('gulp-minify-css');

var APP_DIR  = 'build';

var paths = {
    styles: 'stylesheets/**/*.scss'
};


gulp.task('sass', function () {
    console.log('run sass');
    gulp.src('stylesheets/main.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest(APP_DIR + '/css'));
});


gulp.task('watch', function () {
    gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', function() {
    gulp.run('sass', 'watch');
});

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

