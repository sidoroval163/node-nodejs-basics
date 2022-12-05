import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const create = async () => {
  if (!fs.existsSync(`${__dirname}/files/fresh.txt`)) {
    fs.open(`${__dirname}/files/fresh.txt`, "w", (err) => {
      if (err) throw err;
    });
    fs.appendFile(
      `${__dirname}/files/fresh.txt`,
      "I am fresh and young",
      (err) => {
        if (err) throw err;
      }
    );
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
