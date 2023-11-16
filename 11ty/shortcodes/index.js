/**
 * Add Eleventy shortcodes here
 * https://www.11ty.dev/docs/shortcodes/
 */

module.exports = function (eleventyConfig) {
	const year = () => `${new Date().getFullYear()}`;

	eleventyConfig.addShortcode('year', year);
};
