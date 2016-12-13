var gulp = require('gulp');
var jade = require('gulp-jade');
 
// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('jade', function() {
    return gulp.src('app/templates/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('app')); // указываем gulp куда положить скомпилированные HTML файлы
});
gulp.task('task-name', function () {
  return gulp.src('source-files') // получаем источники с помощью gulp.src
    .pipe(aGulpPlugin()) // прогоняем их через плагин
    .pipe(gulp.dest('dist')) // dist
})

