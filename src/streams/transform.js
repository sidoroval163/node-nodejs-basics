import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";

const transform = async () => {
  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  stdin
    .on("data", (_data) => {})
    .pipe(uppercase)
    .pipe(stdout);
};

await transform();
