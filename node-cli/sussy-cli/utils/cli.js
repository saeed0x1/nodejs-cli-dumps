const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	joke: {
		type: `boolean`,
		alias: `j`,
		default: false,
		desc: `Fetch a random joke from Edgy API.`
	},
	info: {
		type: `boolean`,
		alias: `i`,
		default: false,
		desc: `Print developer info.`
	},

	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console.`
	},

	noClear: {
		type: `boolean`,
		default: true,
		desc: `Don't clear the console.`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info.`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version.`
	}
};

const commands = {
	help: { desc: `Print help info.` }
};

const helpText = meowHelp({
	name: `edgy-cli`,
	flags,
	commands,
	defaults: false
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);