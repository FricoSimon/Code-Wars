// Square(n) Sum

// https://www.codewars.com/kata/515e271a311df0350d00000f

// my solution
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length - 1; i++) {
        sum += Math.pow(numbers[i], 2)
    }
    return sum
}

// best practice
function squareSum2(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}