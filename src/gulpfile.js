// Modules installés
const gulp = require("gulp")
const sass = require("gulp-sass")
const uglify = require("gulp-uglify")
const pug = require("gulp-pug")
const reload = require("gulp-livereload")
const connect = require("gulp-connect")
const open = require("gulp-open")
const image = require('gulp-image')

// Constantes
const outputFolder = "../dist";

gulp.task("default", ["html-output","css-output","js-output","img-output","launch-watcher","launch-server"])

gulp.task("html-output", ["build-pug"])
gulp.task("css-output", ["build-sass"])
gulp.task("js-output", ["copy-js"])
gulp.task("img-output", ["copy-img"])

gulp.task("import-vendors", ["import-bootstrap","import-jquery","import-popperJS"])

gulp.task("launch-watcher", ["pug:watch","sass:watch","js:watch","img:watch"])

gulp.task("launch-server", ["start-server","open-navigator"])

// Watch task
gulp.task("pug:watch",() => {
    reload.listen()
    gulp.watch("html/**/*.pug", ["build-pug"])
})

gulp.task("sass:watch",() => {
    reload.listen()
    gulp.watch("sass/**/*.scss", ["build-sass"])
})

gulp.task("js:watch",() => {
    reload.listen()
    gulp.watch("js/**/*.js", ["copy-js"])
})

gulp.task("img:watch",() => {
    reload.listen()
    gulp.watch("img/*", ["copy-img"])
})

// Server/Nav task

gulp.task("start-server", () => {
    connect.server({
        root: outputFolder,
        port: 8888,
        livereload: true,
        debug: true
    })
})

gulp.task("open-navigator", () => {
    gulp.src(outputFolder + "/index.html")
        .pipe(open({
            uri:"http://localhost:8888/",
            app:"Chrome"}))
})

// HTML task
gulp.task("build-pug",() => {
    gulp.src("html/**/*.pug")
        .pipe(pug())
        .on("error", (error) => {
            console.log(error)
        })
        .pipe(gulp.dest(outputFolder))
        .pipe(reload())
})

// CSS task
gulp.task("build-sass",() => {
    gulp.src("sass/**/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .on("error", (error) => {
            console.log(error)
        })
        .pipe(gulp.dest(outputFolder + "/css"))
        .pipe(reload())
})

// Javascript task
gulp.task("copy-js",() => {
    gulp.src("js/**/*.js")
        .pipe(uglify())
        .on("error", (error) => {
            console.log(error)
        })
        .pipe(gulp.dest(outputFolder + "/js"))
        .pipe(reload())
})

// Vendors task
// Bootstrap
gulp.task("import-bootstrap",() => {
    gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"])
        .pipe(gulp.dest(outputFolder + "/vendors/bootstrap"))
})

gulp.task("import-jquery",() => {
    gulp.src("node_modules/jquery/dist/jquery.slim.min.js")
        .pipe(gulp.dest(outputFolder + "/vendors"))
})

gulp.task("import-popperJS",() => {
    gulp.src("node_modules/popper.js/dist/popper.min.js")
        .pipe(gulp.dest(outputFolder + "/vendors"))
})

// Img task
gulp.task("copy-img",() => {
    gulp.src('img/*')
        .pipe(image())
        .on("error", (error) => {
            console.log(error)
        })
        .pipe(gulp.dest(outputFolder + "/img"))
        .pipe(reload())
})