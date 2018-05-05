const mathLibrary = require("./mathlib");
const math = new mathLibrary();

const a = 1;
const b = 35;

console.log(math.add(a,b));
console.log(math.multiply(a,b));
console.log(math.square(b));
console.log(math.random(a,b));