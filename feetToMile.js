function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var mile = feetToMile(50000);
console.log(mile);