const { Input } = require('enquirer');
const shouldCancel = require('cli-should-cancel');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

module.exports = async ({ message,number }) => {
	const [err, response] = await to(
		new Input({
			message,
            number,
			validate(value) {
				return !value ? `Enter a value` : true;
			}
		}).on("cancel",()=>shouldCancel())
        .run()
	);
    handleError(`Error : `, err);
    return response;
};
