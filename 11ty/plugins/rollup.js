/**
 * Rollup plugin to bundle JavaScript
 * https://github.com/Snapstromegon/eleventy-plugin-rollup
 */

const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
	// Set a more descriptive shortcode
	shortcode: 'script',
	// Configure the output
	rollupOptions: {
		output: {
			format: 'esm',
			sourcemap: true,
			dir: 'www/assets/scripts',
		},

		// Configure the plugins
		plugins: [
			replace({
				preventAssignment: true,
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			}),
			nodeResolve(),
			terser(),
			commonjs(),
		],
	},
};
