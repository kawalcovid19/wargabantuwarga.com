import fs from "fs";
import path from "path";
import chalk from "chalk";
import fetch from "cross-fetch";
import ora from "ora";
import { toSecond } from "../lib/string-utils";
import { fetchDatabase } from "./fetchers/fetch-database";

export async function mirror(name: string) {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright(`Mirroring ${name}`)}`).start();
  const source = await fetch(`https://wbw-box.lucentshard.com/${name}`);
  const text = await source.text();
  fs.writeFile(path.resolve(__dirname, `../data/${name}`), text, () => {
    const end = `${toSecond(process.hrtime(start))} seconds`;
    spinner.succeed(`Finished mirroring ${name} in ${chalk.greenBright(end)}`);
  });
}

export async function mirrorDatabase() {
  const start = process.hrtime();
  const spinner = ora(`${chalk.yellowBright("Mirroring Database")}`).start();
  spinner.start(`${chalk.yellowBright("Fetching next data...")}`);

  fetchDatabase()
    .then(() => {
      const end = `${toSecond(process.hrtime(start))} seconds`;
      spinner.succeed(
        `Finished mirroring Database in ${chalk.greenBright(end)}`,
      );
    })
    .catch((err) => {
      chalk.red(err);
    });
}

(function main() {
  void mirror("wbw-faq-sheets.json");
  void mirror("wbw-sheets.json");
  void mirrorDatabase();
})();
