const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('assets/sass/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'compact', // expanded, nested, compact, compressed
        }))
        .pipe( gulp.dest('assets/css') );
}

async function watchFiles() {
    gulp.watch('assets/sass/*.scss', css); 
    gulp.watch('index.html');
}


// Registrar funciones como tareas

gulp.task( 'css', css );
gulp.task('watch', gulp.parallel(watchFiles) );
