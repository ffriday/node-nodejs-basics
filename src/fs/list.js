import { mkdir, access, constants, readdir, copyFile } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files");

const errorMessage = "FS operation failed";

const list = async () => {
  readdir(sourcePath, (error, files) => {
    if (error) throw new Error(errorMessage);
    console.log(files);
  });
};

await list();
