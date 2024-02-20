// List Filtering

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// my solution
function filter_list(l) {
    return l.filter(Number.isInteger);
}

// best practice
function filter_list2(l) {
    return l.filter(function (v) { return typeof v == 'number' })
}