/**
 * MINIMUM COINS TO MAKE A VALUE - RECURSIVE SOLUTION
 * Problem: Given a list of coin denominations and a target value,
 * find the minimum number of coins needed to make the target value.
 * Each coin can be used multiple times.
 *
 * Time Complexity: O(n^k) - exponential, as we try all combinations of coins
 * Space Complexity: O(k) - maximum depth of recursion stack is k
 */

function mcoins(coin, val) {
  // then check if the value is 0
  if (val === 0) {
    return 0;
  }
  // then initialize the result to -1
  let res = -1;
  // then iterate through the coin array
  for (let i = 0; i < coin.length; i++) {
    // then check if the coin is less than or equal to the value
    if (coin[i] <= val) {
      // then call the recursive function
      let sub_res = mcoins(coin, val - coin[i]);
      // then check if the sub result is not -1
      if (sub_res !== -1) {
        // then check if the result is -1 or the sub result + 1 is less than the result
        if (res === -1 || sub_res + 1 < res) {
          // then set the result to the sub result + 1
          res = sub_res + 1;
        }
      }
    }
  }
  // then return the result
  return res;
}

// then test the function
let coin = [2, 3, 5];
// then test the function with different values
let val = 7;
console.log(mcoins(coin, val));
