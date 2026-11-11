/**
 * Maximum Sum Increasing Subsequence (MSIS)
 * msis[i] = max sum of an increasing subsequence ending at index i.
 * Initially msis = copy of arr; then for each i, extend from j < i if arr[j] < arr[i].
 * Time: θ(n^2), Aux Space: θ(n)
 */
function maxSIS(arr) {
  let msis = [...arr];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        msis[i] = Math.max(msis[i], arr[i] + msis[j]);
      }
    }
  }
  return Math.max(...msis);
}

// Example: [3, 1, 10, 4, 7] → msis becomes [3, 1, 13, 7, 14] → return 14
console.log(maxSIS([3, 1, 10, 4, 7])); // 14
