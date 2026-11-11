/**
 * Implement Stack using Queue(s)
 *
 * PROBLEM STATEMENT:
 * Implement a Stack (LIFO) using only Queue(s) (FIFO).
 * Stack operations: push, pop, peek, size, isEmpty
 *
 * WHY: Demonstrates how one data structure can simulate another.
 * Stack needs LIFO; Queue gives FIFO - we reverse order using 2 queues.
 *
 * APPROACH: Use 2 queues (q1, q2). On push(x):
 * 1. Add x to q2
 * 2. Move all elements from q1 to q2 (so x becomes "first" in q2)
 * 3. Swap q1 and q2 (q1 now has stack order: newest at front)
 * Pop/peek simply use front of q1.
 */

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  /**
   * push(x) - Add x to top of stack
   *
   * EXECUTION:
   * 1. enque(x) into q2
   * 2. Move all from q1 to q2 (q2 now has: [old..., new x])
   * 3. Swap q1, q2 so q1 = q2, q2 = q1 (q1 has stack order: newest at front)
   *
   * Step-by-step for push(1), push(2), push(3):
   *   push(1): q2=[1], q1 empty, swap → q1=[1], q2=[]
   *   push(2): q2=[2], move q1→q2: q2=[1,2], swap → q1=[1,2], q2=[]
   *   push(3): q2=[3], move q1→q2: q2=[1,2,3], swap → q1=[1,2,3], q2=[]
   *   Stack top = front of q1 = 3 ✓
   */
  push(x) {
    this.q2.enque(x);
    while (!this.q1.isEmpty()) {
      this.q2.enque(this.q1.deque());
    }
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  /**
   * pop() - Remove and return top element
   *
   * EXECUTION:
   * - If q1 empty, return null
   * - Else return q1.deque() (front = top of stack)
   */
  pop() {
    if (this.q1.isEmpty()) {
      return null;
    }
    return this.q1.deque();
  }

  peek() {
    if (this.q1.isEmpty()) {
      return null;
    }
    return this.q1.getFront();
  }
  size() {
    return this.q1.size();
  }
  isEmpty() {
    return this.q1.isEmpty();
  }
  printStack() {
    return this.q1.items.slice();
  }
}

class Queue {
  constructor() {
    this.items = [];
  }
  enque(x) {
    this.items.push(x);
  }
  deque() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  getFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

/**
 * STEP-BY-STEP EXECUTION
 *
 * STEP 1: let s = new Stack();
 *   q1 = [], q2 = []
 *
 * STEP 2: s.push(1);
 *   q2.enque(1) → q2 = [1]
 *   q1.isEmpty() → true, loop skipped
 *   swap → q1 = [1], q2 = []
 *   Stack: [1] (top=1)
 *
 * STEP 3: s.push(2);
 *   q2.enque(2) → q2 = [2]
 *   q1 not empty: q2.enque(q1.deque()) → q2 = [2, 1]
 *   swap → q1 = [1, 2], q2 = []
 *   Stack: [1, 2] (top=2)
 *
 * STEP 4: s.push(3);
 *   q2.enque(3) → q2 = [3]
 *   Move q1 to q2: q2 = [3, 1, 2]
 *   swap → q1 = [1, 2, 3], q2 = []
 *   Stack: [1, 2, 3] (top=3)
 *
 * STEP 5: s.pop();
 *   q1.deque() → returns 3, q1 = [1, 2]
 *   Output: 3
 *
 * STEP 6: s.printStack();
 *   q1.items.slice() → [1, 2]
 *   Output: [1, 2]
 */

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop());
console.log(s.printStack());
