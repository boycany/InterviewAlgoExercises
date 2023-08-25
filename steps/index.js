// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}

steps(3);

//recursive solution
function stepsRecursion(n, row = 0, stair = "") {
    //hit the end of our problem
    if (n === row) {
        return;
    }

    //hit the end of the row
    if (n === stair.length) {
        console.log(stair);
        stepsRecursion(n, row + 1);
        return;
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    stepsRecursion(n, row, stair);
}

//recursive sample
// function printNumber(n, dec = 2) {
//     if (n <= 0) {
//         return;
//     }
//     console.log(n);
//     printNumber(n - dec);
// }

// printNumber(13);

module.exports = steps;
