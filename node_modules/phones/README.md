# phones [![Build Status](https://travis-ci.org/bendrucker/phones.svg?branch=master)](https://travis-ci.org/bendrucker/phones)

> Parse, format, and validate US phone numbers


## Install

```
$ npm install --save phones
```


## Usage

```js
var phones = require('phones')

phones.parse('415-555-1234')
//=> 4155551234

phones.format('4155551234')
//=> 415 555 1234

phones.validate('4155551234')
//=> true
```

## API

#### `phones.parse(phone)` -> `string`

##### phone

*Required*  
Type: `string`

A phone number to parse. A leading `1` country code will be stripped.

#### `phones.format(phone, [separator])` -> `string`

Format a 10 digit phone string by adding separators and truncating extra digits.

##### phone

*Required*  
Type: `string`

A phone number to format. Digits only.

##### separator

Type: `string`  
Default: `'-'`

#### `phones.validate(phone)` -> `boolean`

#### phone

*Required*  
Type: `string`

A phone number to validate as a 10 digit string.

## License

MIT © [Ben Drucker](http://bendrucker.me)
