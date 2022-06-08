const gulp = require('gulp')
const {series} = require('gulp')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){

    // pego todos os arquivos .js
    gulp.src('src/**/*.js')

    // usando babel retiro os comentario e atualizo pra versão mais atual
    .pipe(babel({
        comments: false,
        presets: ["env"],
    }))

    // junta tudo em uma linha com unglify
    .pipe(uglify())

    // cria o arquivo compactado
    .pipe(concat('codigo.min.js'))

    // manda pro destino  
    .pipe(gulp.dest('build'))

    return cb()
}


module.exports.default = series(
    padrao
)

