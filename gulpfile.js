const babel = require("gulp-babel");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const rollup = require("rollup");
const terser = require("rollup-plugin-terser");
const postcss = require("gulp-postcss");
const stylelint = require("gulp-stylelint");
const inlineSource = require("gulp-inline-source");
const replace = require("gulp-replace");

const sourceFolder = "source/";
const buildFolder = "docs/";
const jsFiles = `${sourceFolder}js/index.js`;
const cssFiles = `${sourceFolder}css/index.css`;
const jsDist = `${buildFolder}js/`;
const cssDist = `${buildFolder}css/`;
const htmlFile = "index.html";

gulp.task("inline:css", () => {
  return gulp
    .src(htmlFile)
    .pipe(gulp.dest(buildFolder))
    .pipe(replace(sourceFolder, ""))
    .pipe(
      inlineSource({
        compress: false
      })
    )
    .pipe(gulp.dest(buildFolder));
});

gulp.task("lint:js", () =>
  gulp
    .src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task("lint:css", () => {
  return gulp.src(cssFiles).pipe(
    stylelint({
      reporters: [{ formatter: "string", console: true }]
    })
  );
});

gulp.task("watch:lint:js", () => {
  gulp.watch(jsFiles, gulp.parallel("lint:js"));
});

gulp.task("watch:lint:css", () => {
  gulp.watch(cssFiles, gulp.parallel("lint:css"));
});

gulp.task("build:js", () => {
  return rollup
    .rollup({
      input: jsFiles,
      plugins: [babel(), terser.terser()]
    })
    .then(bundle => {
      return bundle.write({
        file: `${jsDist}/index.js`,
        format: "umd",
        name: "library",
        sourcemap: true
      });
    });
});

gulp.task("build:css", () =>
  gulp
    .src(cssFiles, { sourcemaps: true })
    .pipe(postcss())
    .pipe(gulp.dest(cssDist, { sourcemaps: "../" }))
);

gulp.task("clean", () => {
  return del([`${buildFolder}**/*`]);
});

gulp.task("delete:css", () => {
  return del(cssDist);
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("build:js", "build:css"),
    "inline:css",
    "delete:css"
  )
);
gulp.task("default", gulp.parallel("watch:lint:js", "watch:lint:css"));
