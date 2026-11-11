/**
 * MAXIMUM WATER BETWEEN TWO BUILDINGS
 * 
 * Problem: Delete n-2 buildings to maximize water trapped between remaining two
 * - Keep only 2 buildings
 * - Water trapped = gap × min(height1, height2)
 * - Gap = number of buildings removed between the two = (j - i - 1)
 * 
 * Examples:
 * height = [2, 1, 3, 4, 6, 5]
 *   - Keep buildings at index 0 (height=2) and index 5 (height=5)
 *   - Gap = 5 - 0 - 1 = 4 (buildings at index 1,2,3,4 are removed)
 *   - Water = 4 × min(2, 5) = 4 × 2 = 8
 * 
 * height = [2, 1]
 *   - Only 2 buildings, gap = 0
 *   - Water = 0 × min(2, 1) = 0
 * 
 * APPROACH 1: Two Pointers (Optimal - O(n))
 * 
 * Algorithm:
 * 1. Start with two pointers at both ends
 * 2. Calculate water for current pair
 * 3. Move pointer with smaller height (to potentially get larger area)
 * 4. Track maximum water
 * 
 * Why it works:
 * - If height[i] < height[j], moving j left won't help (gap decreases, min stays same or worse)
 * - So we move i right to potentially find taller building
 * - Vice versa if height[j] < height[i]
 * 
 * Time: O(n) - single pass
 * Space: O(1) - constant space
 * 
 * APPROACH 2: Brute Force (O(n²))
 * 
 * Algorithm:
 * 1. Try all pairs of buildings
 * 2. Calculate water for each pair
 * 3. Return maximum
 * 
 * Time: O(n²)
 * Space: O(1)
 */

// APPROACH 1: Two Pointers (Optimal - Recommended)
function maxWater(height) {
  let n = height.length;
  
  // Need at least 2 buildings
  if (n < 2) {
    return 0;
  }
  
  let left = 0;           // Left pointer
  let right = n - 1;      // Right pointer
  let maxWater = 0;
  
  while (left < right) {
    // Calculate gap (number of buildings removed between left and right)
    let gap = right - left - 1;
    
    // Calculate water trapped
    // Water = gap × min(height[left], height[right])
    let minHeight = Math.min(height[left], height[right]);
    let water = gap * minHeight;
    
    // Update maximum
    maxWater = Math.max(maxWater, water);
    
    // Move pointer with smaller height
    // Why? Because if we move the pointer with larger height,
    // gap decreases but min height stays same or gets smaller
    // So we move the smaller one to potentially get taller building
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}

/**
 * Step-by-step execution example 1:
 * Input: height = [2, 1, 3, 4, 6, 5]
 * 
 * Initial: left=0, right=5
 * 
 * Iteration 1:
 *   gap = 5 - 0 - 1 = 4
 *   minHeight = min(2, 5) = 2
 *   water = 4 × 2 = 8
 *   maxWater = 8
 *   height[0]=2 < height[5]=5 → left++
 * 
 * Iteration 2: left=1, right=5
 *   gap = 5 - 1 - 1 = 3
 *   minHeight = min(1, 5) = 1
 *   water = 3 × 1 = 3
 *   maxWater = max(8, 3) = 8
 *   height[1]=1 < height[5]=5 → left++
 * 
 * Iteration 3: left=2, right=5
 *   gap = 5 - 2 - 1 = 2
 *   minHeight = min(3, 5) = 3
 *   water = 2 × 3 = 6
 *   maxWater = max(8, 6) = 8
 *   height[2]=3 < height[5]=5 → left++
 * 
 * Iteration 4: left=3, right=5
 *   gap = 5 - 3 - 1 = 1
 *   minHeight = min(4, 5) = 4
 *   water = 1 × 4 = 4
 *   maxWater = max(8, 4) = 8
 *   height[3]=4 < height[5]=5 → left++
 * 
 * Iteration 5: left=4, right=5
 *   gap = 5 - 4 - 1 = 0
 *   minHeight = min(6, 5) = 5
 *   water = 0 × 5 = 0
 *   maxWater = max(8, 0) = 8
 *   height[4]=6 > height[5]=5 → right--
 * 
 * Iteration 6: left=4, right=4 → loop ends
 * 
 * Result: 8
 */

// APPROACH 2: Brute Force (O(n²))
function maxWaterBruteForce(height) {
  let n = height.length;
  let maxWater = 0;
  
  // Try all pairs of buildings
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Calculate gap (number of buildings between i and j)
      let gap = j - i - 1;
      
      // Calculate water
      let minHeight = Math.min(height[i], height[j]);
      let water = gap * minHeight;
      
      // Update maximum
      maxWater = Math.max(maxWater, water);
    }
  }
  
  return maxWater;
}

