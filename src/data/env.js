// 11ty's current context
// production or development set in package.json scripts
const environment = process.env.ELEVENTY_ENV;
const DEV_ENV = 'development';
const PROD_ENV = 'production';

// the possible base URLs
const devUrl = 'http://localhost:8080';
const prodUrl = 'https://slay.sh';

// useful for env-specific template conditionals
const isDevelopment = environment === DEV_ENV;
const isProduction = environment === PROD_ENV;

// set the baseUrl according to the environment
let baseUrl;
if (isProduction) {
	baseUrl = prodUrl;
} else {
	baseUrl = devUrl;
}

// the current branch name and Netlify deploy context
const branch = process.env.BRANCH;
const context = process.env.CONTEXT;

// current timestamp
const timestamp = new Date();

module.exports = {
	environment,
	devUrl,
	prodUrl,
	baseUrl,
	isDevelopment,
	isProduction,
	branch,
	context,
	timestamp,
};
