// Sum without highest and lowest number

// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// my solution
function sumArray(array) {
    if (!array || array.length < 3) {
        return 0;
    }
    let min = array[0];
    let max = array[0];
    let sum = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        sum += array[i];

        if (array[i] >= max) {
            max = array[i];
        } else if (array[i] <= min) {
            min = array[i];
        }
    }

    return sum - (max + min);
}

// best practice
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0