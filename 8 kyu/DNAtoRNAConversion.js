// DNA to RNA Conversion

// https://www.codewars.com/kata/5556282156230d0e5e000089

// my solution
function DNAtoRNA(dna) {
    return dna.split('').map(val => val === 'T' ? 'U' : val).join('');
}

// best practice
function DNAtoRNA2(dna) {
    return dna.replace(/T/g, 'U');
}