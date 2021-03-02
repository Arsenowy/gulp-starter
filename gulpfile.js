const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    //1 where is scss
    return gulp.src('./src/sass/**/*.scss')
        //2 pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
        //3 where do i save the complied css?
        .pipe(gulp.dest('./css/'))
        //4 stream changed to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;