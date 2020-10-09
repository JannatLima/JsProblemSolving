function fact(n){
        var i = 1;
        var fact = 1;
        while(i <= n){
            fact = fact * i;
            i++;
        }
    return fact;
}
var result = fact(5);
console.log(result);