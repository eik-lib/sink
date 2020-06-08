# @eik/sink

A sink interface defining the public sink API in Eik.

[![Dependencies](https://img.shields.io/david/eik-lib/sink.svg)](https://david-dm.org/eik-lib/sink)
[![GitHub Actions status](https://github.com/eik-lib/sink/workflows/Run%20Lint%20and%20Tests/badge.svg)](https://github.com/eik-lib/sink/actions?query=workflow%3A%22Run+Lint+and+Tests%22)
[![Known Vulnerabilities](https://snyk.io/test/github/eik-lib/sink/badge.svg?targetFile=package.json)](https://snyk.io/test/github/eik-lib/sink?targetFile=package.json)

The intention of the [Eik][eik] sink modules is to be able to write to and read from
files in different storage backends by swapping sink modules. Because each sink
implements the same public API it is possible to use this sink in one environment and
another sink in a different environment. This is an interface containing the
public API each sink has to implement.

## Installation

```bash
$ npm install @eik/sink
```

## Example

Implement a custom sink:

```js
const { ReadFile } = require('@eik/common');
const Sink = require('@eik/sink');

const SinkCustom = class SinkCustom extends Sink {
    constructor() {
        super();
    }

    write(filePath, contentType) {
        return new Promise((resolve, reject) => {
            try {
                super.constructor.validateFilePath(filePath);
                super.constructor.validateContentType(contentType);
            } catch (error) {
                reject(error);
                return;
            }

            // Custom code

            resolve();
        });
    }

    read(filePath) {
        return new Promise((resolve, reject) => {
            try {
                super.constructor.validateFilePath(filePath);
            } catch (error) {
                reject(error);
                return;
            }

            // Custom code

            const obj = new ReadFile();
            resolve(obj);
        });
    }

    delete(filePath) {
        return new Promise((resolve, reject) => {
            try {
                super.constructor.validateFilePath(filePath);
            } catch (error) {
                reject(error);
                return;
            }

            // Custom code

            resolve();
        });
    }

    exist(filePath) {
        return new Promise((resolve, reject) => {
            try {
                super.constructor.validateFilePath(filePath);
            } catch (error) {
                reject(error);
                return;
            }

            // Custom code

            resolve();
        });
    }

    get [Symbol.toStringTag]() {
        return 'SinkCustom';
    }
}
```

## License

Copyright (c) 2020 FINN.no

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[eik]: https://github.com/eik-lib
