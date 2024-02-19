// Is he gonna survive?

// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// my solution
function hero(bullets, dragons) {
    const check = bullets / 2 >= dragons ? true : false;
    return check;
}

// best practice
function hero2(bullets, dragons) {
    return bullets >= dragons * 2
}