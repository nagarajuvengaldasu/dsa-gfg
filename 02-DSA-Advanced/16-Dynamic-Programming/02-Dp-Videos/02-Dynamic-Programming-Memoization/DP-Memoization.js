/*
 * LINE-BY-LINE EXECUTION
 *
 * --- Recursive fib(n) for n=2 ---
 * fib(2): n≠0,1 → return fib(1)+fib(0) = 1+0 = 1
 *   fib(1): return 1
 *   fib(0): return 0
 * Result: 1
 */
// Recursive approach
function fib(n) {
  // Base case
  if (n === 0 || n === 1) return n;
  // Recursive case
  // fib(n) = fib(n-1) + fib(n-2)
  return fib(n - 1) + fib(n - 2);
}
let n = 2;
console.log("Recursive approach: ", fib(n));

/*
 * --- Memoization fibmemo(n) for n=5 ---
 * memo = [null,...,null]. fibmemo(5): memo[5]=null, n≠0,1.
 *   memo[5] = fibmemo(4) + fibmemo(3)
 *   fibmemo(4): memo[4]=null → memo[4]=fibmemo(3)+fibmemo(2)
 *     fibmemo(3): memo[3]=null → memo[3]=fibmemo(2)+fibmemo(1)
 *       fibmemo(2): memo[2]=null → memo[2]=fibmemo(1)+fibmemo(0)=1+0=1. memo[2]=1, return 1
 *       fibmemo(1): return 1
 *     memo[3]=1+1=2, return 2
 *     fibmemo(2): memo[2]≠null → return 1
 *   memo[4]=2+1=3, return 3
 *   fibmemo(3): memo[3]≠null → return 2
 * memo[5]=3+2=5, return 5
 * Result: 5
 *  */

// Memoization approach

// Initialize memoization array with null values
let memo = new Array(100).fill(null);

function fibmemo(n) {
  // If the value is already computed, return it
  if (memo[n] !== null) return memo[n];

  // If the value is not computed, compute it
  if (n === 0 || n === 1) return n;

  // Compute the value and store it in the memoization array
  memo[n] = fibmemo(n - 1) + fibmemo(n - 2);

  // Return the computed value
  return memo[n];
}

// Test the memoization approach
let m = 5;
console.log("Memoization approach: ", fibmemo(m));
