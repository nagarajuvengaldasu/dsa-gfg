/**
 * Gas Station Problem
 *
 * PROBLEM: Find starting index to complete circular tour.
 * gas[i] = gas at station i, cost[i] = gas to go from i to i+1.
 * Return starting index if possible, else -1.
 *
 * APPROACH:
 * 1. If total gas < total cost, return -1
 * 2. Track tank. If tank < 0 at station i, restart from i+1 (can't start from [start,i])
 * 3. Return start
 *
 * Time: O(n), Space: O(1)
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @returns {number}
 */
function canCompleteCircuit(gas, cost) {
  // STEP 1: Get array length
  const n = gas.length;

  // STEP 2: Initialize totals to sum gas and cost
  let totalGas = 0;
  let totalCost = 0;

  // STEP 3: Sum all gas and all cost in one pass
  for (let i = 0; i < n; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  // STEP 4: If total gas < total cost, impossible to complete circuit
  if (totalGas < totalCost) return -1;

  // STEP 5: Initialize tank (current gas) and start (candidate index)
  let tank = 0;
  let start = 0;

  // STEP 6: Find valid starting point
  // At each station: tank += gas[i] - cost[i]
  // If tank < 0, we can't start from [start..i], so start = i+1, reset tank
  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  // STEP 7: Return the valid starting index
  return start;
}

/**
 * STEP-BY-STEP EXECUTION - Example 1: gas=[4,5,7,4], cost=[6,6,3,5]
 *
 * STEP 1: n = 4
 * STEP 2-3: totalGas = 4+5+7+4 = 20, totalCost = 6+6+3+5 = 20
 * STEP 4: 20 >= 20, continue
 * STEP 5: tank = 0, start = 0
 *
 * STEP 6 - Loop:
 *   i=0: tank += 4-6 = -2
 *         tank < 0 → start = 1, tank = 0
 *   i=1: tank += 5-6 = -1
 *         tank < 0 → start = 2, tank = 0
 *   i=2: tank += 7-3 = 4
 *         tank >= 0, no change
 *   i=3: tank += 4-5 = -1, tank = 4-1 = 3
 *         tank >= 0, no change
 * STEP 7: return start = 2
 *
 * Output: 2
 */

/**
 * STEP-BY-STEP EXECUTION - Example 2: gas=[3,9], cost=[7,6]
 *
 * STEP 1: n = 2
 * STEP 2-3: totalGas = 3+9 = 12, totalCost = 7+6 = 13
 * STEP 4: 12 < 13 → return -1
 *
 * Output: -1
 */

// Test
console.log(canCompleteCircuit([4, 5, 7, 4], [6, 6, 3, 5])); // 2
console.log(canCompleteCircuit([3, 9], [7, 6]));             // -1
