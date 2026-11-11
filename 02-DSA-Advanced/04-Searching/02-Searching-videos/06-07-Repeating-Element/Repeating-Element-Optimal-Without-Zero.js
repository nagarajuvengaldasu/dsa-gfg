/**
 * REPEATING ELEMENT - OPTIMAL SOLUTION USING FLOYD'S CYCLE DETECTION
 * Problem: Find a repeating element in an array that DOES NOT INCLUDE ZERO
 * 
 * This approach uses Floyd's cycle detection (tortoise and hare) algorithm.
 * It works when:
 * - Array has n+1 elements
 * - Values are in range [1, n] (1-based indexing, NO ZERO)
 * - One element repeats
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findRepeating(arr){
  // Phase I: Find the meeting point of slow and fast pointers
  let slow = arr[0];
  let fast = arr[0];
  
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while(slow !== fast);
  
  // Phase II: Find the entry point of the cycle (the repeating element)
  slow = arr[0];
  while(slow !== fast){
    slow = arr[slow];
    fast = arr[fast];
  }
  
  return slow;
}

// Test case: Array with 1-based values (no 0)
let arr = [1, 3, 2, 4, 6, 5, 7, 3]; // 3 repeats
console.log(findRepeating(arr)); // Expected: 3
