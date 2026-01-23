import chalk from "chalk";
import ora from "ora";
import { toSecond } from "../../lib/string-utils";
import { fetchDatabase } from "./fetch-database";

(function fetchDatabaseOnly() {
  const start = process.hrtime();
  const spinner = ora(
    `${chalk.yellowBright("Fetching database from Google Sheets...")}`,
  ).start();

  fetchDatabase()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Database done in ${chalk.greenBright(end)}`);
    })
    .catch((err) => {
      spinner.fail(`Error fetching database: ${chalk.red(err.message)}`);
      console.error(err);
      process.exit(1);
    });
})();
