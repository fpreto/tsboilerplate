import fs from 'fs';
import path from 'path';

let manifestStrCache: any;

export async function getManifest() {
    let manifestStr: string;

    if (manifestStrCache) {
        manifestStr = manifestStrCache;
    } else {
        let manifestPath = path.join(process.cwd(), 'dist', 'statics', 'manifest.json');
        manifestStr = fs.readFileSync(manifestPath, 'utf-8').toString();
        manifestStrCache = manifestStr;
    }
    const manifest = JSON.parse(manifestStr);
    return manifest;
}