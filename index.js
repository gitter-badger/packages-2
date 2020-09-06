const { readdirSync, existsSync, readFileSync, writeFileSync } = require('fs');

const manifestObject = { packages: [] };

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
getDirectories('src').map(dir => {
    const packageManifestPath = `src/${dir}/manifest.json`;
    if (existsSync(packageManifestPath)) {
        const packageManifestObject = JSON.parse(readFileSync(packageManifestPath));
        manifestObject.packages.push(packageManifestObject);
    }
});

writeFileSync(`src/manifest.json`, JSON.stringify(manifestObject));