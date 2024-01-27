import { writeFile, access, constants } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(rootPath, "files", "fresh.txt");

const text = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  access(filePath, constants.F_OK, (error) => {
    if (!error) throw new Error(errorMessage);
  });
  writeFile(filePath, text, (error) => {
    if (error) throw new Error(error);
  });
};

await create();
