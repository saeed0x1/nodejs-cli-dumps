const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `roi-cli`,
		tagLine: `by Saeed`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#29a37e',
		color: '#000000',
		bold: true,
		clear:false
	});
};
