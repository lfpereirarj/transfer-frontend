const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/vendors')
require('./gulpTasks/server')

gulp.task('default', () => {
    if(util.env.production){
        sequence('vendors', 'src')
    } else {
        sequence('vendors', 'src', 'server')
    }
})