// Sum of positive

// https://www.codewars.com/kata/5715eaedb436cf5606000381

// my solution
function positiveSum(arr) {
    if (arr.length === 0) return 0;

    let sum = 0;
    let positiveNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveNumbers.push(arr[i]);
            sum += arr[i];
        }
    }

    return sum;
}

// best practice
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}