// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

/**
 * Using recursive solution, the runtime will be exponential time. (2 的 n 次方的指數成長)
 * Every increse in n, we are going to get a dramatic increase in the number of function calls that we get.
 * So it's better to use the iterative solution.
 */
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    if (n < 0) {
        return;
    }

    /**
     * These slowFib calls right here is now a memorized version of fib function.
     */
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
fib(12);

//iterative solution
function fib2(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }
    return result[n];
}

//cache 的另一種寫法
function fibMemo(position, cache = []) {
    if (cache[position]) {
        return cache[position];
    } else {
        if (position <= 2) {
            cache[position] = 1;
        } else {
            cache[position] =
                fibMemo(position - 1, cache) + fibMemo(position - 2, cache);
        }
        return cache[position];
    }
}

fibMemo(12);

module.exports = fib;
