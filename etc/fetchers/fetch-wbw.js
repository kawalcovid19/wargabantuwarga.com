const ora = require("ora");
const chalk = require("chalk");

const { fetchDocs } = require("./fetch-docs");
const { fetchSheets } = require("./fetch-sheets");
const { fetchFaqSheets } = require("./fetch-faq-sheets");

function toSecond(hrtime) {
  return (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
}

(function fetchWbw() {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright("Fetching all data...")}`).start();

  fetchFaqSheets().then(() => {
    const end = `${toSecond(process.hrtime(start))} seconds`;
    spinner.succeed(`Fetching FAQ done in ${chalk.greenBright(end)}`);
    spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
  });

  fetchDocs().then(() => {
    const end = `${toSecond(process.hrtime(start))} seconds`;
    spinner.succeed(`Fetching Docs done in ${chalk.greenBright(end)}`);
    spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
  });

  fetchSheets().then(() => {
    const end = `${toSecond(process.hrtime(start))} seconds`;
    spinner.succeed(`Fetching Sheets done in ${chalk.greenBright(end)}`);
  });
})();
