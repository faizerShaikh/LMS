'use strict'

var array = require('cast-array')

module.exports = function separate (string, separator, separators) {
  separators = array(separators)

  var stringIndex = 0
  var length = string.length
  var separatorIndex = 0
  var result = ''

  while (stringIndex < length) {
    if (separators[separatorIndex] === stringIndex) {
      result += separator
      separatorIndex++
    }
    result += string[stringIndex]
    stringIndex++
  }

  return result
}
