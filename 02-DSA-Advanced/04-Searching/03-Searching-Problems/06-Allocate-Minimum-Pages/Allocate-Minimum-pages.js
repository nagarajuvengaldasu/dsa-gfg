/**
 * ALLOCATE MINIMUM PAGES - OPTIMAL & NAIVE APPROACHES
 * 
 * Problem: Allocate books to k students such that:
 * - Each student gets at least one book
 * - Each student gets contiguous books
 * - No book is assigned to more than one student
 * - Minimize the maximum pages assigned to any student
 * 
 * Examples:
 * arr = [12, 34, 67, 90], k = 2
 *   - [12] and [34, 67, 90] → max = 191
 *   - [12, 34] and [67, 90] → max = 157
 *   - [12, 34, 67] and [90] → max = 113 ✓ (minimum)
 *   Output: 113
 * 
 * arr = [15, 17, 20], k = 5
 *   - More students than books → impossible
 *   Output: -1
 * 
 * APPROACH 1: Binary Search (Optimal - O(n * log(sum)))
 * 
 * Key Insight:
 * - Minimum possible answer = max(arr) (one student gets largest book)
 * - Maximum possible answer = sum(arr) (one student gets all books)
 * - Binary search on answer to find minimum feasible value
 * 
 * Algorithm:
 * 1. Check if allocation is possible (k <= n)
 * 2. Binary search on answer range [max(arr), sum(arr)]
 * 3. For each mid, check if feasible to allocate with k students
 * 4. If feasible, try smaller value; else try larger value
 * 
 * Time: O(n * log(sum)) ≈ O(n) for practical purposes
 * Space: O(1)
 * 
 * APPROACH 2: Naive Recursive (Exponential)
 * 
 * Algorithm:
 * 1. Try all possible partition points recursively
 * 2. For each partition, recursively solve for remaining books
 * 3. Return minimum of all possibilities
 * 
 * Time: O(2^n) - exponential
 * Space: O(n) - recursion stack
 */

// ============================================
// APPROACH 1: BINARY SEARCH (OPTIMAL)
// ============================================

/**
 * Optimal solution using binary search
 * Time: O(n * log(sum))
 * Space: O(1)
 */
function findPages(arr, k) {
  let n = arr.length;
  
  // Edge case: More students than books - impossible
  if (k > n) {
    return -1;
  }
  
  // Edge case: Only one student - gets all books
  if (k === 1) {
    return arr.reduce((sum, val) => sum + val, 0);
  }
  
  // Calculate sum and maximum
  let sum = 0;
  let mx = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    mx = Math.max(mx, arr[i]);
  }
  
  // Binary search range
  // low: Minimum possible (at least one student gets largest book)
  // high: Maximum possible (one student could get all books)
  let low = mx;
  let high = sum;
  let result = -1;
  
  // Binary search for minimum feasible value
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    // Check if mid pages is feasible for k students
    if (isFeasible(arr, k, mid)) {
      // Feasible! Try to find smaller value
      result = mid;
      high = mid - 1;
    } else {
      // Not feasible, need more pages
      low = mid + 1;
    }
  }
  
  return result;
}

/**
 * Check if we can allocate all books with at most k students
 * when each student can get at most 'maxPages' pages
 * 
 * Algorithm: Greedily assign books to students
 * - Start with first student
 * - Keep adding books until limit is exceeded
 * - Then start new student
 * 
 * Time: O(n)
 * Space: O(1)
 */
function isFeasible(arr, k, maxPages) {
  let studentsNeeded = 1;
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // If adding current book exceeds limit
    if (currentSum + arr[i] > maxPages) {
      // Need a new student
      studentsNeeded++;
      currentSum = arr[i];
      
      // If we need more students than available, not feasible
      if (studentsNeeded > k) {
        return false;
      }
    } else {
      // Can add to current student
      currentSum += arr[i];
    }
  }
  
  return studentsNeeded <= k;
}

// ============================================
// APPROACH 2: NAIVE RECURSIVE
// ============================================

/**
 * Naive recursive solution
 * Time: O(2^n) - exponential
 * Space: O(n) - recursion stack
 */
function findPagesNaive(arr, k) {
  let n = arr.length;
  
  // Edge case: More students than books
  if (k > n) {
    return -1;
  }
  
  // Edge case: Only one student
  if (k === 1) {
    return arr.reduce((sum, val) => sum + val, 0);
  }
  
  // Edge case: Only one book
  if (n === 1) {
    return arr[0];
  }
  
  // Try all possible partition points
  let result = Number.MAX_SAFE_INTEGER;
  
  for (let i = 1; i < n; i++) {
    // Partition at index i
    // Left part: arr[0..i-1] → allocate to k-1 students
    // Right part: arr[i..n-1] → allocate to 1 student (sum)
    
    let leftResult = findPagesNaive(arr.slice(0, i), k - 1);
    let rightSum = arr.slice(i).reduce((sum, val) => sum + val, 0);
    
    // Maximum pages in this partition
    let maxPages = Math.max(leftResult, rightSum);
    
    // Update result with minimum
    result = Math.min(result, maxPages);
  }
  
  return result;
}

// ============================================
// TEST CASES
// ============================================

console.log("=== APPROACH 1: Binary Search (Optimal) ===");
console.log("Test 1: arr=[12, 34, 67, 90], k=2");
console.log("Output:", findPages([12, 34, 67, 90], 2));
console.log("Expected: 113\n");

console.log("Test 2: arr=[15, 17, 20], k=5");
console.log("Output:", findPages([15, 17, 20], 5));
console.log("Expected: -1\n");

console.log("Test 3: arr=[10, 20, 30, 40], k=2");
console.log("Output:", findPages([10, 20, 30, 40], 2));
console.log("Expected: 60\n");

console.log("Test 4: arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k=5");
console.log("Output:", findPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log("Expected: 11\n");

console.log("Test 5: arr=[100], k=1");
console.log("Output:", findPages([100], 1));
console.log("Expected: 100\n");

console.log("\n=== APPROACH 2: Naive Recursive ===");
console.log("Test 1: arr=[12, 34, 67, 90], k=2");
console.log("Output:", findPagesNaive([12, 34, 67, 90], 2));
console.log("Expected: 113\n");

console.log("Test 2: arr=[15, 17, 20], k=5");
console.log("Output:", findPagesNaive([15, 17, 20], 5));
console.log("Expected: -1\n");

console.log("Test 3: arr=[10, 20, 30, 40], k=2");
console.log("Output:", findPagesNaive([10, 20, 30, 40], 2));
console.log("Expected: 60\n");

// Note: Naive approach is too slow for large inputs
// Uncomment below to test with smaller arrays only
// console.log("Test 4: arr=[1, 2, 3, 4, 5], k=3");
// console.log("Output:", findPagesNaive([1, 2, 3, 4, 5], 3));
// console.log("Expected: 6\n");
