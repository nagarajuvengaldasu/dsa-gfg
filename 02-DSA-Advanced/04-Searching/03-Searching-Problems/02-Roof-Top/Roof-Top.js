/**
 * ROOF TOP - MAXIMUM CONSECUTIVE INCREASING STEPS
 * 
 * Problem: Find maximum number of consecutive steps where each step
 *          increases in altitude (building height)
 * 
 * What we need:
 * - Count consecutive pairs where arr[i] < arr[i+1]
 * - Return the maximum count of such consecutive pairs
 * 
 * Examples:
 * [1, 2, 2, 3, 2] → Max = 1
 *   - 1→2 (increasing) ✓ count=1
 *   - 2→2 (not increasing) ✗ reset
 *   - 2→3 (increasing) ✓ count=1
 *   - 3→2 (decreasing) ✗ reset
 *   - Max = 1
 * 
 * [1, 2, 3, 4] → Max = 3
 *   - 1→2 (increasing) ✓ count=1
 *   - 2→3 (increasing) ✓ count=2
 *   - 3→4 (increasing) ✓ count=3
 *   - Max = 3
 * 
 * APPROACH: Linear Scan (Optimal)
 * 
 * Algorithm:
 * 1. Traverse array from left to right
 * 2. For each pair (arr[i], arr[i+1]):
 *    - If arr[i] < arr[i+1]: increment current count
 *    - Else: reset count to 0, update max if needed
 * 3. Return maximum count
 * 
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using constant variables
 * 
 * Why this is optimal:
 * - Must check every element at least once → O(n) is best possible
 * - No extra space needed → O(1) is optimal
 */

function maxStep(arr) {
  let n = arr.length;
  
  // Edge case: array with less than 2 elements
  // No steps possible (need at least 2 buildings)
  if (n < 2) {
    return 0;
  }
  
  let maxSteps = 0;      // Maximum consecutive increasing steps found
  let currentSteps = 0;  // Current consecutive increasing steps
  
  // Traverse array and check each consecutive pair
  for (let i = 0; i < n - 1; i++) {
    // Check if we can take a step forward (increasing height)
    if (arr[i] < arr[i + 1]) {
      // Step is increasing → increment current count
      currentSteps++;
      // Update maximum if current is better
      maxSteps = Math.max(maxSteps, currentSteps);
    } else {
      // Step is not increasing → reset current count
      currentSteps = 0;
    }
  }
  
  return maxSteps;
}

/**
 * Step-by-step execution example 1:
 * Input: arr = [1, 2, 2, 3, 2]
 * 
 * i=0: arr[0]=1, arr[1]=2
 *   - 1 < 2? Yes ✓
 *   - currentSteps = 1
 *   - maxSteps = max(0, 1) = 1
 * 
 * i=1: arr[1]=2, arr[2]=2
 *   - 2 < 2? No ✗
 *   - currentSteps = 0 (reset)
 * 
 * i=2: arr[2]=2, arr[3]=3
 *   - 2 < 3? Yes ✓
 *   - currentSteps = 1
 *   - maxSteps = max(1, 1) = 1
 * 
 * i=3: arr[3]=3, arr[4]=2
 *   - 3 < 2? No ✗
 *   - currentSteps = 0 (reset)
 * 
 * Result: maxSteps = 1
 */

/**
 * Step-by-step execution example 2:
 * Input: arr = [1, 2, 3, 4]
 * 
 * i=0: arr[0]=1, arr[1]=2
 *   - 1 < 2? Yes ✓
 *   - currentSteps = 1
 *   - maxSteps = 1
 * 
 * i=1: arr[1]=2, arr[2]=3
 *   - 2 < 3? Yes ✓
 *   - currentSteps = 2
 *   - maxSteps = max(1, 2) = 2
 * 
 * i=2: arr[2]=3, arr[3]=4
 *   - 3 < 4? Yes ✓
 *   - currentSteps = 3
 *   - maxSteps = max(2, 3) = 3
 * 
 * Result: maxSteps = 3
 */

/**
 * Step-by-step execution example 3:
 * Input: arr = [4, 3, 2, 1]
 * 
 * i=0: arr[0]=4, arr[1]=3
 *   - 4 < 3? No ✗
 *   - currentSteps = 0
 * 
 * i=1: arr[1]=3, arr[2]=2
 *   - 3 < 2? No ✗
 *   - currentSteps = 0
 * 
 * i=2: arr[2]=2, arr[3]=1
 *   - 2 < 1? No ✗
 *   - currentSteps = 0
 * 
 * Result: maxSteps = 0 (no increasing steps)
 */

/**
 * Step-by-step execution example 4:
 * Input: arr = [1, 2, 3, 2, 4, 5, 6]
 * 
 * i=0: 1 < 2? Yes → currentSteps=1, maxSteps=1
 * i=1: 2 < 3? Yes → currentSteps=2, maxSteps=2
 * i=2: 3 < 2? No → currentSteps=0 (reset)
 * i=3: 2 < 4? Yes → currentSteps=1, maxSteps=2
 * i=4: 4 < 5? Yes → currentSteps=2, maxSteps=2
 * i=5: 5 < 6? Yes → currentSteps=3, maxSteps=3
 * 
 * Result: maxSteps = 3 (from 2→4→5→6)
 */

// Test cases
console.log("Test 1: [1, 2, 2, 3, 2]");
console.log("Output:", maxStep([1, 2, 2, 3, 2]));
console.log("Expected: 1\n");

console.log("Test 2: [1, 2, 3, 4]");
console.log("Output:", maxStep([1, 2, 3, 4]));
console.log("Expected: 3\n");

console.log("Test 3: [4, 3, 2, 1]");
console.log("Output:", maxStep([4, 3, 2, 1]));
console.log("Expected: 0\n");

console.log("Test 4: [1, 2, 3, 2, 4, 5, 6]");
console.log("Output:", maxStep([1, 2, 3, 2, 4, 5, 6]));
console.log("Expected: 3\n");

console.log("Test 5: [10, 20, 30, 40, 50]");
console.log("Output:", maxStep([10, 20, 30, 40, 50]));
console.log("Expected: 4\n");

console.log("Test 6: [5, 5, 5, 5]");
console.log("Output:", maxStep([5, 5, 5, 5]));
console.log("Expected: 0\n");
