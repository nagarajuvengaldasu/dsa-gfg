class Solution {
  countWays(n) {
    if (n === 1) {
      return BigInt(1);
    }
    if (n === 2) {
      return BigInt(2);
    }
    let prev1 = BigInt(1);
    let prev2 = BigInt(2);
    let curr = BigInt(0);

    for (let i = 3; i <= n; i++) {
      curr = prev1 + prev2;
      prev1 = prev2;
      prev2 = curr;
    }
    return curr;
  }
}
let n = 4;
let solution = new Solution();
console.log(solution.countWays(n));
