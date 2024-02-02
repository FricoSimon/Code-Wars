// Remove First and Last Character

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// my solution
function removeChar(str) {
    const removedFirst = str.slice(1);
    const removedLast = removedFirst.slice(0, -1)
    return removedLast;
};

// best practice
function removeChar(str) {
    return str.slice(1, -1);
}