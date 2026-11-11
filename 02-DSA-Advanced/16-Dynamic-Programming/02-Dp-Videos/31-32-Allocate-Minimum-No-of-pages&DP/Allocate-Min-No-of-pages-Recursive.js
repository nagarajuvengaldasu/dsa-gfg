/*
PROBLEM STATEMENT:
Given an array of pages and k students, we need to allocate the pages to the students such that the maximum number of pages allocated to a student is minimum.
TIME COMPLEXITY: O(2^n)
SPACE COMPLEXITY: O(n)
KEY INSIGHT: This is a dynamic programming problem where we use a 2D array to store the minimum number of pages allocated to a student.
We use a gap strategy to fill the dp array.
*/

// Step 1: Define the function to allocate the pages to the students
function allocatePages(arr, n, k) {
  // Step 1.1: If there is only one student, return the sum of the array
  if (k === 1) {
    return sum(arr, 0, n - 1);
  }
  
  // Step 1.2: If there is only one book, return the pages of the book
  if (n === 1) {
    return arr[0];
  }
  // Step 1.3: Try all possible partitions
  let res = Number.POSITIVE_INFINITY;
  // Step 1.3.1: Try all possible partitions
  for (let i = 1; i < n; i++) {
    // Step 1.3.1.1: Try all possible partitions
    res = Math.min(
      res,
      Math.max(allocatePages(arr, i, k - 1), sum(arr, i, n - 1)),
    );
  }
  // Step 1.3.1.2: Return the minimum number of pages allocated to a student
  return res;
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
let n = arr.length;
let k = 2;
// Step 3.1: Call the function to allocate the pages to the students
console.log(allocatePages(arr, n, k));
