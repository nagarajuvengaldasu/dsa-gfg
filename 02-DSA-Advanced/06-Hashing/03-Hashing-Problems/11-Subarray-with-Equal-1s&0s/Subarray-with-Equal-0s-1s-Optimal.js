/*
 * PROBLEM STATEMENT:
 * Count subarrays with equal 0s and 1s.
 *
 * OPTIMAL: Treat 0 as -1, 1 as +1. Subarray sum 0 means equal 0s and 1s.
 * Use prefix sum + Map (same as zero-sum subarray count).
 *
 * STEP-BY-STEP (arr=[1,0,0,1,0,1,1]):
 * Treat: [1,-1,-1,1,-1,1,1]. map={0:1}, sum=0, count=0
 * i=0: sum=1 → map={0:1,1:1}
 * i=1: sum=0 → count+=1, map={0:2,1:1}
 * i=2: sum=-1 → map={...,-1:1}
 * i=3: sum=0 → count+=2, map={0:3,...}
 * ... (similar)
 * Total: 9
 *
 * EXAMPLE: [1,0,0,1,0,1,1] → 9
 * Time: O(n) | Space: O(n)
 */
function countequalzeroone(arr, n) {
  const map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  // WHY: 0→-1, 1→+1. Sum 0 = equal 0s and 1s. Same logic as zero-sum subarray.
  for (let i = 0; i < n; i++) {
    sum += (arr[i] === 0 ? -1 : 1);
    // EXECUTION: [1,0,0,1...] → sum: 1, 0, -1, 0, ...

    if (map.has(sum)) {
      count += map.get(sum);
      map.set(sum, map.get(sum) + 1);
      // EXECUTION: Same sum → subarray between has sum 0 = equal 0s&1s.
    } else {
      map.set(sum, 1);
    }
  }
  return count;
}

let arr = [1, 0, 0, 1, 0, 1, 1];
let n = arr.length;
console.log(countequalzeroone(arr, n));
