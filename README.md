
[![image-parser](http://i.imgur.com/DiPWcCW.png)](#)

# image-parser

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/image-parser.svg)](https://www.npmjs.com/package/image-parser) [![Downloads](https://img.shields.io/npm/dt/image-parser.svg)](https://www.npmjs.com/package/image-parser)

> An image parser that works.

This library uses [`lwip`](https://github.com/EyalAr/lwip) to parse the images falling back to GraphicsMagick. :art:

## :cloud: Installation

```sh
$ npm i --save image-parser
```


## :clipboard: Example



```js
const ImageParser = require("image-parser");

let img = new ImageParser("https://octodex.github.com/images/privateinvestocat.jpg");
img.parse(err => {
    if (err) { return console.error(err); }
    console.log(img.getPixel(3, 3));
    // PixelClass { r: 34, g: 30, b: 31, a: 1 }
});
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


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

### `crop(width, height, x, y, cb)`
Crops the image.

#### Params
- **Number** `width`: The crop width.
- **Number** `height`: The crop height.
- **Number** `x`: The X coordinate.
- **Number** `y`: The Y coordinate.
- **Function** `cb`: The callback function.

### `save(filePath, cb)`
Saves the image to disk.

#### Params
- **String** `filePath`: The output file path.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`image-to-ascii`](https://github.com/IonicaBizau/image-to-ascii)—A Node.JS module that converts images to ASCII art.
 - [`img-ssim`](https://github.com/IonicaBizau/img-ssim#readme)—Get the structural similarity between two images.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
