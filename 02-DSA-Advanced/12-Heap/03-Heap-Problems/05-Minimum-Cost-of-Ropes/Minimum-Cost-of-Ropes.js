class Solution {
  mincost(arr, n) {
    if (n <= 1) {
      return 0;  // Step 1: 0 or 1 rope → no connection needed
    }
    this.heap = [];  // Step 2: Min-heap to always get two smallest
    for (let i = 0; i < n; i++) {
      this.push(arr[i]);  // Step 3: Build min-heap from all rope lengths
    }
    let totalcost = 0;

    while (this.heap.length > 1) {
      let first = this.pop();   // Step 4: Get smallest rope
      let second = this.pop();  // Step 5: Get 2nd smallest
      let cost = first + second;  // Step 6: Cost to connect
      totalcost += cost;  // Step 7: Add to total
      this.push(cost);  // Step 8: Put combined rope back (to connect again)
    }
    return totalcost;  // Step 9: Return minimum total cost
  }

  push(val) {
    this.heap.push(val);  // Step 10: Add at end
    this.heapifyUp();     // Step 11: Bubble up to restore min-heap
  }
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();  // Step 12: Single element → pop
    }
    let top = this.heap[0];       // Step 13: Store root (min)
    this.heap[0] = this.heap.pop();  // Step 14: Replace root with last
    this.heapifyDown();  // Step 15: Bubble down
    return top;
  }
  heapifyUp() {
    let index = this.heap.length - 1;  // Step 16: Start from last inserted
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;  // Step 17: Heap OK

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];  // Step 18: Swap with parent
      index = parent;
    }
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;   // Step 19: Left child index
      let right = 2 * index + 2;  // Step 20: Right child index
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;  // Step 21: Left is smaller
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;  // Step 22: Right is smaller
      }
      if (smallest === index) break;  // Step 23: Heap property satisfied

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];  // Step 24: Swap with smaller child
      index = smallest;
    }
  }
}

// Execution: arr=[4,3,2,6], n=4
// push(4), push(3), push(2), push(6) → min-heap [2,3,4,6]
// Iter 1: pop()=2, pop()=3, cost=5, totalcost=5, push(5) → heap=[4,5,6]
// Iter 2: pop()=4, pop()=5, cost=9, totalcost=14, push(9) → heap=[6,9]
// Iter 3: pop()=6, pop()=9, cost=15, totalcost=29, push(15) → heap=[15]
// heap.length=1 → return 29
let arr = [4, 3, 2, 6];
let n = arr.length;
let solution = new Solution();
console.log(solution.mincost(arr, n));  // 29
