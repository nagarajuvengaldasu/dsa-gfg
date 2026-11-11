/**
 * ROPE CUTTING PROBLEM - NAIVE APPROACH
 * Problem: Given a rope of length n, and three lengths a, b, and c,
 * find the maximum number of pieces that can be made by cutting the rope.
 * Each cut must be of length a, b, or c.
 * 
 * Time Complexity: O(3^n) - exponential, as we try all 3 possibilities at each step
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: This is a recursive problem where at each step, we try cutting
 * the rope by length a, b, or c, and recursively solve for the remaining length.
 * We take the maximum of all three possibilities.
 */

function ropeCuttingProblem(n, a, b, c) {
  // Step 1: Base Case 1 - If rope length is exactly 0
  // This means we've successfully cut the rope completely
  // Return 0 pieces (no pieces left, but we've made valid cuts)
  // Example: n=0 → return 0 (valid completion)
  if(n === 0) return 0;
  
  // Step 2: Base Case 2 - If rope length is negative
  // This means we've made an invalid cut (tried to cut more than available)
  // Return -1 to indicate invalid/infeasible solution
  // Example: n=-1 → return -1 (invalid cut)
  if(n < 0) return -1;
  
  // Step 3: Recursive Case - Try all three possible cuts
  // For current rope of length n, try cutting by:
  //   - Length a: remaining length = n - a
  //   - Length b: remaining length = n - b
  //   - Length c: remaining length = n - c
  // Recursively solve for each remaining length and take the maximum
  // Example: n=9, a=2, b=2, c=2
  //   Try cut a=2: solve for n=7
  //   Try cut b=2: solve for n=7
  //   Try cut c=2: solve for n=7
  //   Take max of all three results
  let res = Math.max(
    ropeCuttingProblem(n - a, a, b, c),  // Try cutting by length a
    ropeCuttingProblem(n - b, a, b, c),  // Try cutting by length b
    ropeCuttingProblem(n - c, a, b, c)   // Try cutting by length c
  );

  // Step 4: Check if all recursive calls returned -1
  // If res === -1, it means all three cuts led to invalid solutions
  // In this case, return -1 (no valid way to cut the rope)
  // Example: If all three cuts result in negative lengths, return -1
  if(res === -1){
    return -1;
  }
  
  // Step 5: If we have a valid solution
  // Add 1 to the result (for the current cut we just made)
  // Return the total number of pieces
  // Example: If res=3 (3 pieces from remaining rope), return 3+1=4 pieces
  return res + 1;
}

// Step-by-step execution example:
// Input: n = 9, a = 2, b = 2, c = 2
//
// Call: ropeCuttingProblem(9, 2, 2, 2)
//   n=9, a=2, b=2, c=2
//   Check: n === 0? No
//   Check: n < 0? No
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(9-2, 2, 2, 2) = ropeCuttingProblem(7, 2, 2, 2)
//     cut b=2: ropeCuttingProblem(9-2, 2, 2, 2) = ropeCuttingProblem(7, 2, 2, 2)
//     cut c=2: ropeCuttingProblem(9-2, 2, 2, 2) = ropeCuttingProblem(7, 2, 2, 2)
//   (All three are same since a=b=c=2)
//   res = max(ropeCuttingProblem(7, 2, 2, 2), ropeCuttingProblem(7, 2, 2, 2), ropeCuttingProblem(7, 2, 2, 2))
//   res = ropeCuttingProblem(7, 2, 2, 2)
//
// Call: ropeCuttingProblem(7, 2, 2, 2)
//   n=7, a=2, b=2, c=2
//   Try three cuts:
//     res = max(ropeCuttingProblem(5, 2, 2, 2), ropeCuttingProblem(5, 2, 2, 2), ropeCuttingProblem(5, 2, 2, 2))
//     res = ropeCuttingProblem(5, 2, 2, 2)
//
// Call: ropeCuttingProblem(5, 2, 2, 2)
//   n=5, a=2, b=2, c=2
//   Try three cuts:
//     res = max(ropeCuttingProblem(3, 2, 2, 2), ropeCuttingProblem(3, 2, 2, 2), ropeCuttingProblem(3, 2, 2, 2))
//     res = ropeCuttingProblem(3, 2, 2, 2)
//
// Call: ropeCuttingProblem(3, 2, 2, 2)
//   n=3, a=2, b=2, c=2
//   Try three cuts:
//     res = max(ropeCuttingProblem(1, 2, 2, 2), ropeCuttingProblem(1, 2, 2, 2), ropeCuttingProblem(1, 2, 2, 2))
//     res = ropeCuttingProblem(1, 2, 2, 2)
//
// Call: ropeCuttingProblem(1, 2, 2, 2)
//   n=1, a=2, b=2, c=2
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(1-2, 2, 2, 2) = ropeCuttingProblem(-1, 2, 2, 2) → returns -1
//     cut b=2: ropeCuttingProblem(1-2, 2, 2, 2) = ropeCuttingProblem(-1, 2, 2, 2) → returns -1
//     cut c=2: ropeCuttingProblem(1-2, 2, 2, 2) = ropeCuttingProblem(-1, 2, 2, 2) → returns -1
//     res = max(-1, -1, -1) = -1
//     Check: res === -1? Yes
//     Return: -1
//
// Back to ropeCuttingProblem(3, 2, 2, 2):
//   res = -1
//   Check: res === -1? Yes
//   Return: -1
//
// Back to ropeCuttingProblem(5, 2, 2, 2):
//   res = -1
//   Check: res === -1? Yes
//   Return: -1
//
// Back to ropeCuttingProblem(7, 2, 2, 2):
//   res = -1
//   Check: res === -1? Yes
//   Return: -1
//
// Back to ropeCuttingProblem(9, 2, 2, 2):
//   res = -1
//   Check: res === -1? Yes
//   Return: -1
//
// Result: -1 (No valid way to cut rope of length 9 with pieces of length 2)
//
// Note: This example shows that n=9 cannot be cut with pieces of length 2 only.
// However, if we had different values like n=9, a=2, b=3, c=4, we could get a valid solution.

