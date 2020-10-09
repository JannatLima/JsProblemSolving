// var marks = [45, 81, 63, 98, 56, 35, 23];
// var max = marks[0];

// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log("Highest value is: ", max);


function getArraySum(numbers){
        var sum = 0;
        for(var i = 0; i < numbers.length; i++){
            var element = numbers[i];
            sum = sum + element;
    }
    return sum;
}
var numbers = [45, 66, 77, 88, 99, 65];
var result = getArraySum(numbers);
console.log("total of the numbers:", result);

var total = getArraySum([200, 200]);
console.log("total of the numbers:", total);