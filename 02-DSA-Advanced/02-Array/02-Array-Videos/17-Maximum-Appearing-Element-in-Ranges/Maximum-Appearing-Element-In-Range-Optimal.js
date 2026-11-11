// MAXIMUM APPEARING ELEMENT IN RANGES: Find the element that appears in maximum number of ranges
// OPTIMAL APPROACH: Use difference array (prefix difference) technique
// Time Complexity: O(n + MAX) where n = number of ranges, MAX = 100
// Space Complexity: O(MAX) for frequency array
// 
// KEY OPTIMIZATION: Instead of iterating through each element in each range (O(n × MAX)),
// we use a difference array technique:
// 1. Mark range start with +1 and range end+1 with -1
// 2. Compute prefix sum to get actual frequencies
// This reduces time complexity from O(n × MAX) to O(n + MAX)

function maximumAppearingElement(left, right){
  // Step 1: Create frequency array of size 101 (to handle right[i] + 1 safely)
  // This array will initially store differences, then be converted to actual frequencies
  // Example: freq = [0, 0, 0, 0, 0, ..., 0] (101 zeros)
  let freq = new Array(101).fill(0);
  
  // Step 2: Get the number of ranges
  let n = left.length;
  
  // Step 3: Mark range boundaries using difference array technique
  // For each range [left[i], right[i]]:
  //   - Increment freq[left[i]] by 1 (marks the start of a range)
  //   - Decrement freq[right[i] + 1] by 1 (marks the end+1 of a range)
  // This technique allows us to mark entire ranges in O(1) per range
  // Example: left = [1, 3], right = [3, 7]
  // i=0: Range [1, 3]
  //   freq[1] = 0 + 1 = 1 (start of range [1,3])
  //   freq[3 + 1] = freq[4] = 0 - 1 = -1 (end+1 of range [1,3])
  // i=1: Range [3, 7]
  //   freq[3] = 0 + 1 = 1 (start of range [3,7])
  //   freq[7 + 1] = freq[8] = 0 - 1 = -1 (end+1 of range [3,7])
  // After marking: freq[1]=1, freq[3]=1, freq[4]=-1, freq[8]=-1, all others 0
  for(let i = 0; i < n; i++){
    freq[left[i]]++;
    freq[right[i] + 1]--;
  }
  
  // Step 4: Initialize result to 0
  let res = 0;
  
  // Step 5: Compute prefix sum to convert differences to actual frequencies
  // AND find the element with maximum frequency in the same pass
  // Prefix sum formula: freq[i] = freq[i] + freq[i-1]
  // This converts the difference array to actual frequency counts
  // Example: After marking ranges [1,3] and [3,7]
  //   Before prefix sum: freq[1]=1, freq[3]=1, freq[4]=-1, freq[8]=-1
  //   i=1: freq[1] = freq[1] + freq[0] = 1 + 0 = 1 (element 1 appears in 1 range)
  //   i=2: freq[2] = freq[2] + freq[1] = 0 + 1 = 1 (element 2 appears in 1 range)
  //   i=3: freq[3] = freq[3] + freq[2] = 1 + 1 = 2 (element 3 appears in 2 ranges) ← MAX
  //   i=4: freq[4] = freq[4] + freq[3] = -1 + 2 = 1 (element 4 appears in 1 range)
  //   i=5: freq[5] = freq[5] + freq[4] = 0 + 1 = 1 (element 5 appears in 1 range)
  //   i=6: freq[6] = freq[6] + freq[5] = 0 + 1 = 1 (element 6 appears in 1 range)
  //   i=7: freq[7] = freq[7] + freq[6] = 0 + 1 = 1 (element 7 appears in 1 range)
  //   i=8: freq[8] = freq[8] + freq[7] = -1 + 1 = 0 (element 8 appears in 0 ranges)
  for(let i = 1; i < 100; i++){
    // Step 5.1: Compute prefix sum to get actual frequency
    // This converts the difference array to actual frequency counts
    freq[i] = freq[i] + freq[i - 1];
    
    // Step 5.2: Track the element with maximum frequency
    // If current element has higher frequency than current result, update result
    // Example: After computing prefix sums
    //   i=1: freq[1] (1) > freq[0] (0)? Yes, res = 1
    //   i=2: freq[2] (1) > freq[1] (1)? No, res stays 1
    //   i=3: freq[3] (2) > freq[1] (1)? Yes, res = 3
    //   i=4 to 99: No element has frequency > 2, so res stays 3
    if(freq[i] > freq[res]){
      res = i;
    }
  }
  
  // Step 6: Return the element that appears in maximum number of ranges
  return res;
}

// Step-by-step execution example:
// left = [1, 3]
// right = [3, 7]
// Ranges: [1,3] and [3,7]
//
// Step 1: Initialize frequency array
//   freq = [0, 0, 0, 0, 0, ..., 0] (101 zeros)
//
// Step 2: Mark range boundaries (Difference Array Technique)
//   Range [1, 3] (i=0):
//     freq[left[0]] = freq[1] = 0 + 1 = 1 (mark start)
//     freq[right[0] + 1] = freq[4] = 0 - 1 = -1 (mark end+1)
//   After range [1,3]: freq[1]=1, freq[4]=-1
//
//   Range [3, 7] (i=1):
//     freq[left[1]] = freq[3] = 0 + 1 = 1 (mark start)
//     freq[right[1] + 1] = freq[8] = 0 - 1 = -1 (mark end+1)
//   After range [3,7]: freq[3]=1, freq[8]=-1
//
//   After marking both ranges:
//     freq[1] = 1, freq[3] = 1, freq[4] = -1, freq[8] = -1
//     All other indices remain 0
//
// Step 3: Compute prefix sum to get actual frequencies
//   i=1: freq[1] = freq[1] + freq[0] = 1 + 0 = 1
//        Check: freq[1] (1) > freq[0] (0)? Yes, res = 1
//
//   i=2: freq[2] = freq[2] + freq[1] = 0 + 1 = 1
//        Check: freq[2] (1) > freq[1] (1)? No, res = 1
//
//   i=3: freq[3] = freq[3] + freq[2] = 1 + 1 = 2
//        Check: freq[3] (2) > freq[1] (1)? Yes, res = 3
//
//   i=4: freq[4] = freq[4] + freq[3] = -1 + 2 = 1
//        Check: freq[4] (1) > freq[3] (2)? No, res = 3
//
//   i=5: freq[5] = freq[5] + freq[4] = 0 + 1 = 1
//        Check: freq[5] (1) > freq[3] (2)? No, res = 3
//
//   i=6: freq[6] = freq[6] + freq[5] = 0 + 1 = 1
//        Check: freq[6] (1) > freq[3] (2)? No, res = 3
//
//   i=7: freq[7] = freq[7] + freq[6] = 0 + 1 = 1
//        Check: freq[7] (1) > freq[3] (2)? No, res = 3
//
//   i=8: freq[8] = freq[8] + freq[7] = -1 + 1 = 0
//        Check: freq[8] (0) > freq[3] (2)? No, res = 3
//
// Final frequency array (actual frequencies):
//   freq[0] = 0
//   freq[1] = 1 (appears in 1 range: [1,3])
//   freq[2] = 1 (appears in 1 range: [1,3])
//   freq[3] = 2 (appears in 2 ranges: [1,3] and [3,7]) ← MAXIMUM
//   freq[4] = 1 (appears in 1 range: [3,7])
//   freq[5] = 1 (appears in 1 range: [3,7])
//   freq[6] = 1 (appears in 1 range: [3,7])
//   freq[7] = 1 (appears in 1 range: [3,7])
//   freq[8] = 0
//
// Result: 3 (appears in maximum 2 ranges)
//
// WHY THIS IS OPTIMAL:
// Naive approach: O(n × MAX) - for each range, iterate through all elements
// Optimal approach: O(n + MAX) - mark boundaries in O(n), compute prefix sum in O(MAX)
// For n=1000 ranges with MAX=100:
//   Naive: 1000 × 100 = 100,000 operations
//   Optimal: 1000 + 100 = 1,100 operations (much faster!)

let left = [1, 3];
let right = [3, 7];
console.log(maximumAppearingElement(left, right)); // Expected output: 3
