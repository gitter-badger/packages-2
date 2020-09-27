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
                    // Intialize Button Toggle
                    $().button('toggle');
                    // Initialize Carousel
                    $('.carousel').carousel();
                    // Initialize Dropdown
                    $('.dropdown-toggle').dropdown();
                });
            </script>`
        ],
        plugin: function init(editor) {
            // Bootstrap Layouts
            editor.BlockManager.add("bootstrap-container", {
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
            });
            editor.BlockManager.add("bootstrap-row", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M112.9,25.6v-4.7h-6.7H90.7H63.5h-0.1h-6.9H7.2V21v17.5v0.1v6.9v46.8V99h6.7h13.8h1.8h27h0.3h6.7h29.4h20v-0.1V44h0v-0.3L112.9,25.6L112.9,25.6z M105.9,45.5v30.8h-0.7v0.1H63.5h-6.9H29.9h-15v-0.1h-0.7V45.5V44h1.3h15.3h26.7h0.1h6.8h41.6V45.5z"/>
                        </svg>
                        <br/>
                        <b>Row</b>`,
                category: "Bootstrap Layouts",
                content: `<div class="row"></div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-column", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M106.2,20.9H90.7H63.5h-0.1h-6.9H31.7h-0.3H12H7.2V21v17.5v0.1v6.9v46.8V99H12h1h0.9h13.8h1.8h2.2h24.9h0.3h6.7h26.2v0.1h0.9h17.4V99h4.8v-0.1V27.6v-6.7H106.2z M63.5,92h-7h-16V27.9h16.1h7h17.5V92H63.5z"/>
                        </svg>
                        <br/>
                        <b>Column</b>`,
                category: "Bootstrap Layouts",
                content: `<div class="col"></div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-media", {
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
            });
            // Bootstrap Navigation
            editor.BlockManager.add("bootstrap-navbar", {
                label: `<svg class="gi gi-elements-nav-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M106,21H90.5H7v0.1v71.4v6.6h6.7h13.8h1.8h63.4h20V99V27.6V21H106z M51.3,70.6L37.4,60l13.9-10.5V70.6z M68.7,70.6V49.5l13.9,10.5L68.7,70.6z"/>
                        </svg>
                        <br/>
                        <b>Navbar</b>`,
                category: "Bootstrap Navigation",
                content: `<nav class="navbar navbar-expand-md navbar-light bg-light">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-navbar-nav-item", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M106,21H90.5H7v0.1v71.4v6.6h6.7h13.8h1.8h63.4h20V99V27.6V21H106z M66.3,72.2H25.1v-6.7h41.3V72.2z M94.6,54.6H25.2v-6.7h69.5V54.6z"/>
                        </svg>
                        <br/>
                        <b>Navbar Nav Item</b>`,
                category: "Bootstrap Navigation",
                content: `<li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-navbar-hamburger", {
                label: `<svg class="gi gi-elements-ul-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106,21H90.5H7v0.1v71.4v6.6h6.7h13.8h1.8h63.4h20V99V27.6V21H106z M25.1,56.3h41.3V63H25.1V56.3z M82.1,80.6H24.8v-6.7h57.3V80.6z M94.7,45.4H25.2v-6.7h69.5V45.4z"></path>
                            </svg>
                            <br/>
                            <b>Navbar Hamburger</b>`,
                category: "Bootstrap Navigation",
                content: `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>`,
                select: true
            });
            // Bootstrap Content
            editor.BlockManager.add("bootstrap-display", {
                label: `<svg class="gi gi-typography-headings-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56,65.8H30.4v25.4h-12V31.5h12l0,23.7l25.7,0.2L56,31.5h12v59.7H56V65.8z"/>
                                <path d="M87.9,42h-7.9V31.5h19.7v59.7H87.9V42z"/>
                            </svg>
                            <br/>
                            <b>Display</b>`,
                category: "Bootstrap Content",
                content: `<h1 class="display-1">Display 1</h1>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-lead", {
                label: `<svg class="gi gi-typography-paragraph-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.2,25.4c-0.7-0.1-1.4-0.1-2.1-0.1c-11.4,0-20.6,9.2-20.6,20.6c0,11,8.7,20.1,19.6,20.6l10.6,0v28.1h11.7V37h6.9v57.6H87V37h6.5V25.4L49.2,25.4z M38.3,45.9c0-4.9,4-8.8,8.8-8.8s8.8,4,8.8,8.8c0,4.9-4,8.8-8.8,8.8S38.3,50.8,38.3,45.9z"/>
                            </svg>
                            <br/>
                            <b>Lead</b>`,
                category: "Bootstrap Content",
                content: `<p class="lead">
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                            </p>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-blockquote", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2,21H90.7H7.2v71.4V99h6.7h13.8h1.8h63.4h20V27.5V21H106.2z M26,66.9c2.2-9.4,6.3-21.6,8.9-26.8l5.3-0.7c-2.1,6.6-4.6,18.2-5.6,26.3L26,66.9z M48.7,65.7l-8.6,1.1c2.1-9.4,6.3-21.6,8.8-26.8l5.3-0.7C52.2,46.1,49.7,57.6,48.7,65.7zM65.7,80.6c2.1-6.6,4.6-18.2,5.6-26.3l8.6-1.1c-2.1,9.4-6.3,21.6-8.8,26.8L65.7,80.6z M85.1,79.9l-5.3,0.7c2.1-6.6,4.6-18.2,5.6-26.3l8.7-1.1C91.9,62.6,87.8,74.7,85.1,79.9z"/>
                            </svg>
                            <br/>
                            <b>Blockquote</b>`,
                category: "Bootstrap Content",
                content: `<blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-list-unstyled", {
                label: `<svg class="gi gi-elements-ol-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106,21H90.5H7v0.1v71.4v6.6h6.7h13.8h1.8h63.4h20V99V27.6V21H106z M25.1,56.3h41.3V63H25.1V56.3z M82.1,80.6H24.8v-6.7h57.3V80.6z M94.7,45.4H25.2v-6.7h69.5V45.4z"/>
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
            });
            editor.BlockManager.add("bootstrap-list-inline", {
                label: `<svg class="gi gi-elements-ol-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106,21H90.5H7v0.1v71.4v6.6h6.7h13.8h1.8h63.4h20V99V27.6V21H106z M25.1,56.3h41.3V63H25.1V56.3z M82.1,80.6H24.8v-6.7h57.3V80.6z M94.7,45.4H25.2v-6.7h69.5V45.4z"/>
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
            });
            // Bootstrap Images
            editor.BlockManager.add("bootstrap-img-fluid", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
                            </svg>
                            <br/>
                            <b>Image Fluid</b>`,
                category: "Bootstrap Images",
                content: `<img src="https://via.placeholder.com/782x250" class="img-fluid" alt="Responsive Image">`,
                select: true,
                activate: true,
            });
            editor.BlockManager.add("bootstrap-img-thumbnail", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
                            </svg>
                            <br/>
                            <b>Image Thumbnail</b>`,
                category: "Bootstrap Images",
                content: `<img src="https://via.placeholder.com/250x250" class="img-thumbnail" alt="Responsive Image">`,
                select: true,
                activate: true,
            });
            editor.BlockManager.add("bootstrap-figure", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2,21H90.7H7.2V21v71.4V99h6.7h13.8h1.8h63.4h20V99V27.5V21H106.2z M52.2,36.1c2.6,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-2.6,0-4.6-2.1-4.6-4.6S49.6,36.1,52.2,36.1z M62,82.3H45.9H29.8L45.9,59L54,70.6l14.1-20.4l22.1,32.1H62z"/>
                            </svg>
                            <br/>
                            <b>Bootstrap Figure</b>`,
                category: "Bootstrap Images",
                content: `<figure class="figure">
                                <img src="https://via.placeholder.com/400x300" class="figure-img img-fluid rounded" alt="...">
                                <figcaption class="figure-caption">A caption for the above image.</figcaption>
                            </figure>`,
                select: true,
                activate: true,
            });
            // Bootstrap Forms
            editor.BlockManager.add("bootstrap-form-control", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Control</b>`,
                category: "Bootstrap Forms",
                content: `<input type="text" class="form-control" id="exampleInput1" aria-describedby="inputHelp">`,
                select: true
            });
            editor.BlockManager.add("bootstrap-form-control", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Control</b>`,
                category: "Bootstrap Forms",
                content: `<input type="text" class="form-control" id="exampleInput1" aria-describedby="inputHelp">`,
                select: true
            });
            editor.BlockManager.add("bootstrap-form-control-range", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Control Range</b>`,
                category: "Bootstrap Forms",
                content: `<input type="range" class="form-control-range" id="formControlRange">`,
                select: true
            });
            editor.BlockManager.add("bootstrap-form-check", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Checkbox</b>`,
                category: "Bootstrap Forms",
                content: `<div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    Default checkbox
                                </label>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-form-radio", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Radio</b>`,
                category: "Bootstrap Forms",
                content: `<div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                    Second default radio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                                <label class="form-check-label" for="exampleRadios3">
                                    Disabled radio
                                </label>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-form-file", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form File</b>`,
                category: "Bootstrap Forms",
                content: `<div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile">
                                <label class="custom-file-label" for="customFile">Choose file</label>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-input-group-prepend", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Input Group Prepend</b>`,
                category: "Bootstrap Forms",
                content: `<div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-input-group-append", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Form Input Group Append</b>`,
                category: "Bootstrap Forms",
                content: `<div class="input-group">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                            </div>`,
                select: true
            });
            // Bootstrap Cards
            editor.BlockManager.add("bootstrap-card", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card</b>`,
                category: "Bootstrap Card",
                content: `<div class="card">
                                <img src="https://via.placeholder.com/782x250" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-body", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Body</b>`,
                category: "Bootstrap Card",
                content: `<div class="card-body">
                                <span>This is some text within a card body.</span>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-title", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Title</b>`,
                category: "Bootstrap Card",
                content: `<h5 class="card-title">Card title</h5>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-subtitle", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Subtitle</b>`,
                category: "Bootstrap Card",
                content: `<h6 class="card-subtitle">Card subtitle</h6>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-text", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Text</b>`,
                category: "Bootstrap Card",
                content: `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-link", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Link</b>`,
                category: "Bootstrap Card",
                content: `<a href="#" class="card-link">Card link</a>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-header", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Header</b>`,
                category: "Bootstrap Card",
                content: `<div class="card-header">
                                <span>Featured</span>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-card-footer", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Card Footer</b>`,
                category: "Bootstrap Card",
                content: `<div class="card-footer">
                                <span>Featured</span>
                            </div>`,
                select: true
            });
            // Bootstrap Components
            editor.BlockManager.add("bootstrap-alert", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Alert</b>`,
                category: "Bootstrap Components",
                content: `<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-alert-link", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Alert Link</b>`,
                category: "Bootstrap Components",
                content: `<a href="#" class="alert-link">an example link</a>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-alert-heading", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Alert Heading</b>`,
                category: "Bootstrap Components",
                content: `<h4 class="alert-heading">Well done!</h4>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-alert-dismissable", {
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
            });
            editor.BlockManager.add("bootstrap-badge", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Badge</b>`,
                category: "Bootstrap Components",
                content: `<span class="badge badge-secondary">New Badge</span>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-breadcrump", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Breadcrump</b>`,
                category: "Bootstrap Components",
                content: `<nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-breadcrump-item", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Breadcrump Item</b>`,
                category: "Bootstrap Components",
                content: `<li class="breadcrumb-item"><a href="#">Item</a></li>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-button", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Button</b>`,
                category: "Bootstrap Components",
                content: `<button type="button" class="btn btn-primary">Primary</button>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-button-group", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Button Group</b>`,
                category: "Bootstrap Components",
                content: `<div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary">Left</button>
                                <button type="button" class="btn btn-secondary">Middle</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-toolbar", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Button Toolbar</b>`,
                category: "Bootstrap Components",
                content: `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-secondary">1</button>
                                    <button type="button" class="btn btn-secondary">2</button>
                                    <button type="button" class="btn btn-secondary">3</button>
                                    <button type="button" class="btn btn-secondary">4</button>
                                </div>
                                <div class="btn-group mr-2" role="group" aria-label="Second group">
                                    <button type="button" class="btn btn-secondary">5</button>
                                    <button type="button" class="btn btn-secondary">6</button>
                                    <button type="button" class="btn btn-secondary">7</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                    <button type="button" class="btn btn-secondary">8</button>
                                </div>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-jumbotron", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Jumbotron</b>`,
                category: "Bootstrap Components",
                content: `<div class="jumbotron">
                                <h1 class="display-4">Hello, world!</h1>
                                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr class="my-4">
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-list-group", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>List Group</b>`,
                category: "Bootstrap Components",
                content: `<ul class="list-group">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-list-group-item", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>List Group Item</b>`,
                category: "Bootstrap Components",
                content: `<li class="list-group-item">Cras justo odio</li>`,
                select: true
            });
            // Bootstrap Carousel
            editor.BlockManager.add("bootstrap-carousel", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Carousel</b>`,
                category: "Bootstrap Carousel",
                content: `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://via.placeholder.com/782x250" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://via.placeholder.com/782x250" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://via.placeholder.com/782x250" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-carousel-control-prev", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Carousel Prev Control</b>`,
                category: "Bootstrap Carousel",
                content: `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-carousel-control-next", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Carousel Next Control</b>`,
                category: "Bootstrap Carousel",
                content: `<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-carousel-indicators", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Carousel Indicators</b>`,
                category: "Bootstrap Carousel",
                content: `<ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-carousel-item-caption", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Carousel Item Caption</b>`,
                category: "Bootstrap Carousel",
                content: `<div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>`,
                select: true
            });
            // Boostrap Dropdown
            editor.BlockManager.add("bootstrap-dropdown", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Dropdown</b>`,
                category: "Bootstrap Dropdown",
                content: `<div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-split-button-dropdown", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Split Button Dropdown</b>`,
                category: "Bootstrap Dropdown",
                content: `<div class="btn-group">
                                <button type="button" class="btn btn-danger">Action</button>
                                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-dropdown-menu", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Dropdown Menu</b>`,
                category: "Bootstrap Dropdown",
                content: `<div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-dropdown-item", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Dropdown Item</b>`,
                category: "Bootstrap Dropdown",
                content: `<a class="dropdown-item" href="#">Action</a>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-dropdown-header", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Dropdown Header</b>`,
                category: "Bootstrap Dropdown",
                content: `<h6 class="dropdown-header">Dropdown header</h6>`,
                select: true
            });
            editor.BlockManager.add("bootstrap-dropdown-divider", {
                label: `<svg class="gi gi-box-fill fs-xs" width="3rem" height="3rem" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="106,21 90.5,21 7,21 7,21.1 7,92.5 7,99.1 13.7,99.1 27.5,99.1 29.3,99.1 92.7,99.1 112.7,99.1 112.7,99 112.7,27.6 112.7,21"/>
                        </svg>
                        <br/>
                        <b>Dropdown Divider</b>`,
                category: "Bootstrap Dropdown",
                content: `<div class="dropdown-divider"></div>`,
                select: true
            });
        },
        dependencies: [
            "fde6b9d5-595f-4b86-9845-776db87d96d3",
            "3452e6f8-9e43-4690-b110-79f119f8fbcb"
        ]
    }]
}

for (index = 0; index < manifestObject.versions.length; ++index) {
    if (manifestObject.versions[index].plugin) {
        manifestObject.versions[index].plugin = manifestObject.versions[index].plugin.toString();
    }
}
writeFileSync(`manifest.json`, JSON.stringify(manifestObject));