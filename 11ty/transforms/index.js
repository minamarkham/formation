/**
 * Add Eleventy transforms here
 * https://www.11ty.dev/docs/config/#transforms
 */

const htmlmin = require('./htmlmin');

module.exports = function (eleventyConfig) {
	eleventyConfig.addTransform('htmlmin', htmlmin);
};
