/**
 * REPEATING ELEMENT - EFFICIENT SOLUTION USING BOOLEAN ARRAY
 * Problem: Find a repeating element in an array
 * 
 * What is the problem?
 * - Given an array, find any element that appears more than once
 * - Return the first repeating element found
 * - Return -1 if no repeating element exists
 * 
 * Approach: Boolean Array (Efficient) - O(n)
 * - Use a boolean array to track which elements we've seen
 * - For each element, check if we've seen it before
 * - If yes, it's a duplicate - return it!
 * - If no, mark it as visited and continue
 * 
 * Time Complexity: O(n) where n is the length of array
 *   - Single pass through the array: O(n)
 *   - Array access and assignment: O(1)
 *   - Total: O(n)
 * Space Complexity: O(n) - boolean array of size n
 * 
 * WHY THIS IS EFFICIENT:
 * 1. Time: O(n) - optimal linear time complexity
 * 2. Single pass: Only one iteration through the array
 * 3. Simple: Easy to understand and implement
 * 4. Fast: Much faster than O(n²) nested loops or O(n log n) sorting
 * 
 * KEY INSIGHT:
 * - Use array values as indices into a boolean array
 * - If isVisited[arr[i]] is true, we've seen arr[i] before → duplicate!
 * - This requires array values to be valid indices (0 to n-1)
 * 
 * IMPORTANT ASSUMPTION:
 * This approach assumes array values are within range [0, arr.length-1]
 * so they can be used as valid array indices. If values can be larger,
 * use a Set or Map instead (see alternative approach in comments).
 */

