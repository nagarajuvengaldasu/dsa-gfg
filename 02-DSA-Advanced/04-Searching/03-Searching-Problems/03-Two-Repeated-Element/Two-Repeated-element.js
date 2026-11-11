/**
 * TWO REPEATED ELEMENTS - FIND DUPLICATES
 * 
 * Problem: Find two repeating numbers in an array
 * - Array size: n+2
 * - Elements range: 1 to n
 * - All elements appear once except two numbers that appear twice
 * - Return in order of their second appearance
 * 
 * Examples:
 * n=4, arr=[1, 2, 1, 3, 4, 3]
 *   - 1 appears at index 0 and 2 (second at index 2)
 *   - 3 appears at index 3 and 5 (second at index 5)
 *   - Order: 1 (second at 2) comes before 3 (second at 5)
 *   - Output: [1, 3]
 * 
 * n=2, arr=[1, 2, 2, 1]
 *   - 2 appears at index 1 and 2 (second at index 2)
 *   - 1 appears at index 0 and 3 (second at index 3)
 *   - Order: 2 (second at 2) comes before 1 (second at 3)
 *   - Output: [2, 1]
 * 
 * APPROACH 1: Using Set (Optimal - Simple & Clear)
 * 
 * Algorithm:
 * 1. Traverse array from left to right
 * 2. For each element:
 *    - If already in Set → it's a duplicate (second appearance)
 *    - Add to result in order of second appearance
 *    - Otherwise, add to Set
 * 
 * Time: O(n) - single pass
 * Space: O(n) - Set to track seen elements
 * 
 * APPROACH 2: Using Array as Hash Table (Space Optimized)
 * 
 * Algorithm:
 * 1. Since elements are in range 1 to n, use array indices
 * 2. Mark visited by making negative (or using modulo)
 * 3. When we see negative value, it's a duplicate
 * 
 * Time: O(n)
 * Space: O(1) - no extra space (modifies input)
 * 
 * APPROACH 3: Mathematical (Sum & Product)
 * 
 * Algorithm:
 * 1. Calculate sum of all elements = sum(1..n) + x + y
 * 2. Calculate product of all elements = product(1..n) * x * y
 * 3. Solve for x and y
 * 
 * Time: O(n)
 * Space: O(1)
 * Issue: Product can overflow for large n
 */

// APPROACH 1: Using Set (Recommended - Simple & Optimal)
function twoRepeated(arr, n) {
  let seen = new Set();
  let result = [];
  
  // Traverse array from left to right
  for (let i = 0; i < arr.length; i++) {
    // If element already seen, it's a duplicate (second appearance)
    if (seen.has(arr[i])) {
      result.push(arr[i]);
    } else {
      // First appearance - add to set
      seen.add(arr[i]);
    }
  }
  
  return result;
}

/**
 * Step-by-step execution example 1:
 * Input: n=4, arr=[1, 2, 1, 3, 4, 3]
 * 
 * i=0: arr[0]=1
 *   - seen.has(1)? No
 *   - seen.add(1) → seen={1}
 * 
 * i=1: arr[1]=2
 *   - seen.has(2)? No
 *   - seen.add(2) → seen={1,2}
 * 
 * i=2: arr[2]=1
 *   - seen.has(1)? Yes ✓
 *   - result.push(1) → result=[1]
 * 
 * i=3: arr[3]=3
 *   - seen.has(3)? No
 *   - seen.add(3) → seen={1,2,3}
 * 
 * i=4: arr[4]=4
 *   - seen.has(4)? No
 *   - seen.add(4) → seen={1,2,3,4}
 * 
 * i=5: arr[5]=3
 *   - seen.has(3)? Yes ✓
 *   - result.push(3) → result=[1,3]
 * 
 * Result: [1, 3]
 */

/**
 * Step-by-step execution example 2:
 * Input: n=2, arr=[1, 2, 2, 1]
 * 
 * i=0: arr[0]=1 → seen.add(1) → seen={1}
 * i=1: arr[1]=2 → seen.add(2) → seen={1,2}
 * i=2: arr[2]=2 → seen.has(2)? Yes → result=[2]
 * i=3: arr[3]=1 → seen.has(1)? Yes → result=[2,1]
 * 
 * Result: [2, 1]
 */

