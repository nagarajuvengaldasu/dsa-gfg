// Problem: First Circular Tour (Petrol Pump Problem)
// Given:
//   - Array 'petrol': Petrol available at each pump
//   - Array 'distance': Distance to next pump
// Find: Starting pump index (1-indexed) from which we can complete circular tour
//       Return -1 if no such starting point exists

// firstCircularTour(petrol, distance): Naive approach - tries each starting point
function firstCircularTour(petrol, distance) {
  // Step 1: Try each pump as a potential starting point
  for (let start = 0; start < petrol.length; start = start + 1) {
    // Step 2: Initialize current petrol to 0 (start with no petrol)
    let currentPetrol = 0;
    // Step 3: Set end pointer to start (we begin from starting pump)
    let end = start;

    // Step 4: Keep moving until we either run out of petrol or complete the tour
    while (true) {
      // Step 5: Calculate net petrol after visiting current pump
      // Formula: currentPetrol += petrol_available - distance_to_next
      // This gives us the remaining petrol after traveling to next pump
      currentPetrol += petrol[end] - distance[end];

      // Step 6: Check if we have negative petrol (can't proceed)
      if (currentPetrol < 0) {
        // Step 7a: If negative, break from while loop and try next starting point
        break;
      }

      // Step 7b: Move to next pump (circular array - wrap around)
      // Formula: (end + 1) % length ensures we wrap back to index 0 after last pump
      end = (end + 1) % petrol.length;

      // Step 8: Check if we've completed the circular tour
      if (end === start) {
        // Step 9: If we're back at start, we completed the tour successfully
        // Return start + 1 (convert to 1-indexed as per problem requirement)
        return start + 1;
      }
    }
  }
  // Step 10: If no starting point works, return -1
  return -1;
}

// ========== TEST CODE EXECUTION ==========

// Test Case:
//   petrol = [8, 9, 4]  (petrol at pumps: 8, 9, 4)
//   distance = [5, 10, 12] (distance to next: 5, 10, 12)
let petrol = [8, 9, 4];
let distance = [5, 10, 12];

// Execution trace (step-by-step):
//
// ===== ITERATION 1: Try start = 0 (Pump 1, index 0) =====
// Step 1: Initialize currentPetrol = 0, end = 0
// Step 2: Enter while loop
//   - Visit pump 0: currentPetrol += a[0] - b[0] = 0 + (8 - 5) = 3
//   - Check: currentPetrol (3) >= 0, continue
//   - Move: end = (0 + 1) % 3 = 1
//   - Check: end (1) !== start (0), continue loop
// Step 3: Continue while loop
//   - Visit pump 1: currentPetrol += a[1] - b[1] = 3 + (9 - 10) = 2
//   - Check: currentPetrol (2) >= 0, continue
//   - Move: end = (1 + 1) % 3 = 2
//   - Check: end (2) !== start (0), continue loop
// Step 4: Continue while loop
//   - Visit pump 2: currentPetrol += a[2] - b[2] = 2 + (4 - 12) = -6
//   - Check: currentPetrol (-6) < 0, break from while loop
// Result: Cannot complete tour from pump 1, try next starting point
//
// ===== ITERATION 2: Try start = 1 (Pump 2, index 1) =====
// Step 1: Initialize currentPetrol = 0, end = 1
// Step 2: Enter while loop
//   - Visit pump 1: currentPetrol += a[1] - b[1] = 0 + (9 - 10) = -1
//   - Check: currentPetrol (-1) < 0, break from while loop
// Result: Cannot complete tour from pump 2, try next starting point
//
// ===== ITERATION 3: Try start = 2 (Pump 3, index 2) =====
// Step 1: Initialize currentPetrol = 0, end = 2
// Step 2: Enter while loop
//   - Visit pump 2: currentPetrol += a[2] - b[2] = 0 + (4 - 12) = -8
//   - Check: currentPetrol (-8) < 0, break from while loop
// Result: Cannot complete tour from pump 3
//
// ===== FINAL RESULT =====
// All starting points tried, none work
// Return: -1 (no valid starting point exists)

console.log(firstCircularTour(petrol, distance));
// Expected Output: -1 (no valid starting point exists)
