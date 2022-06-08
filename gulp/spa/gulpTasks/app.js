const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


function appHTML(){
    return gulp.src('src/**/*.html') // pega tudo que é html e Minificamos
        .pipe(htmlmin({ collapseWhitespace: true })) // retirar os espaços em branco
        .pipe(gulp.dest('build')) // manda pra build                        

}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({comments: false, presets: ["env"]})) // usando babel retiro os comentario e atualizo pra versão mais atual
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

// registrando uma task
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)


module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}