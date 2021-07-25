import { toSecond } from "../lib/string-utils";

import chalk from "chalk";
import fetch from "cross-fetch";
import fs from "fs";
import ora from "ora";
import path from "path";

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

(function main() {
  void mirror("wbw.json");
  void mirror("wbw-faq-sheets.json");
  void mirror("wbw-sheets.json");
})();
