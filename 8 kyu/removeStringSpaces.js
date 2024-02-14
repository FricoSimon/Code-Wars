// Remove String Spaces

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// my solution
function noSpace(x) { return x.split(' ').join('') }

// best practice
function noSpace2(x) {
    return x.replace(/\s/g, '');
}