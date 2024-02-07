// Array.diff

// https://www.codewars.com/kata/523f5d21c841566fde000009

// my solution
function arrayDiff(a, b) {
    if (b.length === 0) return a;
    let arr = [];

    for (let i = 0; i <= a.length - 1; i++) {
        if (!b.includes(a[i])) {
            arr.push(a[i]);
        }
    }
    return arr;
}

// best practice
function array_diff2(a, b) {
    return a.filter(e => !b.includes(e));
}