import { createReadStream } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "fileToRead.txt");

const read = async () => {
  const readableStream = createReadStream(sourcePath);
  readableStream.on("data", (data) => {
    process.stdout.write(data + "\n");
  });
};

await read();
