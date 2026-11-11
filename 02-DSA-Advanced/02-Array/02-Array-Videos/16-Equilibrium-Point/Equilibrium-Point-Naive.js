// EQUILIBRIUM POINT: Find if there exists an index where sum of left elements equals sum of right elements
// An equilibrium point exists if: sum(arr[0...i-1]) == sum(arr[i+1...n-1])
// NAIVE APPROACH: For each index, calculate left sum and right sum separately
// Time Complexity: O(n²) - for each index i, we iterate to calculate left and right sums
// Space Complexity: O(1)

function equilibriumPoint(arr){
  // Step 1: Get the length of the array
  let n = arr.length;
  
  // Step 2: Check each index as a potential equilibrium point
  // Example: arr = [3,4,8,-9,9,7]
  // i=0: Check if sum of elements before index 0 == sum of elements after index 0
  // i=1: Check if sum of elements before index 1 == sum of elements after index 1
  // ... and so on
  for(let i=0;i<n;i++){
    // Step 2.1: Initialize left sum (sum of elements before index i)
    let ls =0;
    
    // Step 2.2: Initialize right sum (sum of elements after index i)
    let rs =0;
    
    // Step 2.3: Calculate left sum by iterating from 0 to i-1
    // Example: i=3, arr = [3,4,8,-9,9,7]
    // j=0: ls = 0 + arr[0] = 0 + 3 = 3
    // j=1: ls = 3 + arr[1] = 3 + 4 = 7
    // j=2: ls = 7 + arr[2] = 7 + 8 = 15
    // Final ls = 15 (sum of arr[0] to arr[2])
    for(let j=0;j<i;j++){
      ls += arr[j];
    }
    
    // Step 2.4: Calculate right sum by iterating from i+1 to n-1
    // Example: i=3, arr = [3,4,8,-9,9,7]
    // j=4: rs = 0 + arr[4] = 0 + 9 = 9
    // j=5: rs = 9 + arr[5] = 9 + 7 = 16
    // Final rs = 16 (sum of arr[4] to arr[5])
    for(let j=i+1;j<n;j++){
      rs += arr[j];
    }
    
    // Step 2.5: Check if left sum equals right sum
    // If yes, we found an equilibrium point at index i
    // Example: i=3, ls = 15, rs = 16, 15 != 16, so continue
    // Example: i=4, ls = 3+4+8+(-9) = 6, rs = 7, 6 != 7, so continue
    if(ls === rs){
      return true;
    }
  }
  
  // Step 3: If no equilibrium point found after checking all indices, return false
  return false;
}

// Step-by-step execution example:
// arr = [3,4,8,-9,9,7]
//
// i=0: Check if index 0 is equilibrium point
//   ls = 0 (no elements before index 0)
//   rs = arr[1] + arr[2] + arr[3] + arr[4] + arr[5] = 4 + 8 + (-9) + 9 + 7 = 19
//   ls (0) != rs (19), continue
//
// i=1: Check if index 1 is equilibrium point
//   ls = arr[0] = 3
//   rs = arr[2] + arr[3] + arr[4] + arr[5] = 8 + (-9) + 9 + 7 = 15
//   ls (3) != rs (15), continue
//
// i=2: Check if index 2 is equilibrium point
//   ls = arr[0] + arr[1] = 3 + 4 = 7
//   rs = arr[3] + arr[4] + arr[5] = (-9) + 9 + 7 = 7
//   ls (7) == rs (7) ✓
//   Return true (equilibrium point found at index 2)
//
// Note: The function returns true as soon as first equilibrium point is found

let arr = [3,4,8,-9,9,7];
console.log(equilibriumPoint(arr)); // Output: true (equilibrium point at index 2)