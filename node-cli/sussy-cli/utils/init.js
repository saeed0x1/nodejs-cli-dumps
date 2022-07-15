const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `edgy-cli`,
		tagLine: `by Saeed`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#2f7555',
		color: '#000000',
		bold: true,
		clear:false
	});
};
