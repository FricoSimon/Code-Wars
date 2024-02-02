// Powers of 2

// https://www.codewars.com/kata/57a083a57cb1f31db7000028

// my solution
function powersOfTwo(n) {
    let base = 2;
    let arr = [];

    for (let i = 0; i <= n; i++) {
        base = 2 ** i;
        arr.push(base);
    }

    return arr;
}

// best practice
function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}