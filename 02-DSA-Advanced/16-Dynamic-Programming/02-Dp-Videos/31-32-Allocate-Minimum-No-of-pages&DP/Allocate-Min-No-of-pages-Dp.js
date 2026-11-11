/*
PROBLEM STATEMENT:
Given an array of pages and k students, we need to allocate the pages to the students such that the maximum number of pages allocated to a student is minimum.
TIME COMPLEXITY: O(k*n^2)
SPACE COMPLEXITY: O(k*n)
KEY INSIGHT: This is a dynamic programming problem where we use a 2D array to store the minimum number of pages allocated to a student.
We use a gap strategy to fill the dp array.
*/
// Step 1: Define the function to allocate the pages to the students
function minpages(arr, k) {
  // Step 1.1: Calculate the length of the array
  let n = arr.length;
  // Step 1.2: Create a 2D array to store the minimum number of pages allocated to a student
  let dp = new Array(k + 1);
  // Step 1.3.1: Fill the dp array
  for (let i = 0; i <= k; i++) {
    // Step 1.3.1: Create a 1D array to store the minimum number of pages allocated to a student
    dp[i] = new Array(n + 1);
  }
  // Step 1.3: Fill the first row of the dp array
  for (let i = 1; i <= n; i++) {
    // Step 1.3.1.1: Calculate the sum of the array
    dp[1][i] = sum(arr, 0, i - 1);
  }
  // Step 1.3.2: Fill the first column of the dp array
  for (let i = 1; i <= k; i++) {
    // Step 1.3.2.1: Calculate the sum of the array
    dp[i][1] = arr[0];
  }
  // Step 1.3.3: Fill the rest of the dp array
  for (let i = 2; i <= k; i++) {
    // Step 1.3.3.1: Fill the rest of the dp array
    for (let j = 2; j <= n; j++) {
      // Step 1.3.3.1.1: Calculate the sum of the array
      let res = Number.POSITIVE_INFINITY;
      for (let p = 1; p < j; p++) {
        // Step 1.3.3.1.1.1: Calculate the sum of the array
        res = Math.min(res, Math.max(dp[i - 1][p], sum(arr, p, j - 1)));
      }
      // Step 1.3.3.1.1.2: Update the dp array
      dp[i][j] = res;
    }
  }
  // Step 1.3.3.1.2: Return the minimum number of pages allocated to a student
  return dp[k][n];
}
// Step 2: Define the function to calculate the sum of the array
function sum(arr, b, e) {
  // Step 2.1: Calculate the sum of the array
  let sum = 0;
  // Step 2.1.1: Calculate the sum of the array
  for (let i = b; i <= e; i++) {
    // Step 2.1.1.1: Calculate the sum of the array
    sum += arr[i];
  }
  // Step 2.1.2: Return the sum of the array
  return sum;
}
// Step 3: Define the main function
let arr = [10, 20, 30, 40];
let k = 2;
// Step 3.1: Call the function to allocate the pages to the students
console.log(minpages(arr, k));

// ========== OPTIMIZED VERSION (Prefix Sum) ==========
/*
OPTIMIZATION: Precompute prefix sum so range sum sum(arr, b, e) becomes O(1).
- prefix[i] = arr[0] + arr[1] + ... + arr[i-1]
- sum(arr, b, e) = prefix[e+1] - prefix[b]
TIME COMPLEXITY: O(n) for prefix + O(k*n^2) for DP = O(k*n^2) (no O(n) sum inside inner loop)
SPACE COMPLEXITY: O(k*n) for dp + O(n) for prefix = O(k*n)
*/
function minpagesOptimized(arr, k) {
  // Step 1: Calculate the length of the array
  let n = arr.length;

  // Precompute prefix sum: prefix[i] = sum of arr[0..i-1]
  // Step 1.1: Create a prefix sum array
  let prefix = new Array(n + 1);
  prefix[0] = 0;
  // Step 1.1.1: Fill the prefix sum array
  for (let i = 0; i < n; i++) {
    // Step 1.1.1.1: Fill the prefix sum array
    prefix[i + 1] = prefix[i] + arr[i];
  }
  // Range sum arr[b..e] = prefix[e+1] - prefix[b]
  // Step 1.2: Define the function to calculate the range sum
  function rangeSum(b, e) {
    // Step 1.2.1: Calculate the range sum
    return prefix[e + 1] - prefix[b];
  }

  // Step 1.3: Create a 2D array to store the minimum number of pages allocated to a student
  let dp = new Array(k + 1);
  // Step 1.3.1: Fill the dp array
  for (let i = 0; i <= k; i++) {
    // Step 1.3.1.1: Create a 1D array to store the minimum number of pages allocated to a student
    dp[i] = new Array(n + 1);
  }

  // First row: 1 student gets all books from 0 to j-1
  // Step 1.3.2: Fill the first row of the dp array
  for (let i = 1; i <= n; i++) {
    dp[1][i] = rangeSum(0, i - 1);
  }
  // First column: only first book
  // Step 1.3.3: Fill the first column of the dp array
  for (let i = 1; i <= k; i++) {
    // Step 1.3.3.1.1: Calculate the range sum
    dp[i][1] = arr[0];
  }

  // Step 1.3.4: Fill the rest of the dp array
  for (let i = 2; i <= k; i++) {
    // Step 1.3.4.1: Fill the rest of the dp array
    for (let j = 2; j <= n; j++) {
      // Step 1.3.4.1.1: Calculate the range sum
      let res = Number.POSITIVE_INFINITY;
      // Step 1.3.4.1.1.1: Try all possible partitions
      for (let p = 1; p < j; p++) {
        // Step 1.3.4.1.1.1.1: Calculate the range sum
        res = Math.min(res, Math.max(dp[i - 1][p], rangeSum(p, j - 1)));
        // Step 1.3.4.1.1.1.2: Update the dp array
      }
      dp[i][j] = res;
    }
  }
  // Step 1.3.4.1.1.2: Return the minimum number of pages allocated to a student
  return dp[k][n];
}

// Step 4: Define the main function
console.log(minpagesOptimized(arr, k));
