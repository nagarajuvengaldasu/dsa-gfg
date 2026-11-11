// EQUILIBRIUM POINT: Find if there exists an index where sum of left elements equals sum of right elements
// An equilibrium point exists if: sum(arr[0...i-1]) == sum(arr[i+1...n-1])
// OPTIMAL APPROACH: Calculate total sum first, then use single pass to find equilibrium point
// Time Complexity: O(n) - two passes through the array
// Space Complexity: O(1) - only using a few variables

function equilibriumpoint(arr){
  // Step 1: Initialize right sum to 0
  // Right sum will initially store the total sum of all elements
  let rs =0;
  
  // Step 2: Calculate total sum of all elements (this becomes initial right sum)
  // Example: arr = [3,4,8,-9,9,7]
  // i=0: rs = 0 + arr[0] = 0 + 3 = 3
  // i=1: rs = 3 + arr[1] = 3 + 4 = 7
  // i=2: rs = 7 + arr[2] = 7 + 8 = 15
  // i=3: rs = 15 + arr[3] = 15 + (-9) = 6
  // i=4: rs = 6 + arr[4] = 6 + 9 = 15
  // i=5: rs = 15 + arr[5] = 15 + 7 = 22
  // Final rs = 22 (total sum of all elements)
  for(let i=0;i<arr.length;i++){
    rs = rs + arr[i];
  }
  
  // Step 3: Initialize left sum to 0
  // Left sum starts at 0 (no elements before index 0)
  let ls =0;
  
  // Step 4: Iterate through array to find equilibrium point
  // At each index i:
  // - rs represents sum of elements from i+1 to n-1 (right side)
  // - ls represents sum of elements from 0 to i-1 (left side)
  // - Before checking, we subtract arr[i] from rs (since we're now at index i, 
  //   arr[i] should not be included in right sum)
  // - If ls == rs, we found equilibrium point
  // - Otherwise, add arr[i] to ls and continue
  for(let i=0;i<arr.length;i++){
    // Step 4.1: Subtract current element from right sum
    // At index i, right sum should not include arr[i], only elements after it
    // Example: i=0, rs = 22 - arr[0] = 22 - 3 = 19 (sum of elements from index 1 to 5)
    rs = rs - arr[i];

    // Step 4.2: Check if left sum equals right sum
    // If yes, we found an equilibrium point at index i
    // Example: i=2
    //   ls = 3 + 4 = 7 (sum of elements before index 2)
    //   rs = 19 - 4 - 8 = 7 (sum of elements after index 2)
    //   ls (7) == rs (7) ✓
    if(ls === rs){
      return true;
    }
    else{
      // Step 4.3: If not equal, add current element to left sum
      // This prepares ls for the next iteration
      // Example: i=0, ls = 0 + arr[0] = 0 + 3 = 3
      //          i=1, ls = 3 + arr[1] = 3 + 4 = 7
      //          i=2, ls = 7 + arr[2] = 7 + 8 = 15 (but we return true before this)
      ls = ls + arr[i];
    }
  }
  
  // Step 5: If no equilibrium point found after checking all indices, return false
  return false;
}

// Step-by-step execution example:
// arr = [3,4,8,-9,9,7]
//
// First loop: Calculate total sum
//   rs = 0
//   i=0: rs = 0 + 3 = 3
//   i=1: rs = 3 + 4 = 7
//   i=2: rs = 7 + 8 = 15
//   i=3: rs = 15 + (-9) = 6
//   i=4: rs = 6 + 9 = 15
//   i=5: rs = 15 + 7 = 22
//   Final rs = 22 (total sum)
//
// Second loop: Find equilibrium point
//   ls = 0
//   rs = 22
//
//   i=0: Check if index 0 is equilibrium point
//     rs = 22 - arr[0] = 22 - 3 = 19 (right sum = sum of arr[1] to arr[5])
//     ls (0) == rs (19)? No
//     ls = 0 + arr[0] = 0 + 3 = 3
//
//   i=1: Check if index 1 is equilibrium point
//     rs = 19 - arr[1] = 19 - 4 = 15 (right sum = sum of arr[2] to arr[5])
//     ls (3) == rs (15)? No
//     ls = 3 + arr[1] = 3 + 4 = 7
//
//   i=2: Check if index 2 is equilibrium point
//     rs = 15 - arr[2] = 15 - 8 = 7 (right sum = sum of arr[3] to arr[5])
//     ls (7) == rs (7)? Yes ✓
//     Return true (equilibrium point found at index 2)
//
// Verification:
//   Left sum (index 0 to 1): arr[0] + arr[1] = 3 + 4 = 7
//   Right sum (index 3 to 5): arr[3] + arr[4] + arr[5] = (-9) + 9 + 7 = 7
//   Both are equal, so equilibrium point exists at index 2 ✓

let arr = [3,4,8,-9,9,7];
console.log(equilibriumpoint(arr)); // Output: true (equilibrium point at index 2)