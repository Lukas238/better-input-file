var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    package = require('./package.json');
 
     
var config = {
    src: './src',
    dist: './dist',
}
 
var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.description %>\n' +
  ' * @URL <%= package.repository.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');
 

gulp.task('js',function(){
  gulp.src(config.src+'/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest(config.dist))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dist));
});
 
gulp.task('default', ['js']);