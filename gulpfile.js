const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

// HTML - manager
function copyHtml() {
    return src('src/**/*.html')
        .pipe(dest('dist'))
}

// Sass - manager
function scssTask() {
    return src('src/**/*.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css', {sourcemaps: '.'}))
}

exports.default = series(
    scssTask,
    copyHtml
)