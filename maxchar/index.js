// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counter = {}

    for(let char of str){
        // if(!counter[char]){
        //     counter[char] = 1
        // }else{
        //     counter[char] += 1
        // }
        counter[char] = counter[char] + 1 || 1
    }

    let maxChar = ''
    let maxCount = 0

    for(let char in counter){
        if(counter[char] > maxCount){
            maxCount = counter[char]
            maxChar = char
        }
    }

    return maxChar
}

// maxChar('abcccccccd')
// maxChar('apple 1231111')

module.exports = maxChar;
