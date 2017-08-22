var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon'),
    config = require("./gulpfile.config");

gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report());
});

gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript, config.libraryTypeScriptDefinitions];

    var tsResult = gulp.src(sourceTsFiles).pipe(sourcemaps.init()).pipe(tsProject());
        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts']);
});

gulp.task('develop', ['watch'], function () {
  nodemon({
    script: 'dist/index.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task("default", ['ts-lint', 'compile-ts']);