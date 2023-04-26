var a = -2;
var b = 2;
var c = 1;

var D = b * b - 4 * a * c;

if (D == 0) {
    console.log('Tənliyin bir kökü var.');
    var x = b / (2 * a);
    console.log(x);
} else if (D > 0) {
    console.log('Tənliyin iki kökü var.');
    var x1 = (b - Math.sqrt(D)) / (2 * a);
    var x2 = (b + Math.sqrt(D)) / (2 * a);
    console.log(x1, x2);
} else {
    console.log('Tənliyin həqiqi kökü yoxdur.');
}
