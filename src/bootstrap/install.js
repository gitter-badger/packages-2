const { writeFileSync } = require('fs');

const manifestObject = {
    id: "b237867f-cff8-4063-84b2-c2aadd7fe747",
    name: "Bootstrap",
    icon_url: "https://avatars1.githubusercontent.com/u/2918581?s=200&v=4",
    description: "The world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    versions: [{
        name: "v4.5.2",
        styles: [
            `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>`
        ],
        scripts: [
            `<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js" integrity="sha256-ecWZ3XYM7AwWIaGvSdmipJ2l1F4bN9RXW6zgpeAiZYI=" crossorigin="anonymous"></script>`
        ],
        designer: {
            elements: [
                // Bootstrap Layouts
                {
                    id: "bootstrap-container",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Container</b>`,
                        category: "Bootstrap Layouts",
                        content: `<div class="container"></div>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-row",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Row</b>`,
                        category: "Bootstrap Layouts",
                        content: `<div class="row"></div>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-column",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Column</b>`,
                        category: "Bootstrap Layouts",
                        content: `<div class="col"></div>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-media",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Media</b>`,
                        category: "Bootstrap Layouts",
                        content: `<div class="media">
                                <img class="mr-3" src="https://via.placeholder.com/64x64" alt="Generic Placeholder Image">
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                    <span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span>
                                </div>
                            </div>`,
                        select: true
                    }
                },
                // Bootstrap Content
                {
                    id: "bootstrap-display",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Display</b>`,
                        category: "Bootstrap Content",
                        content: `<h1 class="display-1">Display 1</h1>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-lead",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Lead</b>`,
                        category: "Bootstrap Content",
                        content: `<p class="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-blockquote",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Blockquote</b>`,
                        category: "Bootstrap Content",
                        content: `<blockquote class="blockquote">
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-list-unstyled",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>List Unstyled</b>`,
                        category: "Bootstrap Content",
                        content: `<ul class="list-unstyled">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                </ul>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-list-inline",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>List Inline</b>`,
                        category: "Bootstrap Content",
                        content: `<ul class="list-inline">
                                    <li class="list-inline-item">Lorem ipsum dolor sit amet</li>
                                    <li class="list-inline-item">Consectetur adipiscing elit</li>
                                    <li class="list-inline-item">Integer molestie lorem at massa</li>
                                </ul>`,
                        select: true
                    }
                },
                // Bootstrap Images
                {
                    id: "bootstrap-img-fluid",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Image Fluid</b>`,
                        category: "Bootstrap Images",
                        content: `<img src="https://via.placeholder.com/782x250" class="img-fluid" alt="Responsive Image">`,
                        select: true,
                        activate: true,
                    }
                },
                {
                    id: "bootstrap-img-thumbnail",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Image Thumbnail</b>`,
                        category: "Bootstrap Images",
                        content: `<img src="https://via.placeholder.com/250x250" class="img-thumbnail" alt="Responsive Image">`,
                        select: true,
                        activate: true,
                    }
                }
            ]
        },
        dependencies: [
            "fde6b9d5-595f-4b86-9845-776db87d96d3",
            "3452e6f8-9e43-4690-b110-79f119f8fbcb"
        ]
    }]
}
writeFileSync(`manifest.json`, JSON.stringify(manifestObject));