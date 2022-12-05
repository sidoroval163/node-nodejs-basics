import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  if (
    fs.existsSync(`${__dirname}/files/wrongFilename.txt`) ||
    !fs.existsSync(`${__dirname}/files/properFilename.md`)
  ) {
    fs.rename(
      `${__dirname}/files/wrongFilename.txt`,
      "src/fs/files/properFilename.md",
      (err) => {
        if (err) throw err;
      }
    );
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
