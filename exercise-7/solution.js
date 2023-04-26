var numbers = [2, 5, 1, 4, 3, 7, 8, 12, -1, -6, 0, 10];

var sum = 0;
var n = numbers.length;

for (var i = 0; i < n; i++) {
    sum += numbers[i];
}

console.log(sum / n);
