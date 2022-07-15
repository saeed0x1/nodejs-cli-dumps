const chalk = require("chalk");
// const italicStyle = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).inverse;
const instagramClr = chalk.hex(`#c13584`).inverse;
const linkedinClr = chalk.hex(`#00a98f`).inverse;


const Intro = `
${chalk.cyanBright(
`Noting much to tell about myself, just a nerd who wants to learn every technology out there. 🐧`
)}\n

🐤 ${twitterClr(` Twitter `)} ${chalk.dim(`https://www.twitter.com/zerodayrat`)}
💬 ${instagramClr(` Instagram `)} ${chalk.dim(`https://www.instagram.com/zerodayrat`)}
🙌 ${linkedinClr(` Linkdin `)} ${chalk.dim(`https://www.linkedin.com/zerodayrat`)}
`;

module.exports = {
    Intro
}