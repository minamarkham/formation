const path = require('path');
const sass = require('sass');

module.exports = {
	// Set the output file extension
	outputFileExtension: 'css',

	// Compile should return a string
	compile: function (contents, inputPath) {
		let parsed = path.parse(inputPath);
		if (parsed.name.startsWith('_')) {
			return;
		}
		let includesPaths = [this.config.dir.includes];
		return (data) => {
			let result = sass.renderSync({
				file: inputPath,
				includesPaths,
				data: contents,
				outputStyle: 'compressed',
			});
			return result.css.toString('utf8');
		};
	},
};
