/**
 * EDIT DISTANCE - MEMOIZATION APPROACH
 * Same recursive logic as naive, with memo passed through recursive calls.
 * Time: O(m*n), Space: O(m*n)
 */
function editdistance(s1, s2, m, n) {
  let memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));
  if (memo[m][n] !== -1) return memo[m][n];
  if (m === 0) {
    memo[m][n] = n;
  } else if (n === 0) {
    memo[m][n] = m;
  } else if (s1[m - 1] === s2[n - 1]) {
    memo[m][n] = editdistance(s1, s2, m - 1, n - 1);
  } else {
    memo[m][n] =
      1 +
      Math.min(
        editdistance(s1, s2, m, n - 1),
        editdistance(s1, s2, m - 1, n),
        editdistance(s1, s2, m - 1, n - 1),
      );
  }
  return memo[m][n];
}

// then call the function
let s1 = "cat";
let s2 = "cut";
let m = s1.length;
let n = s2.length;
console.log(editdistance(s1, s2, m, n)); // 1 (replace 'a' with 'u')
