// Shortest Word

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// my solution
function findShort(s) {
    const word = s.split(" ");
    let min = word[0];

    for (let i = 0; i < word.length; i++) {
        if (word[i].length < min.length) {
            min = word[i];
        }
    }
    return min.length;
}

// best practice
function findShort2(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}