import { toSecond } from "../../lib/string-utils";

import { fetchFaqSheets } from "./fetch-faq-sheets";
import { fetchSheets } from "./fetch-sheets";

import chalk from "chalk";
import ora from "ora";

(function fetchWbw() {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright("Fetching all data...")}`).start();

  fetchFaqSheets()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching FAQ done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    })
    .catch((err) => {
      chalk.red(err);
    });

  fetchSheets()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Sheets done in ${chalk.greenBright(end)}`);
    })
    .catch((err) => {
      chalk.red(err);
    });
})();
