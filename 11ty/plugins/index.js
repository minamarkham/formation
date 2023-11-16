/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */

const metagen = require('eleventy-plugin-metagen');
const rollup = require('eleventy-plugin-rollup');
const critical = require('eleventy-critical-css');

const rollupConfig = require('./rollup');

// 711ty options from .seven11ty.js
const seven11ty = require('@711ty');
const env = require('../../src/data/env');

module.exports = function (eleventyConfig) {
	// Metagen plugin
	// https://github.com/tannerdolby/eleventy-plugin-metagen
	eleventyConfig.addPlugin(metagen);

	// Rollup plugin to bundle JavaScript
	// https://github.com/Snapstromegon/eleventy-plugin-rollup
	eleventyConfig.addPlugin(rollup, rollupConfig);

	// Extract and inline critical CSS in production
	// Documentation: https://github.com/gregives/eleventy-critical-css
	if (env.isProduction) {
		eleventyConfig.addPlugin(critical, {
			base: seven11ty.dir.output,
		});
	}
};
