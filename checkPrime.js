function isPrime(n){
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'You number is a prime Number';
}
var result = isPrime(128);
console.log(result);