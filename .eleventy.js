/**
  * @file Configures preferences for Eleventy
  * @author Mina Markham <mina@mina.codes>
  * @see {@link https://www.11ty.dev/docs/config/}

  * Wait! Before you edit this file!
  * This Eleventy-based project abstracts the traditional `.eleventy.js` file to help keep things clean and tidy.
  * Consider editing the following files instead:
  *  - `./11ty/collections.js`
  *  - `./11ty/filters/`
  *  - `./11ty/passthroughs.js`
  *  - `./11ty/plugins/`
  *  - `./11ty/shortcodes/`
  *  - `./11ty/languages/`
  *  - `./11ty/transforms/`
  *  - `./11ty/watchtargets.js`
  */

// Register alias for 711ty options
require('module-alias/register');

// You can now require 711ty options using @711ty
// 711ty options can be found in .seven11ty.js
const seven11ty = require('@711ty');

// Collections are defined as named exports in /11ty/collections.js
const addCollections = require('./11ty/collections');

// Filters are defined as named exports in /11ty/filters/
const addFilters = require('./11ty/filters/');

// Passthroughs and file copies are defined as named exports in /11ty/passthroughs.js
const addPassthroughs = require('./11ty/passthroughs');

// Plugins are defined as named exports in /11ty/plugins/
const addPlugins = require('./11ty/plugins/');

// Shortcodes are defined as named exports in /11ty/shortcodes/
const addShortcodes = require('./11ty/shortcodes/');

// Custom template languages are defined as named exports in /11ty/languages/
const addTemplateLanguages = require('./11ty/languages/');

// Transforms are defined as named exports in /11ty/transforms/
const addTransforms = require('./11ty/transforms/');

// Watch targets are defined as named exports in /11ty/watchtargets.js
const addWatchTargets = require('./11ty/watchtargets');

/**
 * 11ty's configuration module
 * @module .eleventy
 * @param {Object} eleventyConfig 11ty's Config API
 * @return {Object} 11ty's Config object optional
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */

module.exports = function (eleventyConfig) {
	// Register configurations
	addCollections(eleventyConfig);
	addFilters(eleventyConfig);
	addPassthroughs(eleventyConfig);
	addPlugins(eleventyConfig);
	addShortcodes(eleventyConfig);
	addTemplateLanguages(eleventyConfig);
	addTransforms(eleventyConfig);
	addWatchTargets(eleventyConfig);

	// Configure dev server
	// Documentation: https://www.11ty.dev/docs/dev-server/
	eleventyConfig.setServerOptions({
		showAllHosts: true,
	});

	// Enable quiet mode
	// Documentation: https://www.11ty.dev/docs/config/#enable-quiet-mode-to-reduce-console-noise
	eleventyConfig.setQuietMode(true);

	return {
		dir: seven11ty.dir,
		templateFormats: seven11ty.templateFormats,
		markdownTemplateEngine: seven11ty.templateEngine,
	};
};
