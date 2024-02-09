// String repeat

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// my solution
function repeatStr(n, s) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        string += s;
    }
    return string;
}

// best practice
function repeatStr(n, s) {
    return s.repeat(n);
}