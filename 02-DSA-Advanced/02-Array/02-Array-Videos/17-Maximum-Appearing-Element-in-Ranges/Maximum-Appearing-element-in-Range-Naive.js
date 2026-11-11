// MAXIMUM APPEARING ELEMENT IN RANGES: Find the element that appears in maximum number of ranges
// NAIVE APPROACH: Use frequency array and iterate through each element in each range
// Time Complexity: O(n × MAX) where n = number of ranges, MAX = 100 (or maximum range value)
// Space Complexity: O(MAX) for frequency array

// WHY SIZE 100?
// The array size of 100 is a common constraint in competitive programming problems.
// Problem statements often specify that all range values will be between 0-100 or 1-100.
// Using a fixed size of 100:
// 1. Avoids dynamic memory allocation
// 2. Simplifies the code (no need to find maximum value)
// 3. Is a standard practice when problem constraints are known
// 4. Ensures we can handle all possible values without overflow
// Note: In real-world scenarios, you might want to calculate MAX dynamically from the right array
//       for better memory efficiency, but 100 is fine when constraints are guaranteed.

function maximumAppearingElement(left, right){
  // Step 1: Create frequency array of size 100, initialized with zeros
  // freq[i] will store how many ranges contain element i
  // Example: freq = [0, 0, 0, 0, 0, ..., 0] (100 zeros)
  let freq = new Array(100).fill(0);
  
  // Step 2: Get the number of ranges (length of left/right arrays)
  let n = left.length;
  
  // Step 3: Process each range
  // For each range [left[i], right[i]], iterate through all elements in that range
  // and increment their frequency count
  for(let i = 0; i < n; i++){
    // Step 3.1: Iterate through all elements in the current range [left[i], right[i]]
    // For each element j from left[i] to right[i] (inclusive), increment freq[j]
    // Example: left = [1, 3], right = [3, 7]
    // i=0: Range [1, 3] -> j=1,2,3 -> increment freq[1], freq[2], freq[3]
    // i=1: Range [3, 7] -> j=3,4,5,6,7 -> increment freq[3], freq[4], freq[5], freq[6], freq[7]
    for(let j = left[i]; j <= right[i]; j++){
      freq[j] += 1;
    }
  }
  
  // Step 4: Find the element with maximum frequency
  // Initialize result to 0 (or 1 if we want to skip index 0)
  let res = 0;
  
  // Step 4.1: Iterate through frequency array to find maximum frequency
  // Start from index 1 (assuming valid elements start from 1)
  // If multiple elements have same maximum frequency, this will return the first one found
  // Example: After processing ranges [1,3] and [3,7]
  //   freq[1] = 1, freq[2] = 1, freq[3] = 2, freq[4] = 1, freq[5] = 1, freq[6] = 1, freq[7] = 1
  //   i=1: freq[1] (1) > freq[0] (0)? Yes, res = 1
  //   i=2: freq[2] (1) > freq[1] (1)? No, res stays 1
  //   i=3: freq[3] (2) > freq[1] (1)? Yes, res = 3
  //   i=4 to 99: No element has frequency > 2, so res stays 3
  for(let i = 1; i < 100; i++){
    if(freq[i] > freq[res]){
      res = i;
    }
  }
  
  // Step 5: Return the element that appears in maximum number of ranges
  return res;
}

// Step-by-step execution example:
// left = [1, 3]
// right = [3, 7]
// Ranges: [1,3] and [3,7]
//
// Step 1: Initialize frequency array
//   freq = [0, 0, 0, 0, 0, ..., 0] (100 zeros)
//
// Step 2: Process Range [1, 3] (i=0)
//   j=1: freq[1] = 0 + 1 = 1
//   j=2: freq[2] = 0 + 1 = 1
//   j=3: freq[3] = 0 + 1 = 1
//   After range [1,3]: freq[1]=1, freq[2]=1, freq[3]=1
//
// Step 3: Process Range [3, 7] (i=1)
//   j=3: freq[3] = 1 + 1 = 2
//   j=4: freq[4] = 0 + 1 = 1
//   j=5: freq[5] = 0 + 1 = 1
//   j=6: freq[6] = 0 + 1 = 1
//   j=7: freq[7] = 0 + 1 = 1
//   After range [3,7]: freq[3]=2, freq[4]=1, freq[5]=1, freq[6]=1, freq[7]=1
//
// Final frequency array (relevant indices):
//   freq[0] = 0
//   freq[1] = 1 (appears in 1 range: [1,3])
//   freq[2] = 1 (appears in 1 range: [1,3])
//   freq[3] = 2 (appears in 2 ranges: [1,3] and [3,7]) ← MAXIMUM
//   freq[4] = 1 (appears in 1 range: [3,7])
//   freq[5] = 1 (appears in 1 range: [3,7])
//   freq[6] = 1 (appears in 1 range: [3,7])
//   freq[7] = 1 (appears in 1 range: [3,7])
//
// Step 4: Find maximum frequency
//   res = 0
//   i=1: freq[1] (1) > freq[0] (0)? Yes, res = 1
//   i=2: freq[2] (1) > freq[1] (1)? No, res = 1
//   i=3: freq[3] (2) > freq[1] (1)? Yes, res = 3
//   i=4 to 99: No element has frequency > 2, so res stays 3
//
// Result: 3 (appears in maximum 2 ranges)

let left = [1, 3];
let right = [3, 7];
console.log(maximumAppearingElement(left, right)); // Expected output: 3