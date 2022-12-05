import * as fs from "fs";
import * as zlib from "zlib";

const decompress = async () => {
  const fileContents = fs.createReadStream(`${__dirname}/files/archive.gz`);
  const writeStream = fs.createWriteStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  const unzip = zlib.createGunzip();

  fileContents.pipe(unzip).pipe(writeStream);
};

await decompress();
