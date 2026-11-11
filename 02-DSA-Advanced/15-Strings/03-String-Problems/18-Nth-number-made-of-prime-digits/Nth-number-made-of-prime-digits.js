/*
 * PROBLEM STATEMENT: Nth Number Made of Prime Digits
 * --------------------------------------------------
 * Find the nth number in the sequence of numbers that contain only
 * prime digits (2, 3, 5, 7). Order is ascending.
 *
 * Sequence: 2, 3, 5, 7, 22, 23, 25, 27, 32, 33, 35, 37, 52, ...
 *
 * Example: n = 1 → 2,  n = 4 → 7,  n = 5 → 22,  n = 10 → 33
 */

/*
 * LINE-BY-LINE EXECUTION (n = 10):
 * --------------------------------
 * 1. primes = ["2","3","5","7"], queue = [].
 * 2. After loop: queue = ["2","3","5","7"]. count = 0, current = "".
 *
 * 3. while (count < 10):
 *    count=0: current = queue.shift() = "2", count=1. Push "22","23","25","27".
 *    count=1: current = "3", count=2. Push "32","33","35","37".
 *    count=2: current = "5", count=3. Push "52","53","55","57".
 *    count=3: current = "7", count=4. Push "72","73","75","77".
 *    count=4: current = "22", count=5. Push "222","223","225","227".
 *    count=5: current = "23", count=6. Push "232","233","235","237".
 *    count=6: current = "25", count=7.
 *    count=7: current = "27", count=8.
 *    count=8: current = "32", count=9.
 *    count=9: current = "33", count=10. Push "332","333","335","337". Exit loop.
 *
 * 4. return Number("33") = 33
 */
class Solution {
  primeDigits(n) {
    // Step 1: Initialize the primes array and queue
    let primes = ["2", "3", "5", "7"];
    // Step 2: Initialize the queue
    let queue = [];

    // Step 3: Add all prime digits to the queue
    for (let digit of primes) {
      // Step 4: Add the prime digit to the queue
      queue.push(digit);
    }
    // Step 5: Initialize the count and current
    let count = 0;
    // Step 6: Initialize the current
    let current = "";

    // Step 7: While the count is less than n, shift the queue and add the prime digits to the queue
    while (count < n) {
      // Step 8: Shift the queue and increment the count
      current = queue.shift();
      count++;

      // Step 9: Add the prime digits to the queue
      for (let digit of primes) {
        // Step 10: Add the prime digit to the queue
        queue.push(current + digit);
      }
    }
    // Step 11: Return the current number
    return Number(current);
  }
}

let sol = new Solution();
let n = 10;
console.log(sol.primeDigits(n));
