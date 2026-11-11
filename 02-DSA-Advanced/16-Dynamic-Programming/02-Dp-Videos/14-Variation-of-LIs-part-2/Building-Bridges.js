/**
 * Building Bridges (Variation of LIS - No Crossing)
 * Given pairs (north bank, south bank), find max number of non-crossing bridges.
 *
 * Algorithm:
 * 1. Sort pairs by first value (north) ascending. If first values are equal, sort by second (south) descending.
 * 2. Find LIS of the second values (south) of the sorted array. That length = max non-crossing bridges.
 */

function buildingBridges(pairs) {
  if (pairs.length === 0) return 0;

  // Sort by first asc; if same, by second desc (so same north → no crossing when taking LIS of south)
  let sorted = [...pairs].sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });

  let south = sorted.map((p) => p[1]);
  let n = south.length;

  let lis = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (south[j] < south[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  return Math.max(...lis);
}

// Example 1: {(6,2), (4,3), (2,6), (1,5)} → sort: (1,5),(2,6),(4,3),(6,2) → south [5,6,3,2] → LIS length 2
console.log(
  buildingBridges([
    [6, 2],
    [4, 3],
    [2, 6],
    [1, 5],
  ])
); // 2

// Example 2: {(8,1), (1,2), (4,3), (3,4), (2,6), (6,7), (7,8), (5,5)} → 5
console.log(
  buildingBridges([
    [8, 1],
    [1, 2],
    [4, 3],
    [3, 4],
    [2, 6],
    [6, 7],
    [7, 8],
    [5, 5],
  ])
); // 5
