class Kstacks {
  constructor(n, k) {
    this.cap = n;
    this.k = k;
    this.arr = new Array(n);
    this.top = new Array(k).fill(-1);
    this.next = new Array(n);
    this.freetop = 0;
    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1;
  }
  push(sn, x) {
    if (sn < 0 || sn >= this.k) return false; // invalid stack number
    if (this.freetop === -1) return false; // no free slot
    let i = this.freetop;
    this.freetop = this.next[i];
    this.arr[i] = x;
    this.next[i] = this.top[sn];
    this.top[sn] = i;
    return true;
  }
  pop(sn) {
    if (sn < 0 || sn >= this.k) return null; // invalid stack number
    if (this.top[sn] === -1) return null; // stack empty
    let i = this.top[sn];
    this.top[sn] = this.next[i];
    this.next[i] = this.freetop;
    this.freetop = i;
    return this.arr[i];
  }
  isEmpty(sn) {
    if (sn < 0 || sn >= this.k) return true; // invalid stack → treat as empty
    return this.top[sn] === -1;
  }
}
let ks = new Kstacks(10, 3);
ks.push(0, 1);
ks.push(0, 2);
ks.push(0, 3);
console.log(ks.pop(0));
console.log(ks.isEmpty(0));
console.log(ks.pop(0));
