/*
 * PROBLEM STATEMENT:
 * Count the number of contiguous subarrays with sum 0.
 *
 * OPTIMAL: If prefix_sum repeats, subarray between has sum 0. Map stores count
 * of each prefix_sum. For current pre_sum, add map.get(pre_sum) to count.
 *
 * EXAMPLE: [0,0,5,5,0,0] → 6
 * Time: O(n) | Space: O(n)
 */

function zeroSumSubarraycount(arr, n) {
  let count = 0;
  let pre_sum = 0;
  let map = new Map();
  map.set(0, 1);
  // WHY: prefix sum 0 before start. Subarray [0..i] with sum 0 needs this.

  for (let i = 0; i < n; i++) {
    pre_sum += arr[i];
    // EXECUTION: pre_sum = sum of arr[0..i]. e.g. [0,0,5,5,0,0] → 0,0,5,10,10,10.

    if (map.has(pre_sum)) {
      count += map.get(pre_sum);
      map.set(pre_sum, map.get(pre_sum) + 1);
      // EXECUTION: Same pre_sum again → subarray between has sum 0. Each prev occurrence adds 1.
    } else {
      map.set(pre_sum, 1);
    }
  }

  return count;
}

/*
 * STEP-BY-STEP (arr=[0,0,5,5,0,0]):
 * map={0:1}, pre_sum=0, count=0
 * i=0: pre_sum=0, has 0 → count+=1=1, map={0:2}
 * i=1: pre_sum=0, has 0 → count+=2=3, map={0:3}
 * i=2: pre_sum=5, map={0:3,5:1}
 * i=3: pre_sum=10, map={0:3,5:1,10:1}
 * i=4: pre_sum=10, has 10 → count+=1=4, map={...,10:2}
 * i=5: pre_sum=10, has 10 → count+=2=6, map={...,10:3}
 * Total: 6
 */

let arr = [0, 0, 5, 5, 0, 0];
let n = arr.length;
console.log(zeroSumSubarraycount(arr, n));
