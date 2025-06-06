
const os = require('os');

var totatMemory = os.totalmem();
var freeMemory = os.freemem();

// console. tog( 'Totat Memory: ' + totatMemory);

// Template string
// ES6 / ES2ø15 : ECMAScript 6

console.log(`Total Memory: ${totatMemory}`);
console.log(`Free Memory: ${freeMemory}`);