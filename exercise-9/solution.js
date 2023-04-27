function isPrime(num) {
    for (var k = 2; k < num; k++) {
        if (num % k == 0) {
            return false;
        }
    }

    return true;
}

isPrime(17);
isPrime(22);
isPrime(31);
isPrime(99);
