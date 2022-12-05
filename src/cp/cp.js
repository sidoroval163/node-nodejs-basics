import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = fork(`${__dirname}/files/script.js`, [...args.split(" ")]);

  child.on("message", function (m) {
    console.log("Parent process received:", m);
  });

  child.send({ hello: "from parent process" });
};

spawnChildProcess("--all --kek");
