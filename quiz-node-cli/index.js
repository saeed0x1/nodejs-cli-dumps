#!/usr/bin/env node

/**
 * quiz-node-cli
 * A cli for quiz.
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const { Quiz } = require("enquirer");
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const prompt = new Quiz({
		name: 'Main character',
		message: 'Who is the main character of Death Note?',
		choices: ['Luffy', 'Naruto', 'Light', 'Goku'],
		correctChoice: 2
	  });
	   
	   prompt
		.run()
		.then(answer => {
		  if (answer.correct) {
			console.log('Correct!');
		  } else {
			console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
		  }
		})
		.catch(console.error);

	debug && log(flags);
})();
