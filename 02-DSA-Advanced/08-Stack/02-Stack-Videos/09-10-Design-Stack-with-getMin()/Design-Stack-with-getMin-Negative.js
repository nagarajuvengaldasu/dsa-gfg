/**
 * Design a Stack that supports getMin() in O(1)
 * Approach: Single stack with encoded value (2*x - min)
 * Works for negative values as well.
 * Demo: Negative and mixed values
 */

class MinStackNegative {
  constructor() {
    this.st = [];
    this.min;
  }

  getMin() {
    if (this.st.length === 0) return undefined;
    return this.min;
  }

  push(x) {
    if (this.st.length === 0) {
      this.min = x;
      this.st.push(x);
    } else if (x <= this.min) {
      this.st.push(2 * x - this.min);
      this.min = x;
    } else {
      this.st.push(x);
    }
  }

  pop() {
    if (this.st.length === 0) return null;
    let t = this.st.pop();
    if (t <= this.min) {
      let res = this.min;
      this.min = 2 * this.min - t;
      return res;
    }
    return t;
  }

  peek() {
    if (this.st.length === 0) return null;
    let t = this.st[this.st.length - 1];
    return t <= this.min ? this.min : t;
  }

  isEmpty() {
    return this.st.length === 0;
  }
}

// Demo with negative values
let st = new MinStackNegative();
st.push(-5);
st.push(-10);
st.push(-2);
st.push(-20);
console.log("getMin():", st.getMin()); // -20
console.log("pop():", st.pop()); // -20
console.log("getMin():", st.getMin()); // -10
console.log("peek():", st.peek()); // -2

// Demo with mixed positive and negative
console.log("\n--- Mixed values ---");
let st2 = new MinStackNegative();
st2.push(5);
st2.push(-3);
st2.push(10);
st2.push(-8);
console.log("getMin():", st2.getMin()); // -8
console.log("pop():", st2.pop()); // -8
console.log("getMin():", st2.getMin()); // -3
