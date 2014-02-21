var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    order = require('gulp-autoprefixer')
    ;

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('css/**/*', ['styles']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('img/**/*', ['images']);
  
  //Watch public files
  gulp.watch('public/**/*', ['public']);

});

gulp.task('public', function() {
    return gulp.src(['public/*'])
        .pipe(gulp.dest('dist/'))
        .pipe(notify({message: 'Public files copied', onLast: true }));
});

gulp.task('styles', function() {
  // return gulp.src('src/styles/main.scss')
  //   .pipe(sass({ style: 'expanded' }))
  //   .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  //   .pipe(gulp.dest('dist/assets/css'))
  //   .pipe(rename({suffix: '.min'}))
  //   .pipe(minifycss())
  //   .pipe(gulp.dest('dist/assets/css'))
  //   .pipe(notify({ message: 'Styles task complete' }));

  return gulp.src('css/**/*')
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({message: 'Styles task complete', onLast: true}));
});

gulp.task('scripts', function() {
  // return gulp.src(['js/*.js', 'js/script.js'])
  return gulp.src([
        'js/enquire.min.js',
        'js/custom.modernizr.js',
        'js/jquery-1.8.1.min.js',
        'js/jquery-ui-1.8.22.custom.min.js',
        'js/jquery.imagesloaded.min.js',
        'js/video.js',
        'js/bigvideo.js',
        'js/jquery.transit.min.js',
        'js/jquery.fitvids.js',
        'js/jquery.scrollspy.min.js',
        'js/custom.bigvideo.js',
        'js/custom.mobilepar.js',
        'js/custom.scroller.js',
        'js/responsiveslides.min.js',
        'js/script.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete', onLast: true }));
});

gulp.task('clean', function() {
  return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img', 'dist/'], {read: false})
        .pipe(clean())
        .pipe(notify({ message: 'Dist directory cleaned', onLast: true }));
});

gulp.task('default', ['clean'], function() {
        gulp.start('scripts', 'styles', 'public', 'images');
        // gulp.start('styles', 'scripts', 'images');
});