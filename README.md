# image-parser [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/image-parser.svg)](https://www.npmjs.com/package/image-parser) [![Downloads](https://img.shields.io/npm/dt/image-parser.svg)](https://www.npmjs.com/package/image-parser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> An image parser that works.

## Installation

```sh
$ npm i --save image-parser
```

## Example

```js
"use strict";

const ImageParser = require("image-parser");

let img = new ImageParser("https://octodex.github.com/images/privateinvestocat.jpg");
img.parse(err => {
    if (err) { return console.error(err); }
    console.log(img.getPixel(3, 3));
    // PixelClass { r: 34, g: 30, b: 31, a: 1 }
});
```

## Documentation

### `ImageParser(source, options)`
Creates a new instance of `ImageParser`.

#### Params
- **String|Buffer** `source`: The image path/url or the a `Buffer` object.
- **Object** `options`: The options object to pass to the `lwipify`.

#### Return
- **ImageParser** The `ImageParser` instance.

### `parse(cb)`
Prepare the in-memory data (image pixels, buffers, size etc).

#### Params
- **Function** `cb`: The callback function.

### `width()`
Returns the image width.

#### Return
- **Number** The image width.

### `height()`
Returns the image height.

#### Return
- **Number** The image height.

### `getPixel(x, y)`
Gets the pixel at given coordinates.

#### Params
- **Number** `x`: The `x` coordinate.
- **Number** `y`: The `y` coordinate.

#### Return
- **Pixel** The [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance containing the pixel data.

### `pixels()`
Gets the image pixels.

#### Return
- **Array** An array of [`Pixel`](https://github.com/IonicaBizau/pixel-class) objects containing the pixel information.

### `resize(width, height, cb)`
Resizes the image.

#### Params
- **Number** `width`: The new image width.
- **Number** `height`: The new image height.
- **Function** `cb`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md