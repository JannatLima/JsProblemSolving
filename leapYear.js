
function isLeapYear(Year){
    const year = 3998;
    let reminder = year % 4;
    if (reminder == 0){
        return true;
        console.log('Your year is a Leap Year');
    }
    else {
        return false;
        console.log('Your year is not a leap year');
    }
    
}

