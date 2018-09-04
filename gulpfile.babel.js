import { src, dest, watch as watchSrc, parallel, series } from 'gulp'
import del from 'del'
import plumber from 'gulp-plumber'
import cp from 'child_process'

import postcss from 'gulp-postcss'
import sass from 'gulp-sass'
import prefix from 'autoprefixer'

import browserSync from 'browser-sync'

// directories
const SRC = 'src'
const DIST = 'www'

// source file globs
const SCRIPTS_GLOB = `${SRC}/scripts/**/*.js`
const STYLES_GLOB = `${SRC}/styles/**/*.scss`
const FONTS_GLOB = `${SRC}/fonts/**/*`
const IMAGES_GLOB = `${SRC}/images/**/*`
const VIEWS_GLOB = `${SRC}/views/**/*`

// clean the output directory
export const clean = () => {
  return del([DIST])
}

// @TODO decide on script strategy
export const scripts = () => {
  return src(SCRIPTS_GLOB)
    .pipe(dest(`${DIST}/js`))
    .pipe(browserSync.stream())
}

// compile styles
export const styles = () => {
  return src(STYLES_GLOB)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([prefix()]))
    .pipe(dest(`${DIST}/css`))
    .pipe(browserSync.stream())
}

export const images = () => {
  return (
    src(IMAGES_GLOB)
      // @TODO Minify
      .pipe(plumber())
      .pipe(dest(`${DIST}/images`))
      .pipe(browserSync.stream())
  )
}

export const fonts = () => {
  return src(FONTS_GLOB).pipe(dest(`${DIST}/fonts`))
}

export const generate = done => {
  return cp.spawn('eleventy').on('close', code => {
    if (code === 0) {
      browserSync.reload()
      done()
    } else {
      console.error(`build failed with code ${code}`)
      browserSync.notify('build failed 😞')
      done()
    }
  })
}

export const watch = () => {
  browserSync.init({
    logPrefix: 'slay.sh',
    server: DIST
  })
  watchSrc(STYLES_GLOB, styles)
  watchSrc(SCRIPTS_GLOB, scripts)
  watchSrc(VIEWS_GLOB, generate)
  watchSrc(IMAGES_GLOB, images)
  watchSrc(FONTS_GLOB, fonts)
}

const assets = parallel(scripts, styles, fonts, images)
export const dev = series(clean, generate, assets, watch)
export const build = series(clean, generate, assets)

// set bare 'gulp' command to dev
export default dev
