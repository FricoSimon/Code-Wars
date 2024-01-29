// Reversed sequence

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// My solution
const reverseSeq = n => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr;
};

// best practice
const reverseSeq2 = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    } return arr;
};