const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const pug = require('gulp-pug')

gulp.task('src', ['src.pug', 'src.css', 'src.js', 'src.assets'])

gulp.task('src.pug', () => {
    return gulp.src('src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('public'))

})


gulp.task('src.css', () => {
    return gulp.src('src/**/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})


gulp.task('src.js', () => {
    return gulp.src('src/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})


gulp.task('src.assets', () => {
   return gulp.src('assets/**/*.*')
   .pipe(gulp.dest('public/assets')) 
})