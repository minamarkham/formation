/**
 * Add Eleventy watch targets here
 * https://www.11ty.dev/docs/watch-serve/
 */

module.exports = function (eleventyConfig) {
	// Watch for changes to files in the assets directory
	eleventyConfig.addWatchTarget('./src/assets/');
};
