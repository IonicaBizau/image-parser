## Documentation

You can see below the API reference of this module.

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

