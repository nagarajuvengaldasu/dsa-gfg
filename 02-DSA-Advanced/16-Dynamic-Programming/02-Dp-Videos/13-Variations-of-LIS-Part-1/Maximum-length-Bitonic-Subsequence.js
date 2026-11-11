/**
 * Maximum Length Bitonic Subsequence
 * Bitonic: first increases then decreases (or all increasing or all decreasing).
 *
 * Algorithm:
 * 1. LIS[i] = length of longest increasing subsequence ending at i
 * 2. LDS[i] = length of longest decreasing subsequence starting at i
 * 3. For each i as peak: bitonic length = LIS[i] + LDS[i] - 1; return max.
 */

function maxBitonicLength(arr) {
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

  let lds = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        lds[i] = Math.max(lds[i], lds[j] + 1);
      }
    }
  }

  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    maxLen = Math.max(maxLen, lis[i] + lds[i] - 1);
  }
  return maxLen;
}

// Example 1: [1, 11, 2, 10, 4, 5, 2, 1] → lis=[1,2,2,3,3,4,2,1], lds=[1,5,2,4,3,3,2,1] → max 2+5-1=6
console.log(maxBitonicLength([1, 11, 2, 10, 4, 5, 2, 1])); // 6

// Example 2: [1, 11, 2, 10, 4, 5, 3, 1] → 6
console.log(maxBitonicLength([1, 11, 2, 10, 4, 5, 3, 1])); // 6

// Example 3: [12, 11, 40, 5, 3, 1] → 5
console.log(maxBitonicLength([12, 11, 40, 5, 3, 1])); // 5

// Example 4: [30, 20, 10] → 3 (purely decreasing)
console.log(maxBitonicLength([30, 20, 10])); // 3
