// Reduce but Grow

// https://www.codewars.com/kata/57f780909f7e8e3183000078

// my solution
function grow(x) {
    // initial variable value 
    let totalSum = 1;

    // loop the array and multiply the value inside
    for (let i = 0; i <= x.length - 1; i++) {
        totalSum *= x[i];
    }

    return totalSum
}

// best practice
const grow = x => x.reduce((a, b) => a * b);