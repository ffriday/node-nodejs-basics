import { readFile } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "fileToRead.txt");

const errorMessage = "FS operation failed";

const read = async () => {
  readFile(sourcePath, (error, text) => {
    if (error) throw new Error(errorMessage);
    console.log(text.toString());
  });
};

await read();
