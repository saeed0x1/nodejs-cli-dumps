#!/usr/bin/env node

/**
 * roi-cli
 * none
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const ora = require("ora");
const globby = require('globby');
const beep = require("beep-cli");
const resizeOptimizeImages = require('resize-optimize-images');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, path, width, quality } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const spinner = ora({text:''})
	if (path) {
		const image = await globby(path);
		
		const options = {
			image,
			width:width?width:1920,
			quality:quality?quality:90
		};

		const startWhich = image.length>1?spinner.start(`Optimizing ${image.length} images..`):spinner.start(`Optimizing ${image.length} image..`);
		await resizeOptimizeImages(options);
		const endWhich = image.length>1?spinner.succeed(`${image.length} images optimized !`):spinner.succeed(`${image.length} image optimized !`)

		beep({
			type:`success`,
			msg:`Optimized successfully ! `,
			name:`DONE`
		})
	
	}
else{
	beep({
		type:"error",
		msg:"You forgot to specify path",
	})
}
	debug && log(flags);
})();
