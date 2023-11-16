const cleancss = require('clean-css');
const uglify = require('uglify-js');
const htmlmin = require('html-minifier');
const beautify = require('js-beautify');
const env = require('../src/data/env');

// Use beautify in development
// Options: https://github.com/beautify-web/js-beautify
const BEAUTIFY_OPTIONS = {
	extra_liners: [],
	indent_inner_html: true,
	indent_size: 2,
	max_preserve_newlines: 1,
};

function minifyCSS(content, type) {
	// Ignore inline and media types
	if (['media', 'inline'].includes(type)) return content;

	if (env.isProduction) {
		// clean-css
		// Options: https://github.com/jakubpawlowicz/clean-css
		return new cleancss({
			level: {
				1: {
					specialComments: 0,
				},
				2: true,
			},
		}).minify(content).styles;
	} else {
		return beautify.css(content, BEAUTIFY_OPTIONS);
	}
}

function minifyJS(content) {
	if (env.isProduction) {
		// uglify
		// Options: https://github.com/mishoo/UglifyJS
		return uglify.minify(content).code;
	} else {
		return beautify.js(content, BEAUTIFY_OPTIONS);
	}
}

function minifyHTML(content) {
	if (env.isProduction) {
		// html-minifier
		// Options: https://github.com/kangax/html-minifier
		return htmlmin.minify(content, {
			collapseBooleanAttributes: true,
			collapseInlineTagWhitespace: true,
			collapseWhitespace: true,
			conservativeCollapse: true,
			minifyCSS,
			minifyJS,
			removeComments: true,
			useShortDoctype: true,
		});
	} else {
		return beautify.html(content, BEAUTIFY_OPTIONS);
	}
}

module.exports = {
	css: minifyCSS,
	js: minifyJS,
	html: minifyHTML,
};
