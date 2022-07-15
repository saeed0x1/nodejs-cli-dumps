#!/usr/bin/env node

/**
 * todo-cli
 * a cli to make a todo list
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');
const beep = require('beep-cli');
const chalk = require('chalk');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const ask = require('./utils/ask');
const del = require('./utils/del');

// database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const todoDb = path.join(__dirname, `.todo/todos.json`);

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	// create the local database
	if (!fs.existsSync(todoDb)) {
		await makeDir(`.todo`);
		process.chdir(`.todo`);
		fs.writeFileSync(`todos.json`, `{}`);
	}

	const adapter = new FileSync(todoDb);
	const db = low(adapter);

	db.defaults({ todos: [] }).write();

	// list all todos
	if (input.includes('show') || input.includes('ls')) {
		const allTodos = db.get(`todos`).value();

		allTodos.map((todo, index) =>
			console.log(`${chalk.dim(`${++index}`)}: ${todo.title}`)
		);
		console.log(
			`\n${chalk.hex(`#308f60`).inverse(` TOTAL `)}: ${allTodos.length}\n`
		);
	}

	// add a new todo
	if (input.includes('add')) {
		const addTodo = await ask({ message: `Add a todo` });
		// const noOfTodo = await ask({ number:4 });
		db.get(`todos`).push({ title: addTodo }).write();
		beep({ type: `success`, msg: `successfully !`, name: `Added` });
	}

	// delete a todo
	if (input.includes(`del`)) {
		const allTodos = db.get(`todos`).value();
		const toDel = await del({
			choices: allTodos,
			message: `Finished Todos`
		});
		toDel.map(todoTitle => {
			db.get(`todos`).remove({ title: todoTitle }).write();
			// console.log(`\n${chalk.hex(`#b81b79`).inverse(` Removed Todo `)}:`, todoTitle);
		});
		beep({
			type:`success`,
			msg:`${toDel.length} todos.`,
			name:`FINISHED `
		})
	}

	debug && log(flags);
})();
