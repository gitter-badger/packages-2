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
            `<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.min.js" integrity="sha256-ecWZ3XYM7AwWIaGvSdmipJ2l1F4bN9RXW6zgpeAiZYI=" crossorigin="anonymous"></script>`,
            `<script>
                $(document).ready(function() {
                    // Initialize Alerts
                    $('.alert').alert();
                });
            </script>`
        ],
        designer: {
            elements: [
                // Bootstrap Layouts
                {
                    id: "bootstrap-container",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M106.2,20.9H90.7H63.5h-0.1h-6.9H31.7h-0.3H12H7.2V21v17.5v0.1v6.9v46.8V99H12h1h0.9h13.8h1.8h2.2h24.9h0.3h6.7h26.2v0.1h0.9h17.4V99h4.8v-0.1V27.6v-6.7H106.2z M56.5,92H31.7v-9.4V62.5v-0.1v-5.1V27.9h24.9h7h26.4v29.5v5.2v20.1V92H63.5H56.5z"/>
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
                                    <path d="M112.9,25.6v-4.7h-6.7H90.7H63.5h-0.1h-6.9H7.2V21v17.5v0.1v6.9v46.8V99h6.7h13.8h1.8h27h0.3h6.7h29.4h20v-0.1V44h0v-0.3L112.9,25.6L112.9,25.6z M105.9,45.5v30.8h-0.7v0.1H63.5h-6.9H29.9h-15v-0.1h-0.7V45.5V44h1.3h15.3h26.7h0.1h6.8h41.6V45.5z"/>
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
                                    <path d="M106.2,20.9H90.7H63.5h-0.1h-6.9H31.7h-0.3H12H7.2V21v17.5v0.1v6.9v46.8V99H12h1h0.9h13.8h1.8h2.2h24.9h0.3h6.7h26.2v0.1h0.9h17.4V99h4.8v-0.1V27.6v-6.7H106.2z M63.5,92h-7h-16V27.9h16.1h7h17.5V92H63.5z"/>
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
                                    <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
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
                                    <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
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
                                    <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
                                </svg>
                                <br/>
                                <b>Image Thumbnail</b>`,
                        category: "Bootstrap Images",
                        content: `<img src="https://via.placeholder.com/250x250" class="img-thumbnail" alt="Responsive Image">`,
                        select: true,
                        activate: true,
                    }
                },
                {
                    id: "bootstrap-figure",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
                                </svg>
                                <br/>
                                <b>Bootstrap Figure</b>`,
                        category: "Bootstrap Figure",
                        content: `<figure class="figure">
                                    <img src="https://via.placeholder.com/400x300" class="figure-img img-fluid rounded" alt="...">
                                    <figcaption class="figure-caption">A caption for the above image.</figcaption>
                                </figure>`,
                        select: true,
                        activate: true,
                    }
                },
                // Bootstrap Components
                {
                    id: "bootstrap-alert",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Alert</b>`,
                        category: "Bootstrap Components",
                        content: `<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-alert-link",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Alert Link</b>`,
                        category: "Bootstrap Components",
                        content: `<a href="#" class="alert-link">an example link</a>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-alert-heading",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Alert Heading</b>`,
                        category: "Bootstrap Components",
                        content: `<h4 class="alert-heading">Well done!</h4>`,
                        select: true
                    }
                },
                {
                    id: "bootstrap-alert-dismissable",
                    element: {
                        label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                            </svg>
                            <br/>
                            <b>Dismissable Alert</b>`,
                        category: "Bootstrap Components",
                        content: `<div class="alert alert-primary" role="alert">
                                        A simple primary alert—check it out!
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`,
                        select: true
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