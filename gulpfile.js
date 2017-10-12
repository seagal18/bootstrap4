// 必要なプラグインを読み込む
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = {
    sassOptions: {
        outputStyle: 'expanded'
    }
}

// コンパイルタスク
gulp.task('sass', function() {
    gulp.src('scss/bootstrap.scss')
        .pipe(sass(config.sassOptions))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css/'));
});

// 監視タスク
gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
});