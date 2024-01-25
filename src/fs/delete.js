import { rm } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(rootPath, "files", "fileToRemove.txt");

const errorMessage = "FS operation failed";

const remove = async () => {
  rm(filePath, (error) => {
    if (error) throw new Error(errorMessage);
  });
};

await remove();
