// EQUAL PARTITION WITH EQUAL SUM: Check if array can be partitioned into three non-empty contiguous parts with equal sum
// Time Complexity: O(n) - single pass through the array
// Space Complexity: O(1) - only using a few variables

// OPTIMAL APPROACH EXPLANATION:
// 1. Calculate total sum of all elements
// 2. If total sum is not divisible by 3, return false (impossible to partition)
// 3. Calculate targetSum = totalSum / 3 (each part must sum to this value)
// 4. Iterate through array, maintaining a running sum
// 5. When running sum equals targetSum, we've found one partition:
//    - Increment foundParts counter
//    - Reset running sum to 0
// 6. If we find 2 partitions AND there are still elements remaining (i < n-1), return true
//    (The remaining elements will automatically sum to targetSum since total is divisible by 3)
// 7. If loop completes without finding 2 valid partitions, return false

function canThreePartsEqualSum(arr) {
  const n = arr.length;
  
  // Edge case: Need at least 3 elements to partition into 3 non-empty parts
  if (n < 3) {
    return false;
  }
  
  // Step 1: Calculate total sum
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }
  
  // Step 2: Check if total sum is divisible by 3
  // If not, impossible to partition into three equal sum parts
  if (totalSum % 3 !== 0) {
    return false;
  }
  
  // Step 3: Calculate target sum for each part
  const targetSum = totalSum / 3;
  
  let currentSum = 0;
  let foundParts = 0;
  
  // Step 4: Find partition points
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
    
    // Step 5: If current sum equals target, we found one part
    if (currentSum === targetSum) {
      foundParts++;
      currentSum = 0; // Reset for next segment
      
      // Step 6: If we found 2 parts and there are elements remaining,
      // the remaining elements must form the third part
      if (foundParts === 2 && i < n - 1) {
        return true;
      }
    }
  }
  
  // Step 7: If we couldn't find 2 valid partitions, return false
  return false;
}

// Example test cases:
let arr1 = [5, 2, 6, 1, 1, 1, 1, 4];
console.log(canThreePartsEqualSum(arr1)); // Expected: true
// Partition: [5,2] = 7, [6,1] = 7, [1,1,1,4] = 7

let arr2 = [3, 2, 5, 1, 1, 5];
console.log(canThreePartsEqualSum(arr2)); // Expected: false
// Total sum = 17, not divisible by 3

let arr3 = [0, 0, 0, 0];
console.log(canThreePartsEqualSum(arr3)); // Expected: true
// All zeros, can be partitioned

let arr4 = [1, 1, 1, 1, 1, 1];
console.log(canThreePartsEqualSum(arr4)); // Expected: true
// Partition: [1,1] = 2, [1,1] = 2, [1,1] = 2
