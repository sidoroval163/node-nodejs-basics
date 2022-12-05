import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const numOfCpus = os.cpus().length;

const performCalculations = async () => {
  function createWorker(number) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(`${__dirname}/worker.js`, {
        workerData: { number },
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }

  async function run() {
    const workerPromises = [];
    for (let i = 0; i < numOfCpus; i++) {
      workerPromises.push(createWorker(10 + i));
    }
    const thread_results = await Promise.allSettled(workerPromises);

    const total = thread_results.map((elem) => ({
      status: elem.status === "fulfilled" ? "success" : "error",
      data: elem.status === "fulfilled" ? elem.value : null,
    }));

    console.log(total);
  }

  run().catch((err) => console.error(err));
};

await performCalculations();
