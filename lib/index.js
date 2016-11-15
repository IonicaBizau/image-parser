"use strict";

const lwipify = require("lwipify")
    , gmTools = require("gm-tools")
    , CbBuffer = require("cb-buffer")
    , Err = require("err")
    , Pixel = require("pixel-class")
    , noop = require("noop6")
    ;

module.exports = class ImageParser {
    /**
     * ImageParser
     * Creates a new instance of `ImageParser`.
     *
     * @name ImageParser
     * @function
     * @param {String|Buffer} source The image path/url or the a `Buffer` object.
     * @param {Object} options The options object to pass to the `lwipify`.
     * @return {ImageParser} The `ImageParser` instance.
     */
    constructor (source, options) {
        this.source = source;
        this.options = options;
        this.parser = null;
        this.gm = false;
        this.lwip = false;
        this.img = null;
        this._parseBuffer = new CbBuffer();
        this.__lwip = true;
    }

    /**
     * parse
     * Prepare the in-memory data (image pixels, buffers, size etc).
     *
     * @name parse
     * @function
     * @param {Function} cb The callback function.
     */
    parse (cb) {
        if (this._parseBuffer.check(cb)) { return; }
        lwipify(this.source, this.options, (err, data, options) => {
            if (err) {
                //if (err.message === "Invalid PNG buffer" || err.message === "Invalid source" || /Unknown type/.test(err.message)) {
                this[this.parser = "gm"] = true;
                this.img = gmTools(options.source);
                return this.img.parse((err, data) => {
                    if (!err) {
                        this._imgBuffer = data[0];
                    }
                    return this._parseBuffer.done(err, this, data);
                });
                //}
                //return this._parseBuffer.done(err);
            }
            this.img = data;
            this[this.parser = "lwip"] = true;
            this._parseBuffer.done(null, this, data);
        });
    }

    /*!
     * _checkParsed
     * This method throws an error if the image was *not* parsed.
     *
     * @name _checkParsed
     * @function
     */
    _checkParsed () {
        if (!this.img) {
            throw new Err("Parse the image first by using the parse method.", "IMAGE_NOT_PARSED");
        }
    }

    /**
     * width
     * Returns the image width.
     *
     * @name width
     * @function
     * @returns {Number} The image width.
     */
    width () {
        this._checkParsed();
        return this.img.width();
    }

    /**
     * height
     * Returns the image height.
     *
     * @name height
     * @function
     * @returns {Number} The image height.
     */
    height () {
        this._checkParsed();
        return this.img.height();
    }

    /**
     * getPixel
     * Gets the pixel at given coordinates.
     *
     * @name getPixel
     * @function
     * @param {Number} x The `x` coordinate.
     * @param {Number} y The `y` coordinate.
     * @returns {Pixel} The [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance containing the pixel data.
     */
    getPixel (x, y) {
        this._checkParsed();
        let args = [x, y];
        this.gm ? args.push(this._imgBuffer) : "";
        return new Pixel(this.img.getPixel.apply(this.img, args));
    }

    /**
     * pixels
     * Gets the image pixels.
     *
     * @name pixels
     * @function
     * @returns {Array} An array of [`Pixel`](https://github.com/IonicaBizau/pixel-class) objects containing the pixel information.
     */
    pixels () {
        this._checkParsed();
        let pixels = [];

        let size = {
            height: this.height()
          , width: this.width()
        };

        for (let y = 0; y < size.height; ++y) {
            for (let x = 0; x < size.width; ++x) {
                pixels.push(this.getPixel(x, y));
            }
        }

        return pixels;
    }

    /**
     * resize
     * Resizes the image.
     *
     * @name resize
     * @function
     * @param {Number} width The new image width.
     * @param {Number} height The new image height.
     * @param {Function} cb The callback function.
     */
    resize (width, height, cb) {
        this._checkParsed();
        if (this.gm) {
            this.img.gm.resize(width, height, "!");
            this.img.gm.toBuffer("PNG", (err, data) => {
                let resized = new ImageParser(data, this.options);
                resized.parse(err => cb(err, resized));
            });
        } else {
            this.img.resize(width, height, (err, img) => {
                let resized = new ImageParser(img, this.options);
                resized.parse(err => cb(err, resized));
            });
        }
    }

    /**
     * crop
     * Crops the image.
     *
     * @name crop
     * @function
     * @param {Number} width The crop width.
     * @param {Number} height The crop height.
     * @param {Number} x The X coordinate.
     * @param {Number} y The Y coordinate.
     * @param {Function} cb The callback function.
     */
    crop (width, height, x, y, cb) {
        this._checkParsed();
        if (this.gm) {
            this.img.gm.crop(width, height, x, y);
            this.img.gm.toBuffer("PNG", (err, data) => {
                let resized = new ImageParser(data, this.options);
                resized.parse(err => cb(err, resized));
            });
        } else {
            throw new Error("Not yet supported.");
        }
    }

    /**
     * save
     * Saves the image to disk.
     *
     * @name save
     * @function
     * @param {String} filePath The output file path.
     * @param {Function} cb The callback function.
     */
    save (filePath, cb) {
        cb = cb || noop;
        this._checkParsed();
        if (this.gm) {
            this.img.gm.write(filePath, cb);
        } else {
            this.img.writeFile(filePath, cb);
        }
    }
};
