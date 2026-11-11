/**
 * Design a Stack that supports getMin() in O(1)
 * Approach: Two stacks (Main stack + Auxiliary stack for minimums)
 * Demo: Positive values only
 */

class MinStackPositive {
  constructor() {
    this.ms = []; // main stack
    this.as = []; // auxiliary stack (tracks minimums)
  }

  push(x) {
    this.ms.push(x);
    if (this.as.length === 0 || x <= this.as[this.as.length - 1]) {
      this.as.push(x);
    }
  }

  pop() {
    if (this.ms.length === 0) return null;
    const top = this.ms.pop();
    if (top === this.as[this.as.length - 1]) {
      this.as.pop();
    }
    return top;
  }

  peek() {
    if (this.ms.length === 0) return null;
    return this.ms[this.ms.length - 1];
  }

  getMin() {
    if (this.as.length === 0) return null;
    return this.as[this.as.length - 1];
  }

  isEmpty() {
    return this.ms.length === 0;
  }
}

// Demo with positive values
let st = new MinStackPositive();
st.push(5);
st.push(10);
st.push(20);
st.push(2);
st.push(6);
st.push(4);
console.log("getMin():", st.getMin()); // 2
console.log("pop():", st.pop()); // 4
console.log("pop():", st.pop()); // 6
console.log("getMin():", st.getMin()); // 2
st.push(2);
console.log("pop():", st.pop()); // 2
st.push(1);
console.log("getMin():", st.getMin()); // 1
console.log("pop():", st.pop()); // 1
console.log("pop():", st.pop()); // 2
console.log("getMin():", st.getMin()); // 5
