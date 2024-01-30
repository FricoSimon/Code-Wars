// Return Negative

// https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript

// my solution
function makeNegative(num) {
    if (num <= 0) return num
    if (num > 0) return num * -1;
}

// best practice
function makeNegative(num) {
    return -Math.abs(num);
}