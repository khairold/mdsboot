var gulp = require('gulp');
var inject = require("gulp-inject");
var mainBowerFiles = require('main-bower-files');
var connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
        root: './app',
        port: 8888,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./app/index.html'], ['html']);
    gulp.watch(['./bower.json'], ['main-bower']);
});

gulp.task('main-bower',['main-bower-index','main-bower-lib']);

gulp.task('main-bower-lib', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./app/lib'));
});

gulp.task('main-bower-index', function() {
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src(mainBowerFiles()).pipe(gulp.dest('./app/lib')), {relative: true, name: 'bower'}))
        .pipe(gulp.dest('./app'));
});

gulp.task('ctrl-index', function() {
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src('./app/controllers/**/*'), {relative: true, name: 'controllers'}))
        .pipe(gulp.dest('./app'));
});

gulp.task('bower', ['main-bower-lib', 'main-bower-index']);
gulp.task('devserve', ['connect', 'watch']);