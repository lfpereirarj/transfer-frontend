const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('src/**/*.pug', () => gulp.start('src.pug'))
    watch('src/**/*.css', () => gulp.start('src.css'))
    watch('src/**/*.js', () => gulp.start('src.js'))
    watch('assets/**/*.*', () => gulp.start('src.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public')
    .pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))
})