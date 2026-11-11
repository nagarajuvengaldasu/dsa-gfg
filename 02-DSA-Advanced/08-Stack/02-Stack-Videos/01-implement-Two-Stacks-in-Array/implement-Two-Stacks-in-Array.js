class Twostack {
  constructor(n) {
    this.cap = n;
    this.arr = new Array(n);
    this.top1 = -1;
    this.top2 = n;
  }
  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1 = this.top1 + 1;
      this.arr[this.top1] = x;
      return true;
    }
    return false;
  }
  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2 = this.top2 - 1;
      this.arr[this.top2] = x;
      return true;
    }
    return false;
  }
  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1 = this.top1 - 1;
      return x;
    }
    return null;
  }
  pop2() {
    if (this.top2 < this.cap) {
      let x = this.arr[this.top2];
      this.top2 = this.top2 + 1;
      return x;
    }
    return null;
  }
  size1() {
    return this.top1 + 1;
  }
  size2() {
    return this.cap - this.top2;
  }
}
let st = new Twostack(5);
st.push1(1);
st.push2(2);
st.push1(3);
st.push2(4);
st.push1(5);

// Verify: pop and log
console.log("Stack1 size:", st.size1()); // 3 (1, 3, 5)
console.log("Stack2 size:", st.size2()); // 2 (2, 4)
console.log("Pop1:", st.pop1(), st.pop1(), st.pop1()); // 5, 3, 1
console.log("Pop2:", st.pop2(), st.pop2()); // 4, 2
