var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve-dev', function () {
    browserSync.init({
        server: {
            baseDir: './src/'
        },
        port: 8080
    });
    gulp.watch('src/*.js', browserSync.reload);
    gulp.watch('src/*.css', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
});
