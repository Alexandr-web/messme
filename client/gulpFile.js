const { dest, parallel, watch, src, } = require("gulp");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

const scssTask = () => {
    return src(["./static/scss/**/*.scss", "!./static/scss/**/_*.scss"])
        .pipe(plumber())
        .pipe(scss({ outputStyle: "expanded", }))
        .pipe(autoprefixer({ cascade: true, overrideBrowserslist: ["last 5 versions"], }))
        .pipe(cleanCss({ level: { 1: { specialComments: 0, }, }, }))
        .pipe(concat("index.css"))
        .pipe(dest("./static/css/"));
};

const watching = () => {
    watch("./static/scss/*", parallel(scssTask));
};

exports.build = parallel(scssTask);
exports.default = parallel(scssTask, watching);