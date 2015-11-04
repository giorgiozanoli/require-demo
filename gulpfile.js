var gulp        = require('gulp'),
    requirejs   = require('requirejs'),
    htmlmin     = require('gulp-htmlmin');
    htmlreplace = require('gulp-html-replace');

gulp.task("requirejs", function (done) {
    requirejs.optimize({
        "baseUrl": 'dev/scripts/lib',
        //"generateSourceMaps": true,
        "include": [
            "../../../vendor/requirejs/require",
        ],
        "name" : '../main',
        "optimize": "uglify2",
        "out": 'dist/main-build.js',
        "paths": {
          "jquery" : '../../../vendor/jquery/dist/jquery',
          "lodash" : '../../../vendor/lodash/lodash'
        },
        // for source maps
        "preserveLicenseComments": false,
        "wrapShim": false
    }, function () {
        done();
    }, done);
});

gulp.task('default', ['requirejs'], function(){
  gulp.src('dev/index.htm')
    .pipe(htmlreplace({'requirejs': 'main-build.js'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});
