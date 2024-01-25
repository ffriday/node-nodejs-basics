import { mkdir, access, constants, readdir, copyFile } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files");
const destPath = path.join(rootPath, "files_copy");

const errorMessage = "FS operation failed";

const copy = async () => {
  access(destPath, constants.F_OK, (error) => {
    if (!error) throw new Error(errorMessage);
  });
  mkdir(destPath, (error) => {
    if (error) throw new Error(error);
  });
  readdir(sourcePath, (error, files) => {
    if (error) throw new Error(error);
    files.forEach((name) => {
      const src = path.join(sourcePath, name);
      const dest = path.join(destPath, name);
      copyFile(src, dest, (error) => {
        if (error) throw new Error(error);
      });
    });
  });
};

await copy();
