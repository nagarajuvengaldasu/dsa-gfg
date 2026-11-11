/**
 * Step-by-step execution:
 * Example: arr = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7]
 * Expected: 5 and 6 (both appear odd number of times)
 *
 * Outer loop iteration 1: i = 0, arr[i] = 3
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 3
 *     - Count = 2 (appears at index 0 and 2)
 *   - Step 3: count % 2 = 2 % 2 = 0 (even), skip
 *
 * Outer loop iteration 2: i = 1, arr[i] = 4
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 4
 *     - Count = 4 (appears at index 1, 3, 5, 6)
 *   - Step 3: count % 2 = 4 % 2 = 0 (even), skip
 *
 * Outer loop iteration 3: i = 2, arr[i] = 3
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 3
 *     - Count = 2 (appears at index 0 and 2)
 *   - Step 3: count % 2 = 2 % 2 = 0 (even), skip
 *
 * Outer loop iteration 4: i = 3, arr[i] = 4
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 4
 *     - Count = 4 (appears at index 1, 3, 5, 6)
 *   - Step 3: count % 2 = 4 % 2 = 0 (even), skip
 *
 * Outer loop iteration 5: i = 4, arr[i] = 5
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 5
 *     - Count = 1 (appears only at index 4)
 *   - Step 3: count % 2 = 1 % 2 = 1 (odd) → console.log(5)
 *
 * Outer loop iteration 6: i = 5, arr[i] = 4
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 4
 *     - Count = 4 (appears at index 1, 3, 5, 6)
 *   - Step 3: count % 2 = 4 % 2 = 0 (even), skip
 *
 * Outer loop iteration 7: i = 6, arr[i] = 4
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 4
 *     - Count = 4 (appears at index 1, 3, 5, 6)
 *   - Step 3: count % 2 = 4 % 2 = 0 (even), skip
 *
 * Outer loop iteration 8: i = 7, arr[i] = 6
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 6
 *     - Count = 1 (appears only at index 7)
 *   - Step 3: count % 2 = 1 % 2 = 1 (odd) → console.log(6)
 *
 * Outer loop iteration 9: i = 8, arr[i] = 7
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 7
 *     - Count = 2 (appears at index 8 and 9)
 *   - Step 3: count % 2 = 2 % 2 = 0 (even), skip
 *
 * Outer loop iteration 10: i = 9, arr[i] = 7
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 7
 *     - Count = 2 (appears at index 8 and 9)
 *   - Step 3: count % 2 = 2 % 2 = 0 (even), skip
 *
 * Output: 5, 6
 */
function twoOddAppearingNumber(arr) {
  // Step 1: Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Step 2: Initialize counter for current element
    let count = 0;

    // Step 3: Count occurrences of arr[i] in the entire array
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++; // Increment count when match is found
      }
    }

    // Step 4: Check if count is odd
    // If count % 2 !== 0, the number appears odd number of times
    if (count % 2 !== 0) {
      console.log(arr[i]); // Print the number with odd occurrence
    }
  }
}

// Test execution:
// Step 1: Initialize array
let arr = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7];
// Step 2: Call function to find and print odd-occurring numbers
twoOddAppearingNumber(arr); // Output: 5, 6
