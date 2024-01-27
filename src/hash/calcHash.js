import { createHash } from 'node:crypto';
import { createReadStream } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const readableStream = createReadStream(sourcePath);
    readableStream.on('data', (data) => {
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    });
};

await calculateHash();