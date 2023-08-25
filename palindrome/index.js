// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str){
    console.log('str :>> ', str);
    return str.split("").every((char, i) => {
        return char === str[str.length - (i + 1)]
    })
}


function palindrome2(str){
    const reversed = str.split('').reduce((rev, char) => char + rev, '')
    return str === reversed
}

//idiot solution!!
function palindrome3(str) {
    const strLength = str.length
    let first = str.substring(0, strLength / 2)
    let second
    
    if(strLength % 2 === 0){
        second = str.substring(strLength / 2)
    }else{
        second = str.substring(strLength / 2 + 1)
    }
    const reversedFirst = first.split('').reduce((rev, char) => char + rev, '')
    // console.log(reversedFirst)
    
    if(reversedFirst === second){
        return true
    }
}

module.exports = palindrome;
