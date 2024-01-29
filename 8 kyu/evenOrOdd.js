// Even or Odd

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// My solution
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Best practice
function evenOrOdd2(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}