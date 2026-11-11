// GAME OF CHOCOLATES: Determine if the first player (Bunty) can win
// OPTIMAL APPROACH: Use Wythoff's game theory with golden ratio
// Time Complexity: O(1)
// Space Complexity: O(1)
//
// KEY INSIGHT: This problem is based on Wythoff's game, where:
// - Two players take turns removing chocolates
// - Can remove L chocolates from one box, or L from both boxes
// - Player who cannot make a move loses
// - Winning positions can be determined using the golden ratio (phi)
// - Losing positions follow the pattern: (floor(k * phi), floor(k * phi^2))
//   where k is a non-negative integer

function gameOfChocolate(a , b){
  // Step 1: Ensure a <= b (normalize the input)
  // This ensures we always work with a <= b for consistent calculations
  // Example: If a=3, b=1, swap them to a=1, b=3
  if(a > b){
    [a, b] = [b, a];
  }
  // After swap: a=1, b=3 (a <= b)
  
  // Step 2: Calculate the golden ratio (phi)
  // phi = (1 + sqrt(5)) / 2 ≈ 1.618033988749895
  // This is a fundamental constant in Wythoff's game theory
  const phi = (1 + Math.sqrt(5)) / 2;
  // phi ≈ 1.618033988749895

  // Step 3: Calculate the difference k = b - a
  // This difference is used to check if (a, b) is a losing position
  const k = b - a;
  // Example: k = 3 - 1 = 2

  // Step 4: Check if (a, b) is a losing position
  // In Wythoff's game, losing positions follow the pattern:
  //   (floor(k * phi), floor(k * phi) + k)
  // If floor(k * phi) == a, then (a, b) is a losing position
  // Example: k=2, floor(2 * 1.618...) = floor(3.236...) = 3
  //          Check: 3 === 1? No, so (1, 3) is a winning position
  if(Math.floor(k * phi) === a){
    // This is a losing position - first player cannot win
    return false;
  }
  // This is a winning position - first player can win
  return true;
}

// Step-by-step execution example 1:
// Input: a = 1, b = 3
//
// Step 1: Normalize input (ensure a <= b)
//   a=1, b=3
//   Check: 1 > 3? No, no swap needed
//   After: a=1, b=3
//
// Step 2: Calculate golden ratio
//   phi = (1 + sqrt(5)) / 2
//   phi = (1 + 2.23606797749979) / 2
//   phi = 3.23606797749979 / 2
//   phi ≈ 1.618033988749895
//
// Step 3: Calculate difference
//   k = b - a
//   k = 3 - 1
//   k = 2
//
// Step 4: Check if losing position
//   floor(k * phi) = floor(2 * 1.618033988749895)
//   floor(k * phi) = floor(3.23606797749979)
//   floor(k * phi) = 3
//   Check: 3 === 1? No
//   Therefore: (1, 3) is a WINNING position
//   Return: true
//
// Result: true (Bunty can win)

// Step-by-step execution example 2:
// Input: a = 3, b = 5
//
// Step 1: Normalize input
//   a=3, b=5
//   Check: 3 > 5? No, no swap needed
//   After: a=3, b=5
//
// Step 2: Calculate golden ratio
//   phi ≈ 1.618033988749895
//
// Step 3: Calculate difference
//   k = 5 - 3 = 2
//
// Step 4: Check if losing position
//   floor(k * phi) = floor(2 * 1.618033988749895)
//   floor(k * phi) = floor(3.23606797749979) = 3
//   Check: 3 === 3? Yes
//   Therefore: (3, 5) is a LOSING position
//   Return: false
//
// Result: false (Bunty cannot win)

// Step-by-step execution example 3:
// Input: a = 5, b = 3 (a > b, needs swap)
//
// Step 1: Normalize input
//   a=5, b=3
//   Check: 5 > 3? Yes, swap needed
//   [a, b] = [b, a] = [3, 5]
//   After: a=3, b=5
//
// Step 2: Calculate golden ratio
//   phi ≈ 1.618033988749895
//
// Step 3: Calculate difference
//   k = 5 - 3 = 2
//
// Step 4: Check if losing position
//   floor(k * phi) = 3
//   Check: 3 === 3? Yes
//   Return: false
//
// Result: false (Bunty cannot win)

// WHY THIS IS OPTIMAL:
// Naive approach: O(2^(a+b)) - recursive game tree exploration with memoization
// Optimal approach: O(1) - direct formula using golden ratio
// The golden ratio formula directly identifies winning/losing positions
// without exploring the entire game tree

let a = 1;
let b = 3;
console.log(gameOfChocolate(a, b)); // Expected output: true