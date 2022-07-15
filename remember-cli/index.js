#!/usr/bin/env node

/**
 * remember-cli
 * A cli to remember config files.
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const Conf = require('conf');
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const config = new Conf();
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const name = config.get(`name`);
	console.log(name)
	if (!name) {
		config.set(`name`, `saeed`);
	} else {
		console.log(`The config is ${name}`);
	}
	debug && log(flags);
})();
