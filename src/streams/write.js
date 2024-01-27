import { createWriteStream } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const destPath = path.join(rootPath, "files", "fileToWrite.txt");

const write = async () => {
    const writableStream = createWriteStream(destPath);
    process.stdin.pipe(writableStream);
};

await write();