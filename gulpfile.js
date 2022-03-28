// パッケージをインストール
const gulp = require("gulp");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");

//pug入力先、html出力先を記述
const paths = {
    src: {
        pug: "views/*.pug",
    },
    public: {
        html: "public/html",
    },
};

// setting : Pug Options
const pugOptions = {
    pretty: true,
};

// pugコンパイル
gulp.task("pug", done => {
    gulp
        .src(paths.src.pug)
        .pipe(
            plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
        )
        .pipe(pug(pugOptions))
        .pipe(gulp.dest(paths.public.html));
    done();
});

gulp.task("dev", () => {
    gulp.watch(paths.src.pug, gulp.task("pug"));
});