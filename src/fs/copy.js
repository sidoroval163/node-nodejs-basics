import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const copy = async () => {
  if (
    !fs.existsSync(`${__dirname}/files_copy/`) ||
    !fs.existsSync(`${__dirname}/files`)
  ) {
    fs.mkdir(`${__dirname}/files_copy`, (err) => {
      if (err) throw err;
    });
    fs.readdir(`${__dirname}/files`, (err, files) => {
      files.forEach((file) => {
        fs.copyFile(
          `${__dirname}/files/${file}`,
          `${__dirname}/files_copy/${file}`,
          (err) => {
            if (err) throw err;
          }
        );
      });
      if (err) throw err;
    });
  } else {
    throw new Error("FS operation failed");
  }
};

copy();
