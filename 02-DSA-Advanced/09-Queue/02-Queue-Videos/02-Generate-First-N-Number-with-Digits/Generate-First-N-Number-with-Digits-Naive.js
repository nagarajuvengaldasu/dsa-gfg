/**
 * Generate First N Numbers with Digits 5 and 6 Only (Naive)
 *
 * PROBLEM STATEMENT:
 * Print first N numbers that consist only of digits 5 and 6, in ascending order.
 * Example: 5, 6, 55, 56, 65, 66, 555, ...
 *
 * NAIVE: Always deque, print, enque(curr+"5"), enque(curr+"6") exactly n times.
 * Simple loop - generates exactly n numbers. Queue grows: each iteration adds 2,
 * removes 1, so queue keeps growing.
 *
 * APPROACH: BFS with queue. Start with "5" and "6".
 * For each of n iterations: deque one, print it, add (curr+"5") and (curr+"6").
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
 * 2. For i = 0 to n-1:
 *    - curr = q.deque()
 *    - console.log(curr)
 *    - q.enque(curr+"5"), q.enque(curr+"6")
 *
 * Each iteration: remove 1, add 2 → queue grows by 1
 */
function printFirstN(n) {
  let q = new Queue();
  q.enque("5");
  q.enque("6");
  for (let i = 0; i < n; i++) {
    let curr = q.deque();
    console.log(curr);
    q.enque(curr + "5");
    q.enque(curr + "6");
  }
}

/**
 * STEP-BY-STEP EXECUTION for printFirstN(5)
 *
 * Initial: q = ["5", "6"]
 *
 * i=0: curr = "5", print 5, q = ["6", "55", "56"]
 * i=1: curr = "6", print 6, q = ["55", "56", "65", "66"]
 * i=2: curr = "55", print 55, q = ["56", "65", "66", "555", "556"]
 * i=3: curr = "56", print 56, q = ["65", "66", "555", "556", "565", "566"]
 * i=4: curr = "65", print 65, q = ["66", "555", "556", "565", "566", "655", "656"]
 *
 * Output: 5, 6, 55, 56, 65 (first 5 numbers)
 */

printFirstN(5);
