import { cpus } from "node:os";
import { Worker } from "worker_threads";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(rootPath, "worker.js");

const performCalculations = async () => {
  const cores = cpus().length;
  const workers = Array.from({ length: cores }, (_, i) => i).map(
    (core) => new Worker(workerPath, { workerData: core + 10 })
  );

  let count = 0;
  workers.forEach((worker) =>
    worker.on("message", (msg) => {
      worker.resultData = msg;
      count++;
      if (count === cores) console.log(workers.map((w) => w.resultData));
    })
  );
};

await performCalculations();
