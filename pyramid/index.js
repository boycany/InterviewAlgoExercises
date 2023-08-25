// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const width = 2 * n - 1;
//     const mid = Math.floor(width / 2);

//     for (let row = 0; row < n; row++) {
//         const leftEdge = mid - row;
//         const rightEdge = mid + row;
//         let stair = "";

//         for (let col = 0; col < width; col++) {
//             if (col >= leftEdge && col <= rightEdge) {
//                 stair += "#";
//             } else {
//                 stair += " ";
//             }
//         }
//         console.log(stair);
//     }
// }

/** Recursion Solution */
function pyramid(n, row = 0, stair = "") {
    const width = 2 * n - 1;
    const mid = Math.floor(width / 2);
    const leftEdge = mid - row;
    const rightEdge = mid + row;

    //hit the end of our problem
    if (n === row) return;

    //hit the end of the row
    if (stair.length === width) {
        console.log(stair);
        pyramid(n, row + 1);
        return;
    }

    if (leftEdge <= stair.length && stair.length <= rightEdge) {
        stair += "#";
    } else {
        stair += " ";
    }
    pyramid(n, row, stair);
}

module.exports = pyramid;
