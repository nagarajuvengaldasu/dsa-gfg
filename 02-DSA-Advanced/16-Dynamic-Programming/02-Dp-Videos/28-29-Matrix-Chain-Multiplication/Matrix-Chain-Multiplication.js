/*
MATRIX CHAIN MULTIPLICATION - Recursive Solution
Problem: Given a chain of matrices, find the minimum cost of multiplying all matrices.
Time Complexity: O(2^n) - exponential, as we explore all possible splits
Space Complexity: O(n) - maximum depth of recursion stack is n
*/

function matrixChainMultiplication(arr, i, j) {
  // Step 1: Base case - If there is only one matrix, no multiplication needed
  //   i = beginning index, j = end index
  //   If i+1 === j, there are 0 or 1 matrices, no multiplication possible
  if (i + 1 === j) {
    // No multiplication needed, cost is 0
    return 0;
  }
  // Step 2: Recursive case - Try all possible splits between matrices
  //   k = index to split the matrices
  //   res = minimum cost of multiplying the matrices
  //   arr[i] = number of rows in the first matrix
  //   arr[k] = number of columns in the middle matrix
  //   arr[j] = number of columns in the last matrix
  let res = Number.POSITIVE_INFINITY;
  for (let k = i + 1; k < j; k++) {
    // Step 2a: Calculate cost of multiplying the matrices
    //   matrixChainMultiplication(arr, i, k) = cost of multiplying the first i matrices
    //   matrixChainMultiplication(arr, k, j) = cost of multiplying the last j matrices
    //   arr[i] * arr[k] * arr[j] = cost of multiplying the middle matrix
    //   res = minimum cost of multiplying the matrices
    res = Math.min(
      res,
      matrixChainMultiplication(arr, i, k) +
        matrixChainMultiplication(arr, k, j) +
        arr[i] * arr[k] * arr[j],
    );
  }
  // Step 3: Return the minimum cost of multiplying the matrices
  return res;
}
let arr = [20, 10, 30, 40];
let i = 0;
let j = arr.length - 1;
console.log(matrixChainMultiplication(arr, i, j));
