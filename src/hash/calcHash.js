import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const hash = createHash("sha256");
  fs.readFile(
    `${__dirname}/files/fileToCalculateHashFor.txt`,
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      hash.write(data);
      hash.end();
    }
  );

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });
};

await calculateHash();
