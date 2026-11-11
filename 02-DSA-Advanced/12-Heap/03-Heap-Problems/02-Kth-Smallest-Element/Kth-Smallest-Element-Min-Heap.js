class MinHeap {
  constructor() {
    this.heap = [];  // Step 1: Empty heap storage
  }

  size() {
    return this.heap.length;  // Step 2: Return number of elements
  }

  peek() {
    return this.heap[0];  // Step 3: Return root (minimum) without removing
  }

  insert(value) {
    this.heap.push(value);  // Step 4: Add at end
    this.heapifyUp();       // Step 5: Bubble up to restore min-heap
  }

  remove() {
    if (this.size() === 1) return this.heap.pop();  // Step 6: Single element → pop

    const top = this.heap[0];       // Step 7: Store root (min)
    this.heap[0] = this.heap.pop(); // Step 8: Replace root with last
    this.heapifyDown();             // Step 9: Bubble down
    return top;                     // Step 10: Return removed min
  }

  heapifyUp() {
    let index = this.size() - 1;  // Step 11: Start from last inserted

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);  // Step 12: Parent index

      if (this.heap[parent] <= this.heap[index]) break;  // Step 13: Heap OK, stop

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];  // Step 14: Swap with parent

      index = parent;  // Step 15: Move up
    }
  }

  heapifyDown() {
    let index = 0;
    let length = this.size();

    while (true) {
      let left = 2 * index + 1;   // Step 16: Left child index
      let right = 2 * index + 2;  // Step 17: Right child index
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest])
        smallest = left;  // Step 18: Left is smaller

      if (right < length && this.heap[right] < this.heap[smallest])
        smallest = right;  // Step 19: Right is smaller

      if (smallest === index) break;  // Step 20: Heap property satisfied

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];  // Step 21: Swap with smaller child

      index = smallest;  // Step 22: Move down
    }
  }
}

class Solution {
  kthSmallest(arr, k) {
    const minHeap = new MinHeap();  // Step 23: Create empty min-heap

    for (let num of arr) {
      minHeap.insert(num);  // Step 24: Insert all → heap = [2,3,4,5,9] (min at root)
    }

    for (let i = 1; i < k; i++) {
      minHeap.remove();  // Step 25: Remove (k-1) smallest → remove 2, then 3
    }

    return minHeap.peek();  // Step 26: Root = kth smallest = 4
  }
}

// Execution: arr=[3,5,4,2,9], k=3
// insert all: heap builds to [2,3,4,5,9] (root=2)
// remove(): 2 removed → heap=[3,5,4,9], root=3
// remove(): 3 removed → heap=[4,5,9], root=4
// peek() → 4 (3rd smallest)
let arr = [3, 5, 4, 2, 9];
let k = 3;
console.log(new Solution().kthSmallest(arr, k));  // 4
