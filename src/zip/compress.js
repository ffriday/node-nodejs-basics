import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "fileToCompress.txt");
const destPath = path.join(rootPath, "files", "archive.gz");

const compress = async () => {
    const src = createReadStream(sourcePath);
    const dest = createWriteStream(destPath);
    const gzip = createGzip();
    pipeline(src, gzip, dest, (err) => {
        if (err) console.log(err);
    });
};

await compress();