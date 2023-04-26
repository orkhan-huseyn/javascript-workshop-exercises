var a = -2;
var b = 2;
var c = 1;

var D = b * b - 4 * a * c;

// TODO: check discriminant with if-else statement

var x1 = (b - Math.sqrt(D)) / (2 * a);
var x2 = (b + Math.sqrt(D)) / (2 * a);

console.log(x1, x2);
