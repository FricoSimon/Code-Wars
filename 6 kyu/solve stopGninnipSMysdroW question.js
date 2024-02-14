// Stop gninnipS My sdroW

// https://www.codewars.com/kata/5264d2b162488dc400000001

// my solution
function spinWords(string) {
    const divide = string.split(" ");

    for (let i = 0; i < divide.length; i++) { // Handle single-word case too
        if (divide[i].length >= 5) {
            divide[i] = divide[i].split("").reverse().join("");
        }
    }

    return divide.join(" ");
}

// best practice
function spinWords2(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}