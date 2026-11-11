// OPTIMAL APPROACH: Pre-compute prefix sum array, then answer queries in O(1)
// Time Complexity: O(n) preprocessing, O(1) per query
// Space Complexity: O(n) for prefix sum array

function prefixsum(arr){
  // Step 1: Get the length of the array
  let n = arr.length;
  
  // Step 2: Create a new array to store prefix sums
  let psum = new Array(n);
  
  // Step 3: First element of prefix sum is same as first element of arr
  // psum[0] = sum of elements from index 0 to 0 = arr[0]
  psum[0] = arr[0];
  
  // Step 4: Build prefix sum array
  // psum[i] = sum of all elements from index 0 to i
  // Example: arr = [1,2,3,4,5]
  // i=1: psum[1] = psum[0] + arr[1] = 1 + 2 = 3
  // i=2: psum[2] = psum[1] + arr[2] = 3 + 3 = 6
  // i=3: psum[3] = psum[2] + arr[3] = 6 + 4 = 10
  // i=4: psum[4] = psum[3] + arr[4] = 10 + 5 = 15
  // Final psum = [1, 3, 6, 10, 15]
  for(let i=1;i<n;i++){
    psum[i] = psum[i-1] + arr[i];
  }
  
  // Step 5: Return the prefix sum array
  return psum;
}

function getsum(psum , start , end){
  // Step 1: If start is 0, sum from 0 to end is just psum[end]
  // Example: getsum(psum, 0, 2) = psum[2] = 6 (sum of arr[0] to arr[2])
  if(start === 0){
    return psum[end];
  }
  else{
    // Step 2: For start > 0, use the formula:
    // sum from start to end = psum[end] - psum[start-1]
    // This works because:
    // psum[end] = sum of arr[0] to arr[end]
    // psum[start-1] = sum of arr[0] to arr[start-1]
    // psum[end] - psum[start-1] = sum of arr[start] to arr[end]
    // Example: getsum(psum, 2, 4)
    // psum[4] = 15 (sum of arr[0] to arr[4])
    // psum[1] = 3 (sum of arr[0] to arr[1])
    // Result = 15 - 3 = 12 (sum of arr[2] to arr[4] = 3+4+5 = 12)
    return psum[end] - psum[start -1];
  }
}

// Step-by-step execution example:
// arr = [1,2,3,4,5]
// 
// Building prefix sum:
// psum[0] = arr[0] = 1
// psum[1] = psum[0] + arr[1] = 1 + 2 = 3
// psum[2] = psum[1] + arr[2] = 3 + 3 = 6
// psum[3] = psum[2] + arr[3] = 6 + 4 = 10
// psum[4] = psum[3] + arr[4] = 10 + 5 = 15
// psum = [1, 3, 6, 10, 15]
//
// Query: getsum(psum, 0, 2)
// start === 0, so return psum[2] = 6

let arr = [1,2,3,4,5];
let psum = prefixsum(arr);
console.log(getsum(psum, 0, 2)); // Output: 6