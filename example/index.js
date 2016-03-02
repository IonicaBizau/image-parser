"use strict";

const ImageParser = require("../lib");

let img = new ImageParser("https://octodex.github.com/images/privateinvestocat.jpg");
img.parse(err => {
    if (err) { return console.error(err); }
    console.log(img.getPixel(3, 3));
    // PixelClass { r: 34, g: 30, b: 31, a: 1 }
});
