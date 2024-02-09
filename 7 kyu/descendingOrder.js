// Descending Order

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// my solution
function descendingOrder(n) {
    const number = n
        .toString()
        .split('')
        .sort()
        .reverse()
        .join('');

    return parseInt(number);
}

// best practice
function descendingOrder2(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}