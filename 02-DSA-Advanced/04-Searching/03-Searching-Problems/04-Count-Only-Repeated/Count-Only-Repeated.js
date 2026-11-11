/**
 * COUNT ONLY REPEATED - FIND DUPLICATE ELEMENT AND ITS COUNT
 * 
 * Problem: Find the repeated element and number of times it's repeated
 * - Array is sorted and consecutive (adjacent elements differ by 1)
 * - Exactly one element appears more than once
 * - All other elements appear exactly once
 * - Return [element, count] or [-1, -1] if no duplicate
 * 
 * Examples:
 * [1, 2, 3, 3, 4] → [3, 2] (3 appears 2 times)
 * [2, 3, 4, 5, 5] → [5, 2] (5 appears 2 times)
 * [1, 2, 3] → [-1, -1] (no duplicate)
 * 
 * Key Insight:
 * In a consecutive sorted array without duplicates:
 *   arr[i] should equal arr[0] + i
 * 
 * If there's a duplicate:
 *   arr[i] < arr[0] + i (because duplicate "pushes" elements forward)
 * 
 * APPROACH: Binary Search
 * 
 * Algorithm:
 * 1. Use binary search to find first index where arr[i] < arr[0] + i
 * 2. The repeated element is arr[i] - 1 (or arr[i])
 * 3. Count occurrences of the repeated element
 * 
 * Time: O(log n) - binary search
 * Space: O(1) - constant space
 */

function findRepeating(arr) {
  let n = arr.length;
  
  // Edge case: array with less than 2 elements
  if (n < 2) {
    return [-1, -1];
  }
  
  // Binary search to find where duplicate starts
  let low = 0;
  let high = n - 1;
  let duplicateIndex = -1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    // Expected value at index mid in a consecutive array
    let expected = arr[0] + mid;
    
    // If arr[mid] < expected, duplicate is at or before mid
    if (arr[mid] < expected) {
      duplicateIndex = mid;
      high = mid - 1; // Search left to find first occurrence
    } else {
      // No duplicate yet, search right
      low = mid + 1;
    }
  }
  
  // If no duplicate found
  if (duplicateIndex === -1) {
    return [-1, -1];
  }
  
  // The repeated element
  let repeatedElement = arr[duplicateIndex];
  
  // Count occurrences
  // Since array is sorted, all occurrences are consecutive
  let count = 1;
  let i = duplicateIndex - 1;
  
  // Count left side
  while (i >= 0 && arr[i] === repeatedElement) {
    count++;
    i--;
  }
  
  // Count right side
  i = duplicateIndex + 1;
  while (i < n && arr[i] === repeatedElement) {
    count++;
    i++;
  }
  
  return [repeatedElement, count];
}

/**
 * Step-by-step execution example 1:
 * Input: arr = [1, 2, 3, 3, 4]
 * 
 * Binary Search:
 * low=0, high=4
 * 
 * Iteration 1: mid=2
 *   arr[mid] = arr[2] = 3
 *   expected = arr[0] + mid = 1 + 2 = 3
 *   arr[2] < expected? 3 < 3? No
 *   → Search right: low = 3
 * 
 * Iteration 2: low=3, high=4, mid=3
 *   arr[mid] = arr[3] = 3
 *   expected = arr[0] + mid = 1 + 3 = 4
 *   arr[3] < expected? 3 < 4? Yes ✓
 *   → duplicateIndex = 3
 *   → Search left: high = 2
 * 
 * Iteration 3: low=3, high=2 → loop ends
 * 
 * duplicateIndex = 3
 * repeatedElement = arr[3] = 3
 * 
 * Count:
 *   Check arr[2] = 3? Yes → count=2
 *   Check arr[4] = 3? No
 * 
 * Result: [3, 2]
 */

/**
 * Step-by-step execution example 2:
 * Input: arr = [2, 3, 4, 5, 5]
 * 
 * Binary Search:
 * low=0, high=4
 * 
 * Iteration 1: mid=2
 *   arr[mid] = arr[2] = 4
 *   expected = arr[0] + mid = 2 + 2 = 4
 *   arr[2] < expected? 4 < 4? No
 *   → Search right: low = 3
 * 
 * Iteration 2: low=3, high=4, mid=3
 *   arr[mid] = arr[3] = 5
 *   expected = arr[0] + mid = 2 + 3 = 5
 *   arr[3] < expected? 5 < 5? No
 *   → Search right: low = 4
 * 
 * Iteration 3: low=4, high=4, mid=4
 *   arr[mid] = arr[4] = 5
 *   expected = arr[0] + mid = 2 + 4 = 6
 *   arr[4] < expected? 5 < 6? Yes ✓
 *   → duplicateIndex = 4
 * 
 * repeatedElement = arr[4] = 5
 * 
 * Count:
 *   Check arr[3] = 5? Yes → count=2
 * 
 * Result: [5, 2]
 */

/**
 * Step-by-step execution example 3:
 * Input: arr = [1, 2, 3]
 * 
 * Binary Search:
 * low=0, high=2
 * 
 * Iteration 1: mid=1
 *   arr[mid] = arr[1] = 2
 *   expected = arr[0] + mid = 1 + 1 = 2
 *   arr[1] < expected? 2 < 2? No
 *   → Search right: low = 2
 * 
 * Iteration 2: low=2, high=2, mid=2
 *   arr[mid] = arr[2] = 3
 *   expected = arr[0] + mid = 1 + 2 = 3
 *   arr[2] < expected? 3 < 3? No
 *   → Search right: low = 3
 * 
 * Iteration 3: low=3, high=2 → loop ends
 * 
 * duplicateIndex = -1
 * Result: [-1, -1]
 */

// Alternative approach: More optimized binary search
function findRepeatingOptimized(arr) {
  let n = arr.length;
  
  if (n < 2) {
    return [-1, -1];
  }
  
  // Binary search to find first index where duplicate occurs
  let low = 0;
  let high = n - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let expected = arr[0] + mid;
    
    if (arr[mid] < expected) {
      // Duplicate found at or before mid
      // Check if mid is the first occurrence of duplicate
      if (mid > 0 && arr[mid - 1] === arr[mid]) {
        // Found first occurrence of duplicate
        let repeatedElement = arr[mid];
        
        // Count all occurrences (they're consecutive)
        let count = 1;
        let left = mid - 1;
        while (left >= 0 && arr[left] === repeatedElement) {
          count++;
          left--;
        }
        let right = mid + 1;
        while (right < n && arr[right] === repeatedElement) {
          count++;
          right++;
        }
        
        return [repeatedElement, count];
      } else {
        // Continue searching left
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  
  return [-1, -1];
}

// Test cases
console.log("=== APPROACH 1: Binary Search ===");
console.log("Test 1: [1, 2, 3, 3, 4]");
console.log("Output:", findRepeating([1, 2, 3, 3, 4]));
console.log("Expected: [3, 2]\n");



console.log("\n=== APPROACH 2: Optimized Binary Search ===");
console.log("Test 1: [1, 2, 3, 3, 4]");
console.log("Output:", findRepeatingOptimized([1, 2, 3, 3, 4]));
console.log("Expected: [3, 2]\n");
