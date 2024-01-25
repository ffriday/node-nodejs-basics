import { access, constants, rename as nodeRename } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "wrongFilename.txt");
const destPath = path.join(rootPath, "files", "properFilename.md");

const errorMessage = "FS operation failed";

const rename = async () => {
  access(sourcePath, constants.F_OK, (error) => {
    if (error) throw new Error(errorMessage);
  });
  nodeRename(sourcePath, destPath, (error) => {
    if (error) throw new Error(errorMessage);
  });
};

await rename();
