const { MultiSelect } = require('enquirer');
const shouldCancel = require('cli-should-cancel');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

module.exports = async ({ message, choices }) => {
	const [err, response] = await to(
		new MultiSelect({
			message,
			choices,
			hint:`\nUse (space) to select and enter to submit.`,
			validate(value) {
				return  value.length === 0 ? `Please select a todo` : true;
			}
		}).on("cancel",()=>shouldCancel())
        .run()
	);
    handleError(`Error : `, err);
    return response;
};
