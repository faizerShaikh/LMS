# separate [![Build Status](https://travis-ci.org/bendrucker/separate.svg?branch=master)](https://travis-ci.org/bendrucker/separate)

> Separate a string at the specified indicies


## Install

```
$ npm install --save separate
```


## Usage

```js
var separate = require('separate')

separate('000551234', '-', [3, 5])
//=> 000-55-1234
```

## API

#### `separate(string, separator, separators)` -> `string`

##### string

*Required*  
Type: `string`

A string to separate.

##### separator

*Required*  
Type: `string`

The string to use as a separator.

##### separators

*Required*  
Type: `array[number]`

The numeric indicies at which separators should be inserted in the original string.

## License

MIT © [Ben Drucker](http://bendrucker.me)
