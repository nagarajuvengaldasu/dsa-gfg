// WEIGHTED PREFIX SUM: Calculates weighted sum where elements are multiplied by their position
// Formula: getWSum(l, r) = 1*arr[l] + 2*arr[l+1] + ... + (r-l+1)*arr[r]
// Time Complexity: O(n) preprocessing, O(1) per query
// Space Complexity: O(n)

// Build standard prefix sum array
// Step 1: Create prefix sum array where psum[i] = sum of arr[0] to arr[i]
function prefixsum(arr){
  let n = arr.length;
  let psum = new Array(n);
  
  // Step 1.1: First element is same as arr[0]
  psum[0] = arr[0];
  
  // Step 1.2: Build prefix sum
  // Example: arr = [2,3,5,4,6,1]
  // i=1: psum[1] = psum[0] + arr[1] = 2 + 3 = 5
  // i=2: psum[2] = psum[1] + arr[2] = 5 + 5 = 10
  // i=3: psum[3] = psum[2] + arr[3] = 10 + 4 = 14
  // i=4: psum[4] = psum[3] + arr[4] = 14 + 6 = 20
  // i=5: psum[5] = psum[4] + arr[5] = 20 + 1 = 21
  // Final psum = [2, 5, 10, 14, 20, 21]
  for(let i=1;i<n;i++){
    psum[i] = psum[i-1] + arr[i];
  }
  return psum;
}

// Build weighted prefix sum array: bWsum[i] = 1*arr[0] + 2*arr[1] + ... + (i+1)*arr[i]
// Step 2: Create weighted prefix sum where each element is multiplied by its (index+1)
function weightedPrefixSum(arr){
  let n = arr.length;
  let bWsum = new Array(n);
  
  // Step 2.1: First element: weight = (0+1) = 1
  bWsum[0] = 1 * arr[0]; // (0+1) * arr[0]
  
  // Step 2.2: Build weighted prefix sum
  // Example: arr = [2,3,5,4,6,1]
  // i=1: bWsum[1] = bWsum[0] + (1+1)*arr[1] = 2 + 2*3 = 2 + 6 = 8
  // i=2: bWsum[2] = bWsum[1] + (2+1)*arr[2] = 8 + 3*5 = 8 + 15 = 23
  // i=3: bWsum[3] = bWsum[2] + (3+1)*arr[3] = 23 + 4*4 = 23 + 16 = 39
  // i=4: bWsum[4] = bWsum[3] + (4+1)*arr[4] = 39 + 5*6 = 39 + 30 = 69
  // i=5: bWsum[5] = bWsum[4] + (5+1)*arr[5] = 69 + 6*1 = 69 + 6 = 75
  // Final bWsum = [2, 8, 23, 39, 69, 75]
  for(let i=1;i<n;i++){
    bWsum[i] = bWsum[i-1] + (i+1) * arr[i];
  }
  return bWsum;
}

// Calculate weighted sum for range [start, end]
// Formula: getWSum(l, r) = 1*arr[l] + 2*arr[l+1] + ... + (r-l+1)*arr[r]
// Mathematical expansion: getWSum(l, r) = Σ(i-l+1)*arr[i] = Σ(i+1)*arr[i] - l*Σarr[i]
// Step 3: Calculate weighted sum using precomputed arrays
let getWSum = (bWsum, psum, start, end) => {
  // Step 3.1: If start is 0, weighted sum is directly bWsum[end]
  // Example: getWSum(bWsum, psum, 0, 2)
  // bWsum[2] = 1*2 + 2*3 + 3*5 = 2 + 6 + 15 = 23
  if(start === 0){
    return bWsum[end];
  }
  else{
    // Step 3.2: For start > 0, use the formula:
    // getWSum(l, r) = (bWsum[r] - bWsum[l-1]) - l * (psum[r] - psum[l-1])
    // 
    // Breaking it down:
    // - bWsum[r] - bWsum[l-1] gives Σ(i+1)*arr[i] from l to r
    // - psum[r] - psum[l-1] gives Σarr[i] from l to r
    // - We subtract l*Σarr[i] to adjust weights
    //
    // Example: getWSum(bWsum, psum, 2, 3)
    // bWsum[3] - bWsum[1] = 39 - 8 = 31 (sum of (i+1)*arr[i] from i=2 to 3)
    //   = (2+1)*5 + (3+1)*4 = 3*5 + 4*4 = 15 + 16 = 31 ✓
    // psum[3] - psum[1] = 14 - 5 = 9 (sum of arr[i] from i=2 to 3 = 5+4)
    // l * (psum[3] - psum[1]) = 2 * 9 = 18
    // Result = 31 - 18 = 13
    // Verification: getWSum(2,3) = 1*arr[2] + 2*arr[3] = 1*5 + 2*4 = 5 + 8 = 13 ✓
    return (bWsum[end] - bWsum[start-1]) - start * (psum[end] - psum[start-1]);
  }
}

// Step-by-step execution example:
// arr = [2,3,5,4,6,1]
//
// Building standard prefix sum (psum):
// psum[0] = 2
// psum[1] = 2 + 3 = 5
// psum[2] = 5 + 5 = 10
// psum[3] = 10 + 4 = 14
// psum[4] = 14 + 6 = 20
// psum[5] = 20 + 1 = 21
// psum = [2, 5, 10, 14, 20, 21]
//
// Building weighted prefix sum (bWsum):
// bWsum[0] = 1*2 = 2
// bWsum[1] = 2 + 2*3 = 2 + 6 = 8
// bWsum[2] = 8 + 3*5 = 8 + 15 = 23
// bWsum[3] = 23 + 4*4 = 23 + 16 = 39
// bWsum[4] = 39 + 5*6 = 39 + 30 = 69
// bWsum[5] = 69 + 6*1 = 69 + 6 = 75
// bWsum = [2, 8, 23, 39, 69, 75]
//
// Query 1: Standard sum (2,3) = arr[2] + arr[3] = 5 + 4 = 9
//   psum[3] - psum[1] = 14 - 5 = 9 ✓
//
// Query 2: Weighted sum (2,3) = 1*arr[2] + 2*arr[3] = 1*5 + 2*4 = 13
//   (bWsum[3] - bWsum[1]) - 2*(psum[3] - psum[1])
//   = (39 - 8) - 2*(14 - 5)
//   = 31 - 2*9
//   = 31 - 18
//   = 13 ✓
//
// Query 3: Weighted sum (0,2) = 1*arr[0] + 2*arr[1] + 3*arr[2] = 1*2 + 2*3 + 3*5 = 23
//   Since start=0, return bWsum[2] = 23 ✓

let arr = [2,3,5,4,6,1];
let psum = prefixsum(arr);
let bWsum = weightedPrefixSum(arr);
console.log("Standard sum (2,3):", psum[3] - (psum[1] || 0)); // Should be 9
console.log("Weighted sum (2,3):", getWSum(bWsum, psum, 2, 3)); // Should be 13
console.log("Weighted sum (0,2):", getWSum(bWsum, psum, 0, 2)); // Should be 23