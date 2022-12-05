import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { stdout } from "node:process";

const read = async () => {
  const fileStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

  fileStream.pipe(stdout);
};

await read();
