var gulp=require("gulp");
var uglify=require("gulp-uglify");
var connect=require("gulp-connect");

gulp.task("array",function(){
    gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist"))
})


gulp.task("ser1",function(){
    connect.server({
        root:"",
        port:9999,
        livereload:true
    })
})