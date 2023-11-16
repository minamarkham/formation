/**
 * Add Eleventy collections here
 * https://www.11ty.dev/docs/collections/
 */

module.exports = function (eleventyConfig) {
	eleventyConfig.addCollection('pages', function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/content/pages/*.md');
	});
};
