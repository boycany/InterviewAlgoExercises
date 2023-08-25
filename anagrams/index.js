// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

//--------steve

function anagrams3(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

//------------------------------my

function anagrams2(stringA, stringB) {
    const a = stringA.replace(/[^\w]/g, "").toLowerCase();
    const b = stringB.replace(/[^\w]/g, "").toLowerCase();

    const counterA = count(a);
    const counterB = count(b);

    const a_length = Object.keys(counterA).length;
    const b_length = Object.keys(counterB).length;

    return a_length !== b_length ? false : checkIsAnagram(counterA, counterB);
}

function checkIsAnagram(counter1, counter2) {
    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}

function count(str) {
    let counter = {};

    for (let char of str) {
        if (counter[char]) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }
    return counter;
}

anagrams("One one", "One one c");

module.exports = anagrams;
