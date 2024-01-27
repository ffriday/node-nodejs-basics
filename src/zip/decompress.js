import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(rootPath, "files", "archive.gz");
const destPath = path.join(rootPath, "files", "fileToCompress.txt");

const decompress = async () => {
    const src = createReadStream(sourcePath);
    const dest = createWriteStream(destPath);
    const gunzip = createGunzip();
    pipeline(src, gunzip, dest, (err) => {
        if (err) console.log(err);
    });
};

await decompress();