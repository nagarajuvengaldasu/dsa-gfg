/*
 * ========== PROBLEM: Binary String — count pairs of 1's ==========
 *
 * Given a binary string (only '0' and '1'), find the number of pairs of '1's.
 * A "pair" means two different positions (indices) that both contain '1'.
 *
 * Input:  str = binary string (e.g. "1111", "101", "00110")
 *
 * Output: Number of ways to choose 2 positions that are both '1'.
 *         If there are fewer than 2 ones, return 0.
 *
 * Approach: Count total ones (count). Number of pairs = C(count, 2) = count*(count-1)/2,
 *           because each pair of 1's is uniquely chosen from the set of all 1-positions.
 */

function binaryString(str) {
  let n = str.length; // length of the binary string
  let count = 0; // will hold total number of '1's
  for (let i = 0; i < n; i++) {
    if (str[i] === "1") {
      count++; // increment for every '1' found
    }
  }
  if (count < 2) return 0; // need at least 2 ones to form a pair

  return (count * (count - 1)) / 2; // C(count, 2) = number of pairs of 1's
}

// --- Example: "1111" has 4 ones → 4*3/2 = 6 pairs ---
let str = "1111";
console.log(binaryString(str));
