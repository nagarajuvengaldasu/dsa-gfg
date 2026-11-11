/**
 * Function to find minimum flips to make all elements the same
 * Algorithm: We only need to flip the second group (the group that differs from arr[0])
 * Step-by-step execution:
 */
function minFlips(arr) {
  // Step 1: Initialize result string to store flip ranges
  let res = "";
  // Step 2: Get the length of the array
  let n = arr.length;

  // Step 3: Iterate through the array starting from index 1
  // We compare each element with its previous element to detect groups
  for (let i = 1; i < n; i++) {
    // Step 4: Check if current element is different from previous element
    // This indicates a transition between groups (e.g., 0 to 1 or 1 to 0)
    if (arr[i] !== arr[i - 1]) {
      // Step 5: Check if current element is different from the first element
      // If arr[i] !== arr[0], we're entering a new group that needs flipping
      // Example: arr[0] = 0, arr[i] = 1 means we found a group of 1s to flip
      if (arr[i] !== arr[0]) {
        // Step 6: Start of a new group that needs flipping
        // Record the starting index of the group to flip
        res += "From " + i + " to ";
        // Execution example: arr = [0,0,1,1,0,0,1,1,0,1]
        // i=2: arr[2]=1, arr[1]=0, arr[0]=0 → "From 2 to "
      } else {
        // Step 7: Current element matches arr[0], meaning we're ending a group
        // The previous index (i-1) is the end of the group that needs flipping
        res += i - 1 + "\n";
        // Execution example: arr = [0,0,1,1,0,0,1,1,0,1]
        // i=4: arr[4]=0, arr[3]=1, arr[0]=0 → "3\n" (closes "From 2 to 3")
      }
    }
  }

  // Step 8: Handle edge case - if last element is different from first element
  // This means the last group extends to the end and wasn't closed in the loop
  if (arr[n - 1] !== arr[0]) {
    // Step 9: Close the last group by adding the final index
    res += n - 1 + "\n";
    // Execution example: arr = [0,0,1,1,0,0,1,1,0,1]
    // arr[9]=1, arr[0]=0 → "9\n" (closes "From 8 to 9")
  }

  // Step 10: Return the result string containing all flip ranges
  return res;
}

// Test case: arr = [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
// Expected execution:
// i=2: arr[2]=1 ≠ arr[1]=0, arr[2]=1 ≠ arr[0]=0 → res = "From 2 to "
// i=4: arr[4]=0 ≠ arr[3]=1, arr[4]=0 = arr[0]=0 → res = "From 2 to 3\n"
// i=6: arr[6]=1 ≠ arr[5]=0, arr[6]=1 ≠ arr[0]=0 → res = "From 2 to 3\nFrom 6 to "
// i=8: arr[8]=0 ≠ arr[7]=1, arr[8]=0 = arr[0]=0 → res = "From 2 to 3\nFrom 6 to 7\n"
// i=9: arr[9]=1 ≠ arr[8]=0, arr[9]=1 ≠ arr[0]=0 → res = "From 2 to 3\nFrom 6 to 7\nFrom 9 to "
// After loop: arr[9]=1 ≠ arr[0]=0 → res = "From 2 to 3\nFrom 6 to 7\nFrom 9 to 9\n"

let arr = [0, 0, 1, 1, 0, 0, 1, 1, 0, 1];
console.log(minFlips(arr));
