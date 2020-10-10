function feetToMile(feet) {
    var mile = Math.abs(feet / 5280);
    return mile;
}
var mile = feetToMile(50000);
console.log(mile);