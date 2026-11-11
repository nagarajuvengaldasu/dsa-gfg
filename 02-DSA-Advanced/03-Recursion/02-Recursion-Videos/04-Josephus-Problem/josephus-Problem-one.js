/**
 * JOSEPHUS PROBLEM - 1-INDEXED VERSION (SINGLE FUNCTION)
 * Problem: Find the position of the last remaining person in a circle of n people
 * where every k-th person is eliminated, starting from position 1
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) for recursion stack
 * 
 * KEY INSIGHT: This single function works directly in 1-indexed by:
 * 1. Base case: return 1 (1-indexed)
 * 2. Recurrence: Convert 1-indexed to 0-indexed, apply recurrence, convert back
 *    Formula: ((jos(n-1, k) + k - 1) % n) + 1
 * 
 * ALTERNATIVE: You can also use 2 functions:
 * - Helper function works in 0-indexed
 * - Main function converts result to 1-indexed
 * Both approaches are correct, but single function is more concise!
 */

// SINGLE FUNCTION APPROACH - Works directly in 1-indexed
// This combines both functions into one by adjusting the recurrence relation
function josephusProblem(n, k){
  // Step 1: Base Case - If only 1 person remains
  // In 1-indexed, position 1 is the only person and the survivor
  // Return 1 (1-indexed)
  // Example: n=1 → return 1 (position 1 is the survivor)
  if(n === 1) return 1;
  
  // Step 2: Recursive Case - Solve for n-1 people first
  // The recurrence relation works in 0-indexed: jos(n, k) = (jos(n-1, k) + k) % n
  // Since we're working in 1-indexed, we need to convert:
  // 1. Get 1-indexed result for n-1: josephusProblem(n-1, k) returns 1-indexed
  // 2. Convert to 0-indexed: subtract 1
  // 3. Apply recurrence in 0-indexed: (result - 1 + k) % n
  // 4. Convert back to 1-indexed: add 1
  // Simplified formula: ((josephusProblem(n-1, k) + k - 1) % n) + 1
  // 
  // Example: n=5, k=3
  //   josephusProblem(4, 3) returns 1-indexed result (let's say 1)
  //   Convert to 0-indexed: 1 - 1 = 0
  //   Apply recurrence: (0 + 3) % 5 = 3
  //   Convert to 1-indexed: 3 + 1 = 4
  return ((josephusProblem(n-1, k) + k - 1) % n) + 1;
}

// Step-by-step execution example (SINGLE FUNCTION):
// Input: n = 5, k = 3
// Circle: [1, 2, 3, 4, 5] (1-indexed)
// Elimination order: 3, 1, 5, 2 → Survivor: 4
//
// Call: josephusProblem(5, 3)
//   n=5, k=3
//   Check: n === 1? No
//   
//   Step 2: Recursively solve for n-1=4 people
//   Call: josephusProblem(4, 3)
//     n=4, k=3
//     Check: n === 1? No
//     Call: josephusProblem(3, 3)
//       n=3, k=3
//       Check: n === 1? No
//       Call: josephusProblem(2, 3)
//         n=2, k=3
//         Check: n === 1? No
//         Call: josephusProblem(1, 3)
//           n=1, k=3
//           Check: n === 1? Yes (BASE CASE)
//           Return: 1 (1-indexed)
//         
//         Back to josephusProblem(2, 3):
//           Calculate: ((1 + 3 - 1) % 2) + 1
//           = (3 % 2) + 1
//           = 1 + 1
//           = 2 (1-indexed)
//           Return: 2
//       
//       Back to josephusProblem(3, 3):
//         Calculate: ((2 + 3 - 1) % 3) + 1
//         = (4 % 3) + 1
//         = 1 + 1
//         = 2 (1-indexed)
//         Return: 2
//     
//     Back to josephusProblem(4, 3):
//       Calculate: ((2 + 3 - 1) % 4) + 1
//       = (4 % 4) + 1
//       = 0 + 1
//       = 1 (1-indexed)
//       Return: 1
//   
//   Back to josephusProblem(5, 3):
//     Calculate: ((1 + 3 - 1) % 5) + 1
//     = (3 % 5) + 1
//     = 3 + 1
//     = 4 (1-indexed)
//     Return: 4
//
// Result: 4 (Correct! Position 4 is the survivor)

// WHY THE ORIGINAL CODE WAS WRONG:
// Original code: return (josephusProblem(n-1, k) + k) % n + 1;
// 
// Problem: Adding +1 at each recursive step causes incorrect results
// The recurrence relation (jos(n-1, k) + k) % n is designed for 0-indexed calculations
// By adding 1 at each step, we're mixing 0-indexed and 1-indexed, breaking the recurrence
// 
// Example trace with WRONG code (n=5, k=3):
//   josephusProblem(1, 3) = 0
//   josephusProblem(2, 3) = ((0 + 3) % 2) + 1 = 1 + 1 = 2
//   josephusProblem(3, 3) = ((2 + 3) % 3) + 1 = 2 + 1 = 3
//   josephusProblem(4, 3) = ((3 + 3) % 4) + 1 = 2 + 1 = 3
//   josephusProblem(5, 3) = ((3 + 3) % 5) + 1 = 1 + 1 = 2 ❌ (Wrong! Should be 4)
//
// The issue: 
// - The recurrence (jos(n-1, k) + k) % n expects 0-indexed input
// - But josephusProblem(n-1, k) returns 1-indexed (because of the +1)
// - This mismatch causes incorrect calculations

// TWO APPROACHES COMPARISON:
//
// APPROACH 1: Two Functions (Previous version)
//   - Helper function works in 0-indexed
//   - Main function converts to 1-indexed at the end
//   - Pros: Clear separation, easier to understand
//   - Cons: Requires 2 functions
//
// APPROACH 2: Single Function (Current version)
//   - Works directly in 1-indexed
//   - Converts between 0-indexed and 1-indexed within the recurrence
//   - Formula: ((jos(n-1, k) + k - 1) % n) + 1
//   - Pros: More concise, single function
//   - Cons: Slightly more complex formula
//
// Both approaches are correct and produce the same result!
//
// Single function trace (n=5, k=3):
//   josephusProblem(1, 3) = 1 (base case)
//   josephusProblem(2, 3) = ((1 + 3 - 1) % 2) + 1 = 2
//   josephusProblem(3, 3) = ((2 + 3 - 1) % 3) + 1 = 2
//   josephusProblem(4, 3) = ((2 + 3 - 1) % 4) + 1 = 1
//   josephusProblem(5, 3) = ((1 + 3 - 1) % 5) + 1 = 4 ✅ (Correct!)

console.log(josephusProblem(5, 2)); // Expected output: 4