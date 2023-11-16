/**
 * Add Eleventy template languages here
 * https://www.11ty.dev/docs/languages/custom/
 */

const scss = require('./scss');

module.exports = function (eleventyConfig) {
	// Compile Sass/scss files to CSS using Sass
	eleventyConfig.addTemplateFormats('scss');

	// Creates the extension for use
	eleventyConfig.addExtension('scss', scss);
};
