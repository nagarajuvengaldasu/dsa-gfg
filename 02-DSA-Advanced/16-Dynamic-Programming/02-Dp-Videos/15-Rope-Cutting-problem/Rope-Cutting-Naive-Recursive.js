/**
 * ROPE CUTTING PROBLEM - DP SOLUTION
 * Problem: Given a rope of length n, and three lengths a, b, and c,
 * find the maximum number of pieces that can be made by cutting the rope.
 * Each cut must be of length a, b, or c.
 *
 * Time Complexity: O(3^n) - exponential, as we try all 3 possibilities at each step
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 */
function ropeCutting(n, a, b, c) {
  // then check if the rope length is 0
  if (n === 0) return 0;
  // then check if the rope length is negative
  if (n < 0) return -1;
  // then try all 3 possibilities
  let res = Math.max(
    // then try cutting the rope by length a
    ropeCutting(n - a, a, b, c),
    // then try cutting the rope by length b
    ropeCutting(n - b, a, b, c),
    // then try cutting the rope by length c
    ropeCutting(n - c, a, b, c),
  );
  // then check if the result is -1
  if (res === -1) return -1;
  // then return the result + 1
  return res + 1;
}

// then test the function
let n = 5;
let a = 1;
let b = 2;
let c = 3;
console.log(ropeCutting(n, a, b, c));
