import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  if (fs.existsSync(`${__dirname}/files/fileToRemove.txt`)) {
    fs.unlink(`${__dirname}/files/fileToRemove.txt`, (err) => {
      if (err) throw err;
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
