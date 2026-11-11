/**
 * Generate First N Numbers with Digits 5 and 6 Only (Optimal)
 *
 * PROBLEM STATEMENT:
 * Print first N numbers that consist only of digits 5 and 6, in ascending order.
 * Example: 5, 6, 55, 56, 65, 66, 555, ...
 *
 * WHY OPTIMAL: Stops after printing exactly N numbers.
 * Uses condition i + q.size() < n to avoid generating extra numbers.
 *
 * APPROACH: BFS with queue. Start with "5" and "6".
 * For each number: print it, add (curr+"5") and (curr+"6") to queue.
 * Stop when we've printed n numbers.
 */

class Queue {
  constructor() {
    this.queue = [];
  }
  enque(x) {
    this.queue.push(x);
  }
  deque() {
    return this.queue.shift();
  }
  getFront() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

/**
 * printFirstN(n) - Print first n numbers with digits 5 and 6 only
 *
 * EXECUTION:
 * 1. Seed queue with "5" and "6"
 * 2. Loop: while i + q.size() < n
 *    - deque curr, print it, enque curr+"5", curr+"6"
 *    - i = number printed
 * 3. If more to print: while i < n, deque and print remaining
 *
 * WHY i + q.size() < n:
 * - i = count printed so far
 * - q.size() = count still in queue (will be printed)
 * - When i + q.size() >= n, we have enough to reach n, stop generating
 */
function printFirstN(n) {
  let q = new Queue();
  q.enque("5");
  q.enque("6");
  let i;
  for (i = 0; i + q.size() < n; i++) {
    let curr = q.deque();
    console.log(curr);
    q.enque(curr + "5");
    q.enque(curr + "6");
  }
  while (i < n) {
    console.log(q.deque());
    i++;
  }
}

/**
 * STEP-BY-STEP EXECUTION for printFirstN(5)
 *
 * Initial: q = ["5", "6"], i = 0
 * i + q.size() = 0 + 2 = 2 < 5 ✓
 *
 * Iteration 1: i=0
 *   curr = q.deque() = "5", q = ["6"]
 *   console.log("5")  → Output: 5
 *   q.enque("55"), q.enque("56") → q = ["6", "55", "56"]
 *   i++ → i = 1
 *   Check: 1 + 3 = 4 < 5 ✓
 *
 * Iteration 2: i=1
 *   curr = "6", q = ["55", "56"]
 *   console.log("6")  → Output: 6
 *   q.enque("65"), q.enque("66") → q = ["55", "56", "65", "66"]
 *   i = 2
 *   Check: 2 + 4 = 6 >= 5 ✗  → exit for loop
 *
 * while (i < n): i=2, n=5
 *   console.log(q.deque()) → "55", i=3  Output: 55
 *   console.log(q.deque()) → "56", i=4  Output: 56
 *   console.log(q.deque()) → "65", i=5  Output: 65
 *   i < n → 5 < 5 false, exit
 *
 * Final output: 5, 6, 55, 56, 65 (exactly 5 numbers)
 */

printFirstN(5);
