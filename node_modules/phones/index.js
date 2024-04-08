'use strict'

var separate = require('separate')

exports.parse = parse
function parse (phone) {
  phone = phone.replace(/\D/g, '')
  var offset = Number(phone.charAt(0) === '1')
  return phone.substring(offset, 10 + offset)
}

exports.format = function format (phone, separator) {
  separator = separator == null ? '-' : separator

  var country = phone.charAt(0) === '1'
  phone = phone.substring(0, country ? 11 : 10)

  var separators = country ? [1, 4, 7] : [3, 6]

  return separate(phone, separator, separators)
}

exports.validate = function validate (phone) {
  return /\d{10}/.test(phone)
}
