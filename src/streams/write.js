import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { stdin } from "node:process";

const write = async () => {
  const fileStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

  stdin.on("data", (chunk) => {
    fileStream.write(chunk);
    fileStream.end();
  });
};

await write();
