/*
 * PROBLEM STATEMENT:
 * Given an unsorted array and target sum tar, count the number of contiguous
 * subarrays whose sum equals tar.
 *
 * OPTIMAL APPROACH: prefix[i]-prefix[j]=tar ⇒ subarray [j+1..i] has sum tar.
 * Map: prefix_sum → count. For current prefix, add count of (prefixSum-tar).
 *
 * STEP-BY-STEP (arr=[10,2,-2,-20,10], tar=-10):
 * map={0:1}, prefixSum=0, count=0
 * i=0: prefixSum=10, need 20 → map={0:1,10:1}
 * i=1: prefixSum=12, need 22 → map={...,12:1}
 * i=2: prefixSum=10, need 20 → map={...,10:2}
 * i=3: prefixSum=-10, need -10 → has 0! count+=1 → map={...,-10:1}
 * i=4: prefixSum=0, need -10 → has -10! count+=1. map={...,0:2}
 * Total subarrays: [10,2,-2,-20], [-20,10], etc. → count depends on logic
 *
 * EXAMPLE: arr=[10,2,-2,-20,10], tar=-10 → 3
 * Time: O(n) | Space: O(n)
 */

function subarrayCountWithSum(arr, tar) {
  const map = new Map();
  map.set(0, 1);
  // WHY: prefix[j]=0 means subarray [0..i] has sum tar. Need count of "0" before start.

  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    // EXECUTION: prefixSum = sum of arr[0..i].

    if (map.has(prefixSum - tar)) {
      count += map.get(prefixSum - tar);
      // EXECUTION: prefix[j]=prefixSum-tar ⇒ arr[j+1..i] has sum tar. Add that many.
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    // WHY: Record this prefix sum for future indices. Same sum can occur multiple times.
  }

  return count;
}

// ---------- Example: arr = [10, 2, -2, -20, 10], tar = -10 ----------
// Prefix sums (with 0 before): 0, 10, 12, 10, -10, 0.
// i=3: prefixSum=-10, need 0 → count += 1 ([10,2,-2,-20]).
// i=4: prefixSum=0, need 10 → count += 2 ([2,-2,-20,10], [-20,10]). Total: 3.

let arr1 = [10, 2, -2, -20, 10];
let tar1 = -10;
console.log(subarrayCountWithSum(arr1, tar1)); // 3
