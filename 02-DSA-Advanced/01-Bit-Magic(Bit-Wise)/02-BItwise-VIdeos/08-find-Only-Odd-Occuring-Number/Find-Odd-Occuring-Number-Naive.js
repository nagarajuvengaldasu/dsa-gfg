/**
 * Step-by-step execution:
 * Example: arr = [4, 3, 4, 4, 4, 5, 5, 3, 3]
 * Expected: 3 (appears 3 times, which is odd)
 *
 * Outer loop iteration 1: i = 0, arr[i] = 4
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 4
 *     - j=0: arr[0]=4 === arr[0]=4 → count = 1
 *     - j=1: arr[0]=4 !== arr[1]=3 → count = 1
 *     - j=2: arr[0]=4 === arr[2]=4 → count = 2
 *     - j=3: arr[0]=4 === arr[3]=4 → count = 3
 *     - j=4: arr[0]=4 === arr[4]=4 → count = 4
 *     - j=5: arr[0]=4 !== arr[5]=5 → count = 4
 *     - j=6: arr[0]=4 !== arr[6]=5 → count = 4
 *     - j=7: arr[0]=4 !== arr[7]=3 → count = 4
 *     - j=8: arr[0]=4 !== arr[8]=3 → count = 4
 *   - Step 3: count % 2 = 4 % 2 = 0 (even), continue
 *
 * Outer loop iteration 2: i = 1, arr[i] = 3
 *   - Step 1: Initialize count = 0
 *   - Step 2: Inner loop counts occurrences of 3
 *     - j=0: arr[1]=3 !== arr[0]=4 → count = 0
 *     - j=1: arr[1]=3 === arr[1]=3 → count = 1
 *     - j=2: arr[1]=3 !== arr[2]=4 → count = 1
 *     - j=3: arr[1]=3 !== arr[3]=4 → count = 1
 *     - j=4: arr[1]=3 !== arr[4]=4 → count = 1
 *     - j=5: arr[1]=3 !== arr[5]=5 → count = 1
 *     - j=6: arr[1]=3 !== arr[6]=5 → count = 1
 *     - j=7: arr[1]=3 === arr[7]=3 → count = 2
 *     - j=8: arr[1]=3 === arr[8]=3 → count = 3
 *   - Step 3: count % 2 = 3 % 2 = 1 (odd) → return arr[1] = 3
 */
function findOddOccuringNumber(arr) {
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
      return arr[i]; // Return the number with odd occurrence
    }
  }
}

// Test execution:
// Step 1: Initialize array
let arr = [4, 3, 4, 4, 4, 5, 5, 3, 3];
// Step 2: Call function and print result
console.log(findOddOccuringNumber(arr)); // Output: 3