// EFFICIENT APPROACH: O(n) - Boolean Array
function repeatingElement(arr){
  // Step 1: Create a boolean array to track visited elements
  // Size: arr.length (one slot for each possible value)
  // Initialize all to false (no elements visited yet)
  // 
  // This array uses indices to represent array values:
  //   isVisited[i] = true means we've seen value 'i' before
  // 
  // Example: arr = [0, 2, 1, 3, 2, 2] → length = 6
  //   isVisited = [false, false, false, false, false, false]
  //   Indices:     0       1       2       3       4       5
  //   Meaning:    0 not visited, 1 not visited, 2 not visited, etc.
  let isVisited = new Array(arr.length).fill(false);
  
  // Step 2: Iterate through the array once
  // For each element, check if we've seen it before
  // Example: arr = [0, 2, 1, 3, 2, 2]
  //   We'll check each element: 0, 2, 1, 3, 2, 2
  for(let i = 0; i < arr.length; i++){
    // Step 2.1: Check if current element has been visited before
    // If isVisited[arr[i]] is true, we've seen arr[i] before → duplicate!
    // Return it immediately (first repeating element found)
    // 
    // Example: i=4, arr[4]=2
    //   Check: isVisited[2]?
    //   If isVisited[2] = true → we saw 2 before at i=1 → return 2
    if(isVisited[arr[i]]){
      return arr[i];  // Found repeating element! Return it immediately
    }
    
    // Step 2.2: Mark current element as visited
    // Set isVisited[arr[i]] = true to remember we've seen this value
    // 
    // Example: i=0, arr[0]=0
    //   Set isVisited[0] = true
    //   Now we know we've seen value 0
    // 
    // Example: i=1, arr[1]=2
    //   Set isVisited[2] = true
    //   Now we know we've seen value 2
    isVisited[arr[i]] = true;
    
    // Step 2.3: Continue to next element
    // Loop continues to check arr[i+1]
  }
  
  // Step 3: No repeating element found
  // If we've checked all elements and none was visited before, return -1
  // This means all elements are unique
  // Example: arr = [0, 1, 2, 3, 4, 5] → all unique → return -1
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [0, 2, 1, 3, 2, 2]
//
// Call: repeatingElement([0, 2, 1, 3, 2, 2])
//   Step 1: Create boolean array
//     arr.length = 6
//     isVisited = [false, false, false, false, false, false]
//     Indices:     0       1       2       3       4       5
//   
//   Step 2: Iterate through array (i = 0 to 5)
//     Iteration 1: i = 0
//       arr[i] = arr[0] = 0
//       Check: isVisited[0]?
//       isVisited[0] = false (not visited yet)
//       → Not a duplicate, continue
//       Set: isVisited[0] = true
//       isVisited = [true, false, false, false, false, false]
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 2
//       Check: isVisited[2]?
//       isVisited[2] = false (not visited yet)
//       → Not a duplicate, continue
//       Set: isVisited[2] = true
//       isVisited = [true, false, true, false, false, false]
//     
//     Iteration 3: i = 2
//       arr[i] = arr[2] = 1
//       Check: isVisited[1]?
//       isVisited[1] = false (not visited yet)
//       → Not a duplicate, continue
//       Set: isVisited[1] = true
//       isVisited = [true, true, true, false, false, false]
//     
//     Iteration 4: i = 3
//       arr[i] = arr[3] = 3
//       Check: isVisited[3]?
//       isVisited[3] = false (not visited yet)
//       → Not a duplicate, continue
//       Set: isVisited[3] = true
//       isVisited = [true, true, true, true, false, false]
//     
//     Iteration 5: i = 4
//       arr[i] = arr[4] = 2
//       Check: isVisited[2]?
//       isVisited[2] = true ✅ (we saw 2 at i=1!)
//       → Found duplicate! Return 2
//   
//   Result: 2 (Repeating element found: 2 appears at indices 1 and 4)

// Step-by-step execution example 2:
// Input: arr = [1, 2, 3, 4, 5] (no duplicates)
//
// Call: repeatingElement([1, 2, 3, 4, 5])
//   Step 1: Create boolean array
//     arr.length = 5
//     isVisited = [false, false, false, false, false]
//     Indices:     0       1       2       3       4
//   
//   Step 2: Iterate through array (i = 0 to 4)
//     Iteration 1: i = 0
//       arr[0] = 1
//       isVisited[1] = false → mark as visited
//       isVisited = [false, true, false, false, false]
//     
//     Iteration 2: i = 1
//       arr[1] = 2
//       isVisited[2] = false → mark as visited
//       isVisited = [false, true, true, false, false]
//     
//     Iteration 3: i = 2
//       arr[2] = 3
//       isVisited[3] = false → mark as visited
//       isVisited = [false, true, true, true, false]
//     
//     Iteration 4: i = 3
//       arr[3] = 4
//       isVisited[4] = false → mark as visited
//       isVisited = [false, true, true, true, true]
//     
//     Iteration 5: i = 4
//       arr[4] = 5
//       Check: isVisited[5]?
//       isVisited[5] = undefined (out of bounds, but treated as false)
//       → Not a duplicate, continue
//       Note: This works because 5 is out of bounds, but in this case
//       all values are unique anyway
//   
//   Step 3: No repeating element found
//     Return: -1
//   
//   Result: -1 (No repeating element)

// Step-by-step execution example 3:
// Input: arr = [3, 1, 0, 2, 3]
//
// Call: repeatingElement([3, 1, 0, 2, 3])
//   Step 1: Create boolean array
//     arr.length = 5
//     isVisited = [false, false, false, false, false]
//   
//   Step 2: Iterate through array
//     Iteration 1: i = 0
//       arr[0] = 3
//       isVisited[3] = false → mark as visited
//       isVisited = [false, false, false, true, false]
//     
//     Iteration 2: i = 1
//       arr[1] = 1
//       isVisited[1] = false → mark as visited
//       isVisited = [false, true, false, true, false]
//     
//     Iteration 3: i = 2
//       arr[2] = 0
//       isVisited[0] = false → mark as visited
//       isVisited = [true, true, false, true, false]
//     
//     Iteration 4: i = 3
//       arr[3] = 2
//       isVisited[2] = false → mark as visited
//       isVisited = [true, true, true, true, false]
//     
//     Iteration 5: i = 4
//       arr[4] = 3
//       Check: isVisited[3]?
//       isVisited[3] = true ✅ (we saw 3 at i=0!)
//       → Found duplicate! Return 3
//   
//   Result: 3 (Repeating element found: 3 appears at indices 0 and 4)

// WHY THIS APPROACH IS EFFICIENT:
// 
// 1. TIME COMPLEXITY: O(n) ✅
//    - Single pass through the array
//    - Each element checked exactly once
//    - Array access and assignment: O(1)
//    - Total: O(n) - optimal linear time!
//    - Example: n=1000 → only 1000 operations
// 
// 2. SPACE COMPLEXITY: O(n) ✅
//    - Boolean array of size n
//    - This is acceptable trade-off for O(n) time
//    - Much better than O(n²) time with O(1) space
// 
// 3. SINGLE PASS:
//    - Only one iteration through the array
//    - No nested loops
//    - No sorting needed
// 
// 4. SIMPLE AND CLEAR:
//    - Easy to understand logic
//    - Straightforward implementation
//    - No complex data structures

// TIME COMPLEXITY ANALYSIS:
// 
// Single Loop:
//   - Iterates exactly n times (once for each element)
//   - Time: O(n)
// 
// Operations per iteration:
//   - Array access: arr[i] → O(1)
//   - Boolean check: isVisited[arr[i]] → O(1)
//   - Assignment: isVisited[arr[i]] = true → O(1)
//   - Total per iteration: O(1)
// 
// Total:
//   - n iterations × O(1) per iteration = O(n)
// 
// Best Case: O(1)
//   - Duplicate found at second element
//   - Example: arr = [0, 0, 1, 2, 3] → found at i=1
// 
// Average Case: O(n)
//   - Duplicate found after checking ~n/2 elements on average
// 
// Worst Case: O(n)
//   - Duplicate found at last element or no duplicate
//   - Example: arr = [0, 1, 2, 3, 0] → found at i=4
// 
// Overall: O(n) - linear time complexity (OPTIMAL!)

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(n) - Linear space
//   - Boolean array of size n: O(n)
//   - Variables: i → O(1)
//   - Total: O(n)
// 
// Why O(n) space is acceptable:
//   - Time complexity is O(n) - optimal!
//   - Space-time trade-off: We use O(n) space to achieve O(n) time
//   - Much better than O(n²) time with O(1) space
// 
// Alternative with O(1) space:
//   - Could use nested loops: O(n²) time, O(1) space
//   - But O(n) time is much more valuable than O(1) space

// COMPARISON WITH OTHER APPROACHES:
// 
// 1. Super Naive (Nested Loops):
//    - Time: O(n²)
//    - Space: O(1)
//    - Example: n=1000 → ~500,000 comparisons
// 
// 2. Naive (Sorting):
//    - Time: O(n log n)
//    - Space: O(1) or O(n)
//    - Modifies array
//    - Example: n=1000 → ~10,000 operations
// 
// 3. Efficient (Boolean Array - This Solution):
//    - Time: O(n) ✅
//    - Space: O(n)
//    - Single pass
//    - Example: n=1000 → ~1,000 operations
// 
// 4. Optimal (Hash Set):
//    - Time: O(n)
//    - Space: O(n)
//    - Works for any values (not just 0 to n-1)
//    - Example: n=1000 → ~1,000 operations
// 
// Speed Comparison (n=1000):
//   - Super Naive: 500,000 comparisons
//   - Naive (Sorting): 10,000 operations
//   - Efficient (Boolean Array): 1,000 operations ✅
//   - Optimal (Hash Set): 1,000 operations ✅
// 
// This approach is 500x faster than super naive, 10x faster than sorting!

// ALTERNATIVE APPROACH: Hash Set (More General)
// 
// If array values can be outside range [0, n-1], use Set:
// 
// function repeatingElement(arr){
//   let seen = new Set();
//   for(let i = 0; i < arr.length; i++){
//     if(seen.has(arr[i])){
//       return arr[i];  // Found duplicate!
//     }
//     seen.add(arr[i]);
//   }
//   return -1;
// }
// 
// Why Set is more general:
//   - Works for any values (not just 0 to n-1)
//   - Example: arr = [100, 200, 100, 300] → works!
//   - Boolean array approach would fail (out of bounds)
// 
// Time: O(n) - same as boolean array
// Space: O(n) - same as boolean array
// 
// When to use which:
//   - Boolean Array: When values are guaranteed to be in [0, n-1]
//   - Hash Set: When values can be any number (more general)

// KEY INSIGHT: Why This Works
// 
// The key is using array values as indices:
// 
// 1. Create boolean array of size n
// 2. For each element arr[i]:
//    - Check if isVisited[arr[i]] is true
//    - If yes → we've seen arr[i] before → duplicate!
//    - If no → mark isVisited[arr[i]] = true
// 
// Example: arr = [0, 2, 1, 3, 2, 2]
//   i=0: arr[0]=0, isVisited[0]=false → mark visited
//   i=1: arr[1]=2, isVisited[2]=false → mark visited
//   i=2: arr[2]=1, isVisited[1]=false → mark visited
//   i=3: arr[3]=3, isVisited[3]=false → mark visited
//   i=4: arr[4]=2, isVisited[2]=true ✅ → duplicate found!
// 
// Why it's efficient:
//   - Array access by index: O(1)
//   - Boolean check: O(1)
//   - Single pass: O(n) total

// IMPORTANT ASSUMPTION:
// 
// ⚠️ This approach REQUIRES array values to be valid indices!
// 
// Valid: arr = [0, 2, 1, 3, 2, 2]
//   - All values (0, 1, 2, 3) are within [0, 5]
//   - Can use as indices: isVisited[0], isVisited[2], etc.
// 
// Invalid: arr = [100, 200, 100, 300]
//   - Values (100, 200, 300) are outside [0, 3]
//   - isVisited[100] would be out of bounds
//   - Use Hash Set instead for such cases
// 
// When this approach works:
//   - Array contains values from 0 to n-1 (like indices)
//   - Common in DSA problems (permutations, etc.)
// 
// When to use Hash Set instead:
//   - Array values can be any number
//   - Array values can be negative
//   - Array values can be larger than n-1

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - arr.length = 0
//   - isVisited = []
//   - Loop doesn't execute → return -1
// 
// 2. Single element: [5]
//   - arr.length = 1
//   - isVisited = [false]
//   - i=0: arr[0]=5, isVisited[5] = undefined (out of bounds)
//   - Treated as false → mark visited → continue
//   - Loop ends → return -1
//   - Note: This works but assumes values are valid indices
// 
// 3. Two elements: [1, 1]
//   - i=0: arr[0]=1, isVisited[1]=false → mark visited
//   - i=1: arr[1]=1, isVisited[1]=true ✅ → return 1
// 
// 4. No duplicates: [0, 1, 2, 3, 4]
//   - All elements unique
//   - Each marks its index as visited
//   - No duplicates found → return -1
// 
// 5. Multiple duplicates: [0, 2, 1, 3, 2, 2]
//   - Finds first duplicate (2 at i=4)
//   - Returns 2 immediately

// WHY THIS IS THE EFFICIENT APPROACH:
// 
// Mathematical Proof:
//   - We must check each element at least once: O(n)
//   - Array access and boolean operations: O(1)
//   - Therefore, O(n) is the best possible time complexity
// 
// Intuition:
//   - Can't do better than checking each element once
//   - Boolean array gives O(1) lookup time
//   - Total: O(n) - optimal!
// 
// Conclusion:
//   ✅ Time: O(n) - best possible (optimal!)
//   ✅ Space: O(n) - acceptable trade-off
//   ✅ Simple: Easy to understand
//   ✅ Fast: Single pass through array

// CONCLUSION: This IS the EFFICIENT approach ✅
// 
// ✅ Time: O(n) - optimal linear time complexity
// ✅ Space: O(n) - acceptable for O(n) time
// ✅ Single pass: Only one iteration
// ✅ Simple: Easy to understand and implement
// ✅ Fast: Much faster than O(n²) or O(n log n) approaches
// 
// ⚠️ NOTE: Requires array values to be in range [0, n-1]
//    For general values, use Hash Set (also O(n) time)

let arr = [0, 2, 1, 3, 2, 2];
console.log(repeatingElement(arr)); // Expected output: 2 (first repeating element found)