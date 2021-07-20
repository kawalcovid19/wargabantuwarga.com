import { fetchDocs } from "./fetch-docs";
import { fetchFaqSheets } from "./fetch-faq-sheets";
import { fetchSheets } from "./fetch-sheets";

import chalk from "chalk";
import ora from "ora";

function toSecond(hrtime: [number, number]): string {
  return (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
}

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
      console.error(err);
    });

  fetchDocs()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Docs done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    })
    .catch((err) => {
      console.error(err);
    });

  fetchSheets()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Sheets done in ${chalk.greenBright(end)}`);
    })
    .catch((err) => {
      console.error(err);
    });
})();
