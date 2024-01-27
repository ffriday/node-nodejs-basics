import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const data = nthFibonacci(workerData);
    parentPort.postMessage({ status: "resolved", data });
  } catch {
    parentPort.postMessage({ status: "error", data: null });
  }
};

sendResult();
