// ========== Longest Common Span with Same Sum (NAIVE) ==========
// Goal: Given two binary arrays of same length, find longest span [i..j] such that
//       sum(arr1[i..j]) = sum(arr2[i..j]) (same sum in both arrays for same indices).
// Idea: For each start i and end j, compute sum1 = arr1[i]+..+arr1[j] and
//       sum2 = arr2[i]+..+arr2[j]. When sum1 === sum2, update max length = j - i + 1.
//       Time: O(n²), Space: O(1).

function longestCommonSpanWithSameSum(arr1, arr2) {
  let n = arr1.length;
  let res = 0;

  // Step 1: For each starting index i
  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    // Step 2: For each ending index j from i, add arr1[j] and arr2[j] to respective sums
    for (let j = i; j < n; j++) {
      sum1 += arr1[j];
      sum2 += arr2[j];
      // Step 3: When sums are equal, we have a common span of length j - i + 1
      if (sum1 === sum2) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
}

// ---------- Example: arr1 = [0,1,0,0,0,0], arr2 = [1,1,1,0,1,1] ----------
// Span [1..5]: arr1 sum = 1, arr2 sum = 1+1+0+1+1 = 4? No. Check each span to find max where sum1 === sum2.

let arr1 = [0, 1, 0, 0, 0, 0];
let arr2 = [1, 1, 1, 0, 1, 1];
console.log(longestCommonSpanWithSameSum(arr1, arr2));
