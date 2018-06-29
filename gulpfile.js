var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('dummy-html')
    .pipe(webserver({
      port: 8001,
      directoryListing: false,
      open: true,
      middleware: function (req, res, next) {
        console.log(req.url);
        next();
      }
    }));
});

gulp.task('redirect', function() {
  gulp.src('dummy-html')
    .pipe(webserver({
      port: 8001,
      directoryListing: false,
      open: true,
      middleware: function (req, res, next) {
        console.log(req.url);
        if (req.url.startsWith('/third.html')) {
          res.writeHead(301, {'Location': '/another.html'});
            res.end()
        } else {
          next();
        }
      }
    }));
});
