/*
PROBLEM STATEMENT:
Given a sequence of matrices, find the most efficient way to multiply these matrices together.
You are given an array of integers, where each integer represents the number of rows in a matrix, and the next integer represents the number of columns in that matrix.
You need to find the most efficient way to multiply these matrices together.
The efficient way is the one that minimizes the number of multiplications.
The number of multiplications is the product of the number of rows and columns of the matrices.
The number of rows of the first matrix is the same as the number of columns of the last matrix.
The number of columns of the first matrix is the same as the number of rows of the second matrix.
The number of rows of the second matrix is the same as the number of columns of the third matrix.
And so on.
The number of multiplications is the product of the number of rows and columns of the matrices.
The number of multiplications is the product of the number of rows and columns of the matrices. 
**/
function matrixChainMultiplication(arr) {
  // Step 1: Initialize the dp array
  let n = arr.length;
  // Step 2: Create a 2D array to store the minimum number of multiplications for each subproblem
  let dp = new Array(n);
  // Step 3: Initialize the dp array with 0
  for (let i = 0; i < n; i++) {
    // Step 3.1: Create a 2D array to store the minimum number of multiplications for each subproblem
    dp[i] = new Array(n);
  }
  // Step 4: Initialize the dp array with 0
  for (let i = 0; i < n - 1; i++) {
    // Step 4.1: Initialize the dp array with 0
    dp[i][i + 1] = 0;
  }
  // Step 5: Fill the dp array
  // Step 5.1: Fill the dp array with 0
  for (let gap = 2; gap < n; gap++) {
    // Step 5.1: Fill the dp array with 0
    for (let i = 0; i < n - gap; i++) {
      // Step 5.2: Fill the dp array with 0
      let j = i + gap;
      // Step 5.3: Fill the dp array with 0
      dp[i][j] = Number.POSITIVE_INFINITY;
      // Step 5.4: Fill the dp array with 0
      for (let k = i + 1; k < j; k++) {
        // Step 5.5: Fill the dp array with 0
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k][j] + arr[i] * arr[k] * arr[j],
        );
      }
    }
  }
  // Step 6: Return the minimum number of multiplications
  return dp[0][n - 1];
}
let arr = [10, 20, 30, 40];
console.log(matrixChainMultiplication(arr));
