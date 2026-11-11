// memo is a 2D array (m+1) x (n+1) initialized as null
// Created inside lcs to avoid shared-row bug; persists across recursive calls
function lcs(s1, s2, m, n) {
  //we are creating a 2D array to store the results of the subproblems
  let memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(null));
  //if the result is already computed, we return it
  if (memo[m][n] !== null) {
    //if the result is already computed, we return it
    return memo[m][n];
  }
  //if the length of either string is 0, we return 0
  if (m === 0 || n === 0) {
    memo[m][n] = 0;
  } else {
    //if the last character of both strings is the same, we add 1 to the result
    if (s1[m - 1] === s2[n - 1]) {
      memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1);
    } else {
      //if the last character of both strings is not the same, we take the maximum of the two results
      memo[m][n] = Math.max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
    }
  }
  //we return the result
  return memo[m][n];
}

let s1 = "ABCDGH";
let s2 = "AEDFHR";
let m = s1.length;
let n = s2.length;
console.log("Memoization approach: ", lcs(s1, s2, m, n));