// APPROACH 2: Using Array as Hash Table (O(1) Space)
function twoRepeatedSpaceOptimized(arr, n) {
  let result = [];
  
  // Traverse array and mark visited elements
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1; // Convert to 0-based index
    
    // If value at index is negative, we've seen this element before
    if (arr[index] < 0) {
      result.push(Math.abs(arr[i]));
    } else {
      // Mark as visited by making negative
      arr[index] = -arr[index];
    }
  }
  
  // Restore array (optional, if we don't want to modify input)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
  }
  
  return result;
}

/**
 * Step-by-step execution (Space Optimized):
 * Input: n=4, arr=[1, 2, 1, 3, 4, 3]
 * 
 * i=0: arr[0]=1
 *   - index = |1| - 1 = 0
 *   - arr[0]=1 > 0 → mark visited
 *   - arr[0] = -1 → arr=[-1, 2, 1, 3, 4, 3]
 * 
 * i=1: arr[1]=2
 *   - index = |2| - 1 = 1
 *   - arr[1]=2 > 0 → mark visited
 *   - arr[1] = -2 → arr=[-1, -2, 1, 3, 4, 3]
 * 
 * i=2: arr[2]=1
 *   - index = |1| - 1 = 0
 *   - arr[0]=-1 < 0 → duplicate! ✓
 *   - result.push(1) → result=[1]
 * 
 * i=3: arr[3]=3
 *   - index = |3| - 1 = 2
 *   - arr[2]=1 > 0 → mark visited
 *   - arr[2] = -1 → arr=[-1, -2, -1, 3, 4, 3]
 * 
 * i=4: arr[4]=4
 *   - index = |4| - 1 = 3
 *   - arr[3]=3 > 0 → mark visited
 *   - arr[3] = -3 → arr=[-1, -2, -1, -3, 4, 3]
 * 
 * i=5: arr[5]=3
 *   - index = |3| - 1 = 2
 *   - arr[2]=-1 < 0 → duplicate! ✓
 *   - result.push(3) → result=[1, 3]
 * 
 * Result: [1, 3]
 */

// APPROACH 3: Using Frequency Array (Alternative)
function twoRepeatedFrequency(arr, n) {
  let freq = new Array(n + 1).fill(0);
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
    // If frequency becomes 2, it's second appearance
    if (freq[arr[i]] === 2) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

// Test cases
console.log("=== APPROACH 1: Using Set (Recommended) ===");
console.log("Test 1: n=4, arr=[1, 2, 1, 3, 4, 3]");
console.log("Output:", twoRepeated([1, 2, 1, 3, 4, 3], 4));
console.log("Expected: [1, 3]\n");

console.log("Test 2: n=2, arr=[1, 2, 2, 1]");
console.log("Output:", twoRepeated([1, 2, 2, 1], 2));
console.log("Expected: [2, 1]\n");

console.log("Test 3: n=5, arr=[1, 2, 3, 2, 4, 5, 4, 1]");
console.log("Output:", twoRepeated([1, 2, 3, 2, 4, 5, 4, 1], 5));
console.log("Expected: [2, 4, 1]\n");

console.log("\n=== APPROACH 2: Space Optimized (O(1) Space) ===");
let arr1 = [1, 2, 1, 3, 4, 3];
console.log("Test 1: n=4, arr=[1, 2, 1, 3, 4, 3]");
console.log("Output:", twoRepeatedSpaceOptimized(arr1, 4));
console.log("Expected: [1, 3]\n");

let arr2 = [1, 2, 2, 1];
console.log("Test 2: n=2, arr=[1, 2, 2, 1]");
console.log("Output:", twoRepeatedSpaceOptimized(arr2, 2));
console.log("Expected: [2, 1]\n");

console.log("\n=== APPROACH 3: Using Frequency Array ===");
console.log("Test 1: n=4, arr=[1, 2, 1, 3, 4, 3]");
console.log("Output:", twoRepeatedFrequency([1, 2, 1, 3, 4, 3], 4));
console.log("Expected: [1, 3]\n");

console.log("Test 2: n=2, arr=[1, 2, 2, 1]");
console.log("Output:", twoRepeatedFrequency([1, 2, 2, 1], 2));
console.log("Expected: [2, 1]\n");
