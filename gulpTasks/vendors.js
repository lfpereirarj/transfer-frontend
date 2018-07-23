const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('vendors', ['vendors.css', 'vendors.js', 'vendors.fonts'])

gulp.task('vendors.css', () => {
    return gulp.src([
        'node_modules/@chenfengyuan/datepicker/dist/datepicker.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/fontisto/css/fontisto/fontisto.min.css',
        
    ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('vendors.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/@chenfengyuan/datepicker/dist/datepicker.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ])
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('vendors.fonts', function() {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/fontisto/fonts/**/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
    .pipe(gulp.dest('public/assets/fonts'))
})