/**
 * Minimum Deletions to make array sorted (Variation of LIS)
 * Logic:
 * 1. Find length of Longest Increasing Subsequence (LIS)
 * 2. Return Array Length - LIS Length
 */

function lisLength(arr) {
  let n = arr.length;
  if (n === 0) return 0;
  let lis = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  return Math.max(...lis);
}

function minimumDeletionsToSort(arr) {
  let lisLen = lisLength(arr);
  return arr.length - lisLen;
}

// Example 1: [5, 10, 3, 6, 7, 8] → LIS length 4 (e.g. 5,6,7,8 or 3,6,7,8) → 6 - 4 = 2
console.log(minimumDeletionsToSort([5, 10, 3, 6, 7, 8])); // 2

// Example 2: [10, 20, 30] → LIS length 3 → 3 - 3 = 0
console.log(minimumDeletionsToSort([10, 20, 30])); // 0

// Example 3: [30, 20, 10] → LIS length 1 → 3 - 1 = 2
console.log(minimumDeletionsToSort([30, 20, 10])); // 2
