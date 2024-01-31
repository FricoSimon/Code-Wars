// Convert boolean values to strings

// https://www.codewars.com/kata/53369039d7ab3ac506000467

// my solution
function boolToWord(bool) {
    const check = bool ? "Yes" : "No";

    return check;
}

// best practice
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}