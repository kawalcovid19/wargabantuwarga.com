import chalk from "chalk";
import ora from "ora";
import { toSecond } from "../../lib/string-utils";
import { fetchDatabase } from "./fetch-database";
import { fetchFaqSheets } from "./fetch-faq-sheets";
import { fetchLbh } from "./fetch-lbh";
import { fetchSheets } from "./fetch-sheets";
import { fetchVaccinationDatabase } from "./fetch-vaccination-database";

(function fetchWbw() {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright("Fetching all data...")}`).start();

  fetchVaccinationDatabase()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(
        `Fetching vaccination database (vaksinasi.id) done in ${chalk.greenBright(
          end,
        )}`,
      );
    })
    .catch((err) => {
      chalk.red(err);
    });

  fetchFaqSheets()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching FAQ done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    })
    .catch((err) => {
      chalk.red(err);
    });

  fetchDatabase()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Database done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    })
    .catch((err) => {
      chalk.red(err);
    });

  fetchLbh()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching LBH done in ${chalk.greenBright(end)}`);
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
