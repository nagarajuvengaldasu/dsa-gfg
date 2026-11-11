/**
 * EDIT DISTANCE - NAIVE APPROACH
 * Problem: Given two strings s1 and s2, find the minimum number of operations
 * to convert s1 to s2.
 *
 * Time Complexity: O(3^n) - exponential, as we try all 3 possibilities at each step
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 *
 * KEY INSIGHT: This is a recursive problem where at each step, we try to convert
 * the current substring of s1 to the current substring of s2.
 */

function editdistance(s1, s2, m, n) {
  // first check if the length of s1 is 0
  if (m === 0) {
    return n;
  }
  // then check if the length of s2 is 0
  if (n === 0) {
    return m;
  }
  // then check if the last character of s1 is equal to the last character of s2
  if (s1[m - 1] === s2[n - 1]) {
    // then return the result of the recursive call
    return editdistance(s1, s2, m - 1, n - 1);
  } else {
    // then return the result of the recursive call
    return (
      1 +
      Math.min(
        // then return the result of the recursive call
        editdistance(s1, s2, m, n - 1),
        // then return the result of the recursive call
        editdistance(s1, s2, m - 1, n),
        // then return the result of the recursive call
        editdistance(s1, s2, m - 1, n - 1),
      )
    );
  }
}
// then call the function
let s1 = "cat";
let s2 = "cut";
let m = s1.length;
let n = s2.length;
console.log(editdistance(s1, s2, m, n));
