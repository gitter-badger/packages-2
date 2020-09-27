const { writeFileSync } = require('fs');

const manifestObject = {
    id: "3452e6f8-9e43-4690-b110-79f119f8fbcb",
    name: "jQuery",
    icon_url: "https://avatars0.githubusercontent.com/u/70142?s=200&v=4",
    description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.",
    versions: [{
        name: "v3.5.1",
        scripts: [
            `<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>`
        ]
    }]
}

for (index = 0; index < manifestObject.versions.length; ++index) {
    if (manifestObject.versions[index].plugin) {
        manifestObject.versions[index].plugin = manifestObject.versions[index].plugin.toString();
    }
}

writeFileSync(`manifest.json`, JSON.stringify(manifestObject));