//  Lost Without a Map

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// my solution
function maps(x) {
    // initial value for index and create empty array
    let index = x[0];
    let arr = [];

    for (let i = 0; i <= x.length - 1; i++) {
        // multiply each value from the array and put it inside a new array
        index = x[i] * 2;
        arr.push(index);
    }

    return arr;
}

// best practice
function maps2(x) {
    return x.map(n => n * 2);
}