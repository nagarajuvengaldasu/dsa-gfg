// Problem: First Circular Tour (Petrol Pump Problem) - Optimal Solution
// Given:
//   - Array 'petrol': Petrol available at each pump
//   - Array 'dist': Distance to next pump
// Find: Starting pump index (1-indexed) from which we can complete circular tour
//       Return -1 if no such starting point exists
//
// Optimal Approach Key Insight:
// If we can't reach from point A to point B, then any point between A and B
// also can't be a valid starting point. So we can skip those and start from B+1.
// This allows us to solve in O(n) time with a single pass.

// firstPP(petrol, dist): Optimal O(n) solution using single pass
function firstPP(petrol, dist) {
  // Step 1: Initialize starting point candidate to 0 (first pump)
  let start = 0;
  // Step 2: Initialize current petrol balance (from current start point)
  let curr_pet = 0;
  // Step 3: Initialize previous petrol deficit (accumulated from failed starting points)
  let prev_pet = 0;

  // Step 4: Traverse through all pumps once (single pass)
  for (let i = 0; i < petrol.length; i++) {
    // Step 5: Calculate net petrol after visiting current pump
    // Formula: curr_pet += petrol[i] - dist[i]
    // This gives remaining petrol after traveling from pump i to pump i+1
    curr_pet += petrol[i] - dist[i];

    // Step 6: Check if we have negative petrol (can't proceed from current start)
    if (curr_pet < 0) {
      // Step 7a: Update start to next pump (skip all pumps from current start to i)
      // Key insight: If we can't reach from 'start' to 'i',
      // then no pump between 'start' and 'i' can be a valid starting point
      start = i + 1;

      // Step 7b: Accumulate the deficit into prev_pet
      // This tracks the total deficit from all previous failed starting points
      prev_pet += curr_pet;

      // Step 7c: Reset current petrol to 0 (start fresh from new starting point)
      curr_pet = 0;
    }
    // Step 8: If curr_pet >= 0, continue to next pump (we can still proceed)
  }

  // Step 9: After single pass, check if we can complete the tour
  // curr_pet: remaining petrol from the final candidate start point
  // prev_pet: accumulated deficit from all previous failed starting points
  // If curr_pet + prev_pet >= 0, we have enough to cover the entire tour
  return curr_pet + prev_pet >= 0 ? start + 1 : -1;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   petrol = [4, 8, 7, 4]  (petrol at pumps: 4, 8, 7, 4)
//   distance = [6, 5, 3, 5] (distance to next: 6, 5, 3, 5)
let petrol = [4, 8, 7, 4];
let distance = [6, 5, 3, 5];

// Execution trace (step-by-step):
//
// Initial: start = 0, curr_pet = 0, prev_pet = 0
//
// ===== ITERATION 1: i = 0 (Pump 0) =====
// Step 1: curr_pet += petrol[0] - dist[0] = 0 + (4 - 6) = -2
// Step 2: Check: curr_pet (-2) < 0, enter if block
// Step 3: start = 0 + 1 = 1 (try starting from pump 1 next)
// Step 4: prev_pet += curr_pet = 0 + (-2) = -2 (accumulate deficit)
// Step 5: curr_pet = 0 (reset for new starting point)
// State: start=1, curr_pet=0, prev_pet=-2
//
// ===== ITERATION 2: i = 1 (Pump 1) =====
// Step 1: curr_pet += petrol[1] - dist[1] = 0 + (8 - 5) = 3
// Step 2: Check: curr_pet (3) >= 0, continue (don't enter if block)
// State: start=1, curr_pet=3, prev_pet=-2
//
// ===== ITERATION 3: i = 2 (Pump 2) =====
// Step 1: curr_pet += petrol[2] - dist[2] = 3 + (7 - 3) = 7
// Step 2: Check: curr_pet (7) >= 0, continue (don't enter if block)
// State: start=1, curr_pet=7, prev_pet=-2
//
// ===== ITERATION 4: i = 3 (Pump 3) =====
// Step 1: curr_pet += petrol[3] - dist[3] = 7 + (4 - 5) = 6
// Step 2: Check: curr_pet (6) >= 0, continue (don't enter if block)
// State: start=1, curr_pet=6, prev_pet=-2
//
// ===== FINAL CHECK =====
// After loop: curr_pet = 6, prev_pet = -2
// Check: curr_pet + prev_pet = 6 + (-2) = 4 >= 0
// Result: Return start + 1 = 1 + 1 = 2 (Pump 2 is valid starting point)
//
// Verification: Starting from pump 1 (index 1):
//   - Pump 1 to 2: 8 - 5 = 3 (remaining: 3)
//   - Pump 2 to 3: 3 + 7 - 3 = 7 (remaining: 7)
//   - Pump 3 to 0: 7 + 4 - 5 = 6 (remaining: 6)
//   - Pump 0 to 1: 6 + 4 - 6 = 4 (remaining: 4) ✓ Can complete tour!

console.log(firstPP(petrol, distance));
// Expected Output: 2 (Pump 2, 1-indexed, is a valid starting point)
