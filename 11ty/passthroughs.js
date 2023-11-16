/**
 * Add Eleventy passthrough file copies here
 * https://www.11ty.dev/docs/copy/
 */

module.exports = function (eleventyConfig) {
	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy({ 'src/assets/static/favicons/*': '/' });
	eleventyConfig.addPassthroughCopy({
		'src/assets/static/og-default.jpg': '/og-default.jpg',
	});
};