/**
 * Step-by-step execution (Brute Force):
 * Input: height = [2, 1, 3, 4, 6, 5]
 * 
 * i=0, j=1: gap=0, min(2,1)=1, water=0
 * i=0, j=2: gap=1, min(2,3)=2, water=2
 * i=0, j=3: gap=2, min(2,4)=2, water=4
 * i=0, j=4: gap=3, min(2,6)=2, water=6
 * i=0, j=5: gap=4, min(2,5)=2, water=8 ✓ (maximum)
 * i=1, j=2: gap=0, min(1,3)=1, water=0
 * i=1, j=3: gap=1, min(1,4)=1, water=1
 * ... (continue for all pairs)
 * 
 * Result: 8
 */

// APPROACH 3: Optimized with early termination (if needed)
function maxWaterOptimized(height) {
  let n = height.length;
  
  if (n < 2) {
    return 0;
  }
  
  let left = 0;
  let right = n - 1;
  let maxWater = 0;
  
  while (left < right) {
    let gap = right - left - 1;
    
    // If gap is 0 or negative, no more water can be trapped
    if (gap <= 0) {
      break;
    }
    
    let minHeight = Math.min(height[left], height[right]);
    let water = gap * minHeight;
    maxWater = Math.max(maxWater, water);
    
    // Move pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else if (height[right] < height[left]) {
      right--;
    } else {
      // If both heights are equal, move either (or both)
      // Moving both might skip some cases, so move one
      left++;
    }
  }
  
  return maxWater;
}

// Test cases
console.log("=== APPROACH 1: Two Pointers (Optimal - O(n)) ===");
console.log("Test 1: [2, 1, 3, 4, 6, 5]");
console.log("Output:", maxWater([2, 1, 3, 4, 6, 5]));
console.log("Expected: 8\n");

console.log("Test 2: [2, 1]");
console.log("Output:", maxWater([2, 1]));
console.log("Expected: 0\n");

console.log("Test 3: [1, 2, 3, 4, 5]");
console.log("Output:", maxWater([1, 2, 3, 4, 5]));
console.log("Expected: 6 (gap=3, min(1,5)=1, water=3)\n");

console.log("Test 4: [5, 4, 3, 2, 1]");
console.log("Output:", maxWater([5, 4, 3, 2, 1]));
console.log("Expected: 3 (gap=3, min(5,1)=1, water=3)\n");

console.log("Test 5: [1, 8, 6, 2, 5, 4, 8, 3, 7]");
console.log("Output:", maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Expected: 49 (gap=7, min(1,7)=1, water=7) or better\n");

console.log("Test 6: [1, 1]");
console.log("Output:", maxWater([1, 1]));
console.log("Expected: 0\n");

console.log("\n=== APPROACH 2: Brute Force (O(n²)) ===");
console.log("Test 1: [2, 1, 3, 4, 6, 5]");
console.log("Output:", maxWaterBruteForce([2, 1, 3, 4, 6, 5]));
console.log("Expected: 8\n");

console.log("Test 2: [2, 1]");
console.log("Output:", maxWaterBruteForce([2, 1]));
console.log("Expected: 0\n");

console.log("\n=== APPROACH 3: Optimized with Early Termination ===");
console.log("Test 1: [2, 1, 3, 4, 6, 5]");
console.log("Output:", maxWaterOptimized([2, 1, 3, 4, 6, 5]));
console.log("Expected: 8\n");

console.log("Test 2: [2, 1]");
console.log("Output:", maxWaterOptimized([2, 1]));
console.log("Expected: 0\n");
