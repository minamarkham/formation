const htmlmin = require('html-minifier');

// Minify HTML output
module.exports = function (content) {
	// Eleventy 1.0+: use this.inputPath and this.outputPath instead
	if (this.outputPath && this.outputPath.endsWith('.html')) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true,
			preserveLineBreaks: true,
			removeEmptyElements: true,
		});
		return minified;
	}
	return content;
};
