// Run `node example.js` in terminal

const toRupiah = require('./index.js'); // require the `index.js` file from the same directory.

console.log(
  toRupiah(1776500, {symbol: false})
)
console.log(
  toRupiah(1776500.2147, {dot: ',', decimal: '.', symbol: false, floatingPoint: 2})
)
console.log(
  toRupiah(2500350300, {denominate: true, floatingPoint: 0, decimal: '.'})
)