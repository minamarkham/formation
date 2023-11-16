/**
  * @file Configures preferences for 711ty
  * @author Mina Markham <mina@mina.codes>
  * @see {@link https://www.11ty.dev/docs/config/}

  * 711ty options can be required using @711ty
  * See .eleventy.js for more information
  */

module.exports = {
	// Directory structure
	dir: {
		input: 'src',
		output: 'www',
		includes: 'views',
		layouts: 'views/layouts',
		data: 'data',
		// ⬇ only 711ty uses these
		assets: 'assets',
		styles: 'assets/styles',
		images: 'assets/images',
	},

	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: ['md', 'njk'],

	// Pre-process files with: (default: `liquid`)
	templateEngine: 'njk',
};
