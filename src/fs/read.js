import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  if (fs.existsSync(`${__dirname}/files/fileToRead.txt`)) {
    fs.readFile(`${__dirname}/files/fileToRead.txt`, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
