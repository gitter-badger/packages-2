const { readdirSync, existsSync, readFileSync, writeFileSync } = require('fs');
const { exec } = require("child_process");

const manifestObject = { packages: [] };

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
getDirectories('src').map(dir => {
    const packageManifestPath = `src/${dir}/manifest.json`;
    const packageInstallPath = `src/${dir}/install.js`;
    if (existsSync(packageInstallPath)) {
        exec(`node ${packageInstallPath}`);
    }
    if (existsSync(packageManifestPath)) {
        const packageManifestObject = JSON.parse(readFileSync(packageManifestPath));
        manifestObject.packages.push(packageManifestObject);
    }
});

writeFileSync(`src/manifest.json`, JSON.stringify(manifestObject));