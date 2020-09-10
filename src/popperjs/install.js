const { writeFileSync } = require('fs');

const manifestObject = {
    id: "fde6b9d5-595f-4b86-9845-776db87d96d3",
    name: "Popper JS",
    icon_url: "https://avatars0.githubusercontent.com/u/58035617?s=200&v=4",
    description: "Given an element, such as a button, and a tooltip element describing it, Popper will automatically put the tooltip in the right place near the button.",
    versions: [{
            name: "v1.16.1-lts",
            scripts: [
                `<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1-lts/dist/umd/popper.min.js" integrity="sha256-/ijcOLwFf26xEYAjW75FizKVo5tnTYiQddPZoLUHHZ8=" crossorigin="anonymous"></script>`
            ]
        },
        {
            name: "v2.0.0-next.1",
            scripts: [
                `<script src="https://cdn.jsdelivr.net/npm/popper.js@2.0.0-next.1/dist/cjs/index.min.js"></script>`
            ]
        }
    ]
};
writeFileSync(`manifest.json`, JSON.stringify(manifestObject));