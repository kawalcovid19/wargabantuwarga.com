import chalk from "chalk";
import ora from "ora";
import { toSecond } from "../../lib/string-utils";
import { fetchDatabase } from "./fetch-database";
import { fetchFaqSheets } from "./fetch-faq-sheets";
import { fetchLbh } from "./fetch-lbh";
import { fetchVaccinationDatabase } from "./fetch-vaccination-database";

async function fetchWbw() {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright("Fetching all data...")}`).start();

  // Run all fetches in parallel using Promise.allSettled to handle individual failures
  const results = await Promise.allSettled([
    fetchVaccinationDatabase().then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(
        `Fetching vaccination database (vaksinasi.id) done in ${chalk.greenBright(
          end,
        )}`,
      );
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    }),

    fetchFaqSheets().then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching FAQ done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    }),

    fetchDatabase().then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching Database done in ${chalk.greenBright(end)}`);
      spinner.start(`${chalk.yellowBright("Fetching next data...")}`);
    }),

    fetchLbh().then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(`Fetching LBH done in ${chalk.greenBright(end)}`);
    }),
  ]);

  const end = `${toSecond(process.hrtime(start))} seconds`;
  const failures = results.filter((r) => r.status === "rejected");

  if (failures.length > 0) {
    spinner.warn(
      `Fetched data with ${chalk.yellow(
        failures.length,
      )} error(s) in ${chalk.greenBright(end)}`,
    );
    failures.forEach((f) => {
      if (f.status === "rejected") {
        console.error(chalk.red(`  - ${f.reason}`));
      }
    });
    // Don't exit with error - some data may have been fetched successfully
  } else {
    spinner.succeed(
      `All data fetched successfully in ${chalk.greenBright(end)}`,
    );
  }
}

fetchWbw().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
