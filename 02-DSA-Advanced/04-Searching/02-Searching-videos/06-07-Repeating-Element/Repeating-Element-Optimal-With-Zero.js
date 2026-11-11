/**
 * REPEATING ELEMENT - OPTIMAL SOLUTION USING FLOYD'S CYCLE DETECTION
 * Problem: Find a repeating element in an array that CAN INCLUDE ZERO
 * 
 * This approach uses Floyd's cycle detection (tortoise and hare) algorithm.
 * It works when:
 * - Array has n+1 elements
 * - Values are in range [0, n] (0-based indexing, CAN include 0)
 * - One element repeats
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findRepeating(arr){
  // Special case: If arr[0] = 0, check if 0 is the duplicate
  if(arr[0] === 0){
    for(let i = 1; i < arr.length; i++){
      if(arr[i] === 0) return 0;
    }
    // If 0 is not duplicate, start from index 1 instead
    let slow = arr[1] + 1;
    let fast = arr[1] + 1;
    
    do {
      slow = arr[slow-1] + 1;
      fast = arr[arr[fast-1]] + 1;
    } while(slow !== fast);
    
    slow = arr[1] + 1;
    while(slow !== fast){
      slow = arr[slow-1] + 1;
      fast = arr[fast-1] + 1;
    }
    return slow - 1;
  }
  
  // Standard case: arr[0] != 0
  let slow = arr[0] + 1;
  let fast = arr[0] + 1;

  // Phase I: Find the meeting point of slow and fast pointers
  do {
    slow = arr[slow-1] + 1;
    fast = arr[arr[fast-1]] + 1;
  } while(slow !== fast);

  // Phase II: Find the entry point of the cycle (the repeating element)
  slow = arr[0] + 1;
  while(slow !== fast){
    slow = arr[slow-1] + 1;
    fast = arr[fast-1] + 1;
  }

  return slow - 1; // Convert the 1-based index back to the original 0-based value
}

// Test case: Array with 0-based values (includes 0)
let arr = [0, 2, 1, 3, 5, 4, 6, 2]; // 2 repeats
console.log(findRepeating(arr)); // Expected: 2
