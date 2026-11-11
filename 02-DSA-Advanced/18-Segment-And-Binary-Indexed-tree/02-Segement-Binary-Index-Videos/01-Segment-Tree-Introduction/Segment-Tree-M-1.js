// `getsum` returns the sum of elements from index `qs` to `qe` (both inclusive) in array `arr`.
function getsum(arr, qs, qe) {
  // Start with a running total of 0.
  let sum = 0;
  // Loop from the starting index `qs` up to and including the ending index `qe`.
  for (let i = qs; i <= qe; i++) {
    // Add the current element `arr[i]` to the running total `sum`.
    sum = sum + arr[i];
  }
  // After the loop finishes, return the total sum of the requested range.
  return sum;
}

// Example array of 5 numbers.
let arr = [1, 2, 3, 4, 5];
// Query start index: include elements starting at index 0.
let qs = 0;
// Query end index: include elements up to index 2 (0‑based), i.e. 1 + 2 + 3.
let qe = 2;
// Call `getsum` with the array and indices, then print the result to the console.
console.log(getsum(arr, qs, qe));
