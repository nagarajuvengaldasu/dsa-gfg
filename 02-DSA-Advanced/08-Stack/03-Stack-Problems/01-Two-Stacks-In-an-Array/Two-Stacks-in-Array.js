/*
 * Two Stacks in One Array: Stack1 grows left→right, Stack2 grows right→left.
 * STEP-BY-STEP: top1 at left end, top2 at right. Push when top1+1 < top2.
 */
class TwoStacks {
  constructor() {
    this.size = 100;
    this.arr = new Array(this.size);
    this.top1 = -1;
    this.top2 = this.size;
  }

  // Function to push an integer into the stack1.
  push1(x) {
    if (this.top1 + 1 < this.top2) {
      this.top1++;
      this.arr[this.top1] = x;
      // EXECUTION: push1(2): top1=0, arr[0]=2. push1(3): top1=1, arr[1]=3.
    }
  }
  push2(x) {
    if (this.top1 + 1 < this.top2) {
      this.top2--;
      this.arr[this.top2] = x;
      // EXECUTION: push2(4): top2=99, arr[99]=4.
    }
  }
  pop1() {
    if (this.top1 === -1) return -1;
    return this.arr[this.top1--];
    // EXECUTION: pop1: returns arr[1]=3, top1=0.
  }
  pop2() {
    if (this.top2 === this.size) {
      return -1;
    }
    return this.arr[this.top2++];
  }
}

// Example 1: push1(2), push1(3), push2(4), pop1(), pop2(), pop2() → [3, 4, -1]
let ts = new TwoStacks();
ts.push1(2);
ts.push1(3);
ts.push2(4);
console.log(ts.pop1()); // 3
console.log(ts.pop2()); // 4
console.log(ts.pop2()); // -1

