// Square Every Digit

// https://www.codewars.com/kata/546e2562b03326a88e000020

// my solution
function squareDigits(num) {
    const result = num.toString().split("").map(value => value * value).join("");

    return Number(result);
}

// best practice
function squareDigits2(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}