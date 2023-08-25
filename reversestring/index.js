// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str
        .split("")
        .reduce((rev, char) => char + rev, "");
}

reverse('debugger mode')

function reverse3(str) {
    let result = "";

    for (let character of str) {
        result = character + result;
        debugger;
    }

    return result;
}

reverse3('debugger')

function reverse2(str) {
    return str.split("").reverse().join("");
}

module.exports = reverse;