// Step-by-step execution example 2:
// Input: n = 5, a = 2, b = 3, c = 1
//
// Call: ropeCuttingProblem(5, 2, 3, 1)
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(3, 2, 3, 1)
//     cut b=3: ropeCuttingProblem(2, 2, 3, 1)
//     cut c=1: ropeCuttingProblem(4, 2, 3, 1)
//   res = max(ropeCuttingProblem(3, ...), ropeCuttingProblem(2, ...), ropeCuttingProblem(4, ...))
//
// Call: ropeCuttingProblem(3, 2, 3, 1)
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(1, 2, 3, 1) → will return 1 (1 piece of length 1)
//     cut b=3: ropeCuttingProblem(0, 2, 3, 1) → returns 0 (base case)
//     cut c=1: ropeCuttingProblem(2, 2, 3, 1) → will return 1 (1 piece of length 2)
//   res = max(1, 0, 1) = 1
//   Return: 1 + 1 = 2
//
// Call: ropeCuttingProblem(2, 2, 3, 1)
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(0, 2, 3, 1) → returns 0
//     cut b=3: ropeCuttingProblem(-1, 2, 3, 1) → returns -1
//     cut c=1: ropeCuttingProblem(1, 2, 3, 1) → will return 1
//   res = max(0, -1, 1) = 1
//   Return: 1 + 1 = 2
//
// Call: ropeCuttingProblem(4, 2, 3, 1)
//   Try three cuts:
//     cut a=2: ropeCuttingProblem(2, 2, 3, 1) → returns 2
//     cut b=3: ropeCuttingProblem(1, 2, 3, 1) → returns 1
//     cut c=1: ropeCuttingProblem(3, 2, 3, 1) → returns 2
//   res = max(2, 1, 2) = 2
//   Return: 2 + 1 = 3
//
// Back to ropeCuttingProblem(5, 2, 3, 1):
//   res = max(2, 2, 3) = 3
//   Return: 3 + 1 = 4
//
// Result: 4 (Maximum 4 pieces: can be cut as 2+1+1+1 or 3+1+1, etc.)

// WHY THIS IS NAIVE:
// - Time Complexity: O(3^n) - exponential growth
//   At each level, we make 3 recursive calls, leading to 3^n total calls
// - Redundant calculations: Same subproblems are solved multiple times
//   Example: ropeCuttingProblem(3, 2, 3, 1) might be called multiple times
// - Better approach: Use Dynamic Programming (DP) with memoization
//   DP approach: O(n) time, O(n) space

let n = 9;
let a = 2;
let b = 2;
let c = 2;
console.log(ropeCuttingProblem(n, a, b, c)); // Expected output: -1 (no valid solution)