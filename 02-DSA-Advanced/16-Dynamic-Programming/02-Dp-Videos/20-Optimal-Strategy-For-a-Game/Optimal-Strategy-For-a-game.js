/**
 * Function to find the maximum value that can be obtained using the given array
 * @param {number[]} arr - The array of values
 * @returns {number} - The maximum value that can be obtained
 */
// Step 1: Initialize the sum of the array
function maxval(arr) {
  let n = arr.length;
  // Step 2: Initialize the sum of the array
  let sum = 0;
  // Step 3: Calculate the sum of the array
  for (let i = 0; i < n; i++) {
    // Step 3a: Add the current element to the sum
    sum += arr[i];
  }
  // Step 4: Call the recursive function to find the maximum value that can be obtained using the given array
  return recmov(arr, 0, n - 1, sum);
}
// Step 2: Recursive function to find the maximum value that can be obtained using the given array
function recmov(arr, i, j, sum) {
  // Step 2a: Base case: if the length of the array is 2, return the maximum value between the two elements
  if (i + 1 === j) {
    // Step 2b1: Return the maximum value between the two elements
    return Math.max(arr[i], arr[j]);
  }
  // Step 2b2: Return the maximum value between the two elements
  return Math.max(
    // Step 2b3: Return the maximum value between the two elements
    sum - recmov(arr, i + 1, j, sum - arr[i]),
    // Step 2b4: Return the maximum value between the two elements
    sum - recmov(arr, i, j - 1, sum - arr[j]),
    // Step 2b5: Return the maximum value between the two elements
  );
}
// Step 3: Test the function
let arr = [8, 15, 7, 3];
// Step 4: Print the maximum value that can be obtained
console.log(maxval(arr));
