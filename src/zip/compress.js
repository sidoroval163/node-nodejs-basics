import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createGzip } from "node:zlib";

import * as fs from "fs";
const compress = async () => {
  const gzip = createGzip();
  const source = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
  const destination = fs.createWriteStream(`${__dirname}/files/archive.gz`);
  source.pipe(gzip).pipe(destination);
};

await compress();
