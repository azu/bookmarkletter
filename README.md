# bookmarkletter

bookmarkletter convert code to **bookmarklets**

## Installation

```
npm install bookmarkletter -g
```

## Usage

```sh
$ bookmarkletter code.js
# or
$ cat code.js | bookmarkletter
```

Output => `javascript:(function(){ ...code... })()`

## API

bookmarkletter allow to use as node module.

```
npm install bookmarkletter
```

### Use as module

```js
var bookmarkletter = require("bookmarkletter");
var code = "var a = 1;";
var result = bookmarkletter(code);
assert.equal(result, "javascript:(function(){var%20a=1}())");
```

### Options

`bookmarkletter`'s options

```js
var options = {
    // @type {string} prefix string of compiled code
    // Default : `javascript:`
    "prefix-string": "javascript:",
    // @type {boolean} Add IIFE wrapper, if true
    // Default : `true`
    "wrap-anonymous-function": true
};
var code = "var a = 1;";
var result = bookmarkletter(code, options);
assert.equal(result, "javascript:(function(){var%20a=1}())");
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

## Acknowledgements

Thanks to [chriszarate/bookmarkleter](https://github.com/chriszarate/bookmarkleter "chriszarate/bookmarkleter")