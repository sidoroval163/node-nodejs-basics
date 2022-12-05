import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  if (fs.existsSync(`${__dirname}/files`)) {
    fs.readdir(`${__dirname}/files`, (err, files) => {
      console.log(files);
      if (err) throw err;
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
