// Count by X

// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// my solution
function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}

// best practice
function countBy2(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}