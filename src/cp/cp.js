import { spawn } from 'node:child_process';
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
const childPath = path.join(rootPath, 'files', "script.js");

const spawnChildProcess = async (args) => {
    const child = spawn('node', [childPath, ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['fgs', 'fds']);