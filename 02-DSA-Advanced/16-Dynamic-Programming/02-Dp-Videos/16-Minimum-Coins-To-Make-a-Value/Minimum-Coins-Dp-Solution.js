/**
 * MINIMUM COINS TO MAKE A VALUE - DP SOLUTION
 * Same problem as recursive: min coins to make value `val`; each coin can be used multiple times.
 * Bottom-up: dp[v] = min coins to make value v.
 * Time: O(val * n), Space: O(val)
 */
function mcoinsDP(coin, val) {
  let dp = new Array(val + 1).fill(Infinity);
  dp[0] = 0;

  for (let v = 1; v <= val; v++) {
    for (let i = 0; i < coin.length; i++) {
      if (coin[i] <= v) {
        let sub = dp[v - coin[i]];
        if (sub !== Infinity && sub + 1 < dp[v]) {
          dp[v] = sub + 1;
        }
      }
    }
  }
  return dp[val] === Infinity ? -1 : dp[val];
}

let coin = [2, 3, 5];
let val = 7;
console.log(mcoinsDP(coin, val)); // 2 (e.g. 2+5 or 2+2+3)
