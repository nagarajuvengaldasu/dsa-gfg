// NAIVE APPROACH: Calculate sum directly by iterating through the range
// Time Complexity: O(end - start + 1) = O(n) per query
// Space Complexity: O(1)

function prefixsum(arr, start , end){
  // Step 1: Initialize sum variable to 0
  let sum = 0;
  
  // Step 2: Iterate through each element from start to end (inclusive)
  // Example: arr = [1,2,3,4,5], start=0, end=2
  // i=0: sum = 0 + arr[0] = 0 + 1 = 1
  // i=1: sum = 1 + arr[1] = 1 + 2 = 3
  // i=2: sum = 3 + arr[2] = 3 + 3 = 6
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  
  // Step 3: Return the calculated sum
  return sum;
}

// Step-by-step execution example:
// arr = [1,2,3,4,5]
// prefixsum(arr, 0, 2)
//   -> sum = 0
//   -> i=0: sum = 0 + arr[0] = 0 + 1 = 1
//   -> i=1: sum = 1 + arr[1] = 1 + 2 = 3
//   -> i=2: sum = 3 + arr[2] = 3 + 3 = 6
//   -> return 6

let arr = [1,2,3,4,5];
console.log(prefixsum(arr, 0, 2)); // Output: 6 (1+2+3)