/**
 * JOSEPHUS PROBLEM - 0-INDEXED VERSION
 * Problem: Find the position of the last remaining person in a circle of n people
 * where every k-th person is eliminated, starting from position 0
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) for recursion stack
 * 
 * KEY INSIGHT: This version works entirely in 0-indexed (positions 0, 1, 2, ..., n-1)
 * The recurrence relation works correctly because all calculations are in 0-indexed
 * 
 * Recurrence Relation: jos(n, k) = (jos(n-1, k) + k) % n
 * Explanation: After eliminating one person from n people, we have n-1 people left.
 * The survivor's position in the new circle (n-1 people) shifts by k positions
 * due to the elimination. We use modulo n to wrap around the circle.
 */

function josephusProblem(n, k){
  // Step 1: Base Case - If only 1 person remains
  // In 0-indexed, position 0 is the only person and the survivor
  // This stops the recursion
  // Example: n=1 → return 0 (position 0 is the survivor)
  if(n === 1) return 0;
  
  // Step 2: Recursive Case - Solve for n-1 people first
  // Recurrence relation: jos(n, k) = (jos(n-1, k) + k) % n
  // 
  // How it works:
  // 1. Recursively solve for n-1 people: josephusProblem(n-1, k)
  //    This gives us the survivor's position in a circle of n-1 people (0-indexed)
  // 
  // 2. Add k to account for the shift caused by eliminating one person
  //    When we eliminate the k-th person (0-indexed), the circle shifts
  // 
  // 3. Take modulo n to wrap around the circle of n people
  //    This ensures the result is in the range [0, n-1]
  //
  // Example: n=5, k=3
  //   josephusProblem(4, 3) returns the survivor for 4 people
  //   We add k=3 to shift for the elimination
  //   We take % 5 to get the position in the circle of 5 people
  return (josephusProblem(n-1, k) + k) % n;
}

// Step-by-step execution example:
// Input: n = 5, k = 3
// Circle: [0, 1, 2, 3, 4] (0-indexed)
// Elimination order: 2, 0, 4, 1 → Survivor: 3
//
// Call: josephusProblem(5, 3)
//   n=5, k=3
//   Check: n === 1? No
//   
//   Step 2: Recursively solve for n-1=4 people
//   Call: josephusProblem(4, 3)
//     n=4, k=3
//     Check: n === 1? No
//     
//     Call: josephusProblem(3, 3)
//       n=3, k=3
//       Check: n === 1? No
//       
//       Call: josephusProblem(2, 3)
//         n=2, k=3
//         Check: n === 1? No
//         
//         Call: josephusProblem(1, 3)
//           n=1, k=3
//           Check: n === 1? Yes (BASE CASE)
//           Return: 0
//         
//         Back to josephusProblem(2, 3):
//           Calculate: (0 + 3) % 2
//           = 3 % 2
//           = 1
//           Return: 1
//           Meaning: In a circle of 2 people [0, 1], position 1 survives
//       
//       Back to josephusProblem(3, 3):
//         Calculate: (1 + 3) % 3
//         = 4 % 3
//         = 1
//         Return: 1
//         Meaning: In a circle of 3 people [0, 1, 2], position 1 survives
//     
//     Back to josephusProblem(4, 3):
//       Calculate: (1 + 3) % 4
//       = 4 % 4
//       = 0
//       Return: 0
//       Meaning: In a circle of 4 people [0, 1, 2, 3], position 0 survives
//   
//   Back to josephusProblem(5, 3):
//     Calculate: (0 + 3) % 5
//     = 3 % 5
//     = 3
//     Return: 3
//     Meaning: In a circle of 5 people [0, 1, 2, 3, 4], position 3 survives
//
// Result: 3 (Correct! Position 3 is the survivor in 0-indexed)

// Detailed trace with circle states:
// n=1: [0] → Survivor: 0
//
// n=2: [0, 1]
//   Eliminate position (0 + 3) % 2 = 1
//   Remaining: [0] → Survivor: 0
//   But wait, let's trace the recurrence:
//   jos(2, 3) = (jos(1, 3) + 3) % 2 = (0 + 3) % 2 = 1
//   This means position 1 survives in circle of 2
//
// n=3: [0, 1, 2]
//   jos(3, 3) = (jos(2, 3) + 3) % 3 = (1 + 3) % 3 = 1
//   Position 1 survives in circle of 3
//
// n=4: [0, 1, 2, 3]
//   jos(4, 3) = (jos(3, 3) + 3) % 4 = (1 + 3) % 4 = 0
//   Position 0 survives in circle of 4
//
// n=5: [0, 1, 2, 3, 4]
//   jos(5, 3) = (jos(4, 3) + 3) % 5 = (0 + 3) % 5 = 3
//   Position 3 survives in circle of 5 ✅

// Step-by-step execution example 2:
// Input: n = 7, k = 3
//
// Call: josephusProblem(7, 3)
//   josephusProblem(1, 3) = 0 (base case)
//   josephusProblem(2, 3) = (0 + 3) % 2 = 1
//   josephusProblem(3, 3) = (1 + 3) % 3 = 1
//   josephusProblem(4, 3) = (1 + 3) % 4 = 0
//   josephusProblem(5, 3) = (0 + 3) % 5 = 3
//   josephusProblem(6, 3) = (3 + 3) % 6 = 0
//   josephusProblem(7, 3) = (0 + 3) % 7 = 3
//
// Result: 3 (Position 3 survives in a circle of 7 people)

// WHY THIS RECURRENCE WORKS:
// The key insight is that after eliminating one person, we can think of the problem
// as having n-1 people, but we need to map the positions correctly.
//
// When we eliminate the k-th person (0-indexed) from n people:
// - The circle shifts, and positions are renumbered
// - The survivor's position in the n-1 person circle is jos(n-1, k)
// - To find the position in the original n-person circle, we add k and take modulo n
//
// The recurrence (jos(n-1, k) + k) % n correctly maps from the smaller problem
// to the larger problem, accounting for the elimination and position shift.

// COMPARISON WITH 1-INDEXED VERSION:
// - 0-indexed: Positions are 0, 1, 2, ..., n-1
//   Base case: return 0
//   Recurrence: (jos(n-1, k) + k) % n
//   Result: Position in range [0, n-1]
//
// - 1-indexed: Positions are 1, 2, 3, ..., n
//   Base case: return 0 (in helper function)
//   Recurrence: (jos(n-1, k) + k) % n (in helper function)
//   Final result: helper result + 1
//   Result: Position in range [1, n]
//
// The 0-indexed version is simpler because the recurrence works directly
// without needing conversion between indexing systems.

console.log(josephusProblem(5, 2)); // Expected output: 3 (0-indexed)