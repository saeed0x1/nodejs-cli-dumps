const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	path:{
		type:'string',
		alias:"p",
		desc:"Input file name or Path to images."
	},
	width:{
		type:"number",
		alias:"w",
		desc:"Set width of the image"
	},

	quality:{
		type:"number",
		alias:"q",
		desc:"Set quality of the image."
	},

	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `roi`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
