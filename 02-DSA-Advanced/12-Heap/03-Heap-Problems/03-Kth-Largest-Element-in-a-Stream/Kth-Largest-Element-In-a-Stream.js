class MinHeap {
  constructor() {
    this.heap = []; // Step 1: Empty heap to store K largest elements
  }
  size() {
    return this.heap.length; // Step 2: Return count of elements
  }
  peek() {
    return this.heap[0]; // Step 3: Root = minimum of K largest = Kth largest
  }
  insert(val) {
    this.heap.push(val); // Step 4: Add at end
    this.heapifyUp(); // Step 5: Bubble up to restore min-heap
  }
  remove() {
    if (this.size() === 1) {
      // Step 6: Single element → pop and return
      return this.heap.pop();
    }
    const top = this.heap[0]; // Step 7: Store root (min)
    this.heap[0] = this.heap.pop(); // Step 8: Replace root with last
    this.heapifyDown(); // Step 9: Bubble down
    return top; // Step 10: Return removed min
  }
  heapifyUp() {
    let index = this.size() - 1; // Step 11: Start from last inserted
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break; // Step 12: Heap OK

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ]; // Step 13: Swap with parent
      index = parent;
    }
  }
  heapifyDown() {
    let index = 0;
    let length = this.size();
    while (true) {
      let left = 2 * index + 1; // Step 14: Left child index
      let right = 2 * index + 2; // Step 15: Right child index
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left; // Step 16: Left is smaller
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right; // Step 17: Right is smaller
      }

      if (smallest === index) break; // Step 18: Heap property satisfied

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ]; // Step 19: Swap with smaller child
      index = smallest;
    }
  }
}

class Solution {
  kthlargest(arr, n, k) {
    let minHeap = new MinHeap(); // Step 20: Min-heap of at most K elements
    let result = [];
    for (let i = 0; i < n; i++) {
      minHeap.insert(arr[i]); // Step 21: Insert current stream element

      if (minHeap.size() > k) {
        minHeap.remove(); // Step 22: Keep only K largest (remove smallest)
      }

      if (minHeap.size() < k) {
        result.push(-1); // Step 23: Fewer than K elements seen → -1
      } else {
        result.push(minHeap.peek()); // Step 24: Kth largest = root of min-heap
      }
    }
    console.log(result.join(" ")); // Step 25: Output result
  }
}

// Execution: arr=[1,2,3,4,5], k=3
// i=0: insert 1 → heap=[1], size 1<3 → result=[-1]
// i=1: insert 2 → heap=[1,2], size 2<3 → result=[-1,-1]
// i=2: insert 3 → heap=[1,2,3], size 3=k → peek=1 (3rd largest) → result=[-1,-1,1]
// i=3: insert 4 → heap=[1,2,3,4], size>k → remove → heap=[2,3,4], peek=2 → result=[-1,-1,1,2]
// i=4: insert 5 → heap=[2,3,4,5], size>k → remove → heap=[3,4,5], peek=3 → result=[-1,-1,1,2,3]
// Output: "-1 -1 1 2 3"
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 3;
let solution = new Solution();
solution.kthlargest(arr, n, k);
