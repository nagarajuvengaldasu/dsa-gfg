/*
 * ========== PROBLEM STATEMENT ==========
 * MEDIAN OF A STREAM
 * Numbers arrive one by one. After each insert, report the current median.
 *
 * Example: stream 5, 15, 1, 3 → medians: 5, 10, 5, 4
 *
 * Approach (Two heaps - Optimal):
 * - maxHeap: lower half (root = max of lower)
 * - minHeap: upper half (root = min of upper)
 * Invariant: maxHeap.size >= minHeap.size, diff <= 1
 * insert: O(log n), getMedian: O(1)
 */

function MaxHeap() {
  // Step 1: Creates empty array to store heap elements
  this.arr = [];
  // Step 2: Initialize size to 0
  this.size = 0;
  // Step 3: Insert function to add new value to heap
  this.insert = function (val) {
    // Step 4: Add new value to heap
    this.arr.push(val);
    // Step 5: Increment size
    this.size++;
    // Step 6: Bubble up to maintain heap property
    this.heapifyUp(this.size - 1);  
  };

  // Step 7: Get max function to return max value from heap
  this.getMax = function () { return this.size > 0 ? this.arr[0] : undefined; };
 
  // Step 8: Extract max function to remove max value from heap
  this.extractMax = function () {
    // Step 9: If heap is empty, return undefined
    if (this.size === 0) return undefined;
    // Step 10: Store max value
    let max = this.arr[0];
    // Step 11: Replace root with last element
    this.arr[0] = this.arr[this.size - 1];
    // Step 12: Remove last element
    this.arr.pop();
    // Step 13: Decrement size
    this.size--;
    // Step 14: Bubble down to maintain heap property
    if (this.size > 0) this.heapifyDown(0);
    // Step 15: Return max value
    return max;
  };
  this.heapifyUp = function (i) {
    // Step 16: Bubble up to maintain heap property
    while (i > 0) {
      // Step 17: Get parent index
      let p = Math.floor((i - 1) / 2);
      // Step 18: If current value is greater than parent, swap
      if (this.arr[i] > this.arr[p]) {
        [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
        // Step 19: Move to parent index
        i = p;
      } else break;
    }
  };
  this.heapifyDown = function (i) {
    // Step 20: Bubble down to maintain heap property
    while (i < this.size) {
      let l = 2 * i + 1, r = 2 * i + 2, largest = i;
      // Step 21: If left child is greater than largest, update largest
      if (l < this.size && this.arr[l] > this.arr[largest]) largest = l;
      // Step 22: If right child is greater than largest, update largest
      if (r < this.size && this.arr[r] > this.arr[largest]) largest = r;
      if (largest === i) break;
      // Step 23: Swap current value with largest
      [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];
      // Step 24: Move to largest index
      i = largest;
    }
  };
}

function MinHeap() {
  // Step 25: Creates empty array to store heap elements
  this.arr = [];
  // Step 26: Initialize size to 0
  this.size = 0;
  // Step 27: Insert function to add new value to heap
  this.insert = function (val) {
    // Step 28: Add new value to heap
    this.arr.push(val);
    // Step 29: Increment size
    this.size++;
    // Step 30: Bubble up to maintain heap property
    this.heapifyUp(this.size - 1);
  };
  // Step 31: Get min function to return min value from heap
  this.getMin = function () { return this.size > 0 ? this.arr[0] : undefined; };
  // Step 32: Extract min function to remove min value from heap
  this.extractMin = function () {
    // Step 33: If heap is empty, return undefined
    if (this.size === 0) return undefined;
    // Step 34: Store min value
    let min = this.arr[0];
    // Step 35: Replace root with last element
    this.arr[0] = this.arr[this.size - 1];
    // Step 36: Remove last element
    this.arr.pop();
    // Step 37: Decrement size
    this.size--;
    // Step 38: Bubble down to maintain heap property
    if (this.size > 0) this.heapifyDown(0);
    // Step 39: Return min value
    return min;
  };
  // Step 40: Bubble up to maintain heap property
  this.heapifyUp = function (i) {
    // Step 41: Bubble up to maintain heap property
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      // Step 42: If current value is less than parent, swap
      if (this.arr[i] < this.arr[p]) {
        [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
        // Step 43: Move to parent index
        i = p;
      } else break;
    }
  };
  // Step 44: Bubble down to maintain heap property
  this.heapifyDown = function (i) {
    // Step 45: Bubble down to maintain heap property
    while (i < this.size) {
      let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
      // Step 46: If left child is less than smallest, update smallest
      if (l < this.size && this.arr[l] < this.arr[smallest]) smallest = l;
      // Step 47: If right child is less than smallest, update smallest
      if (r < this.size && this.arr[r] < this.arr[smallest]) smallest = r;
      if (smallest === i) break;
      // Step 48: Swap current value with smallest
      [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
      // Step 49: Move to smallest index
      i = smallest;
    }
  };
}

function MedianStreamOptimal() {
  // Step 50: Creates max heap for lower half
  this.maxHeap = new MaxHeap();  // Step 2: Lower half
  // Step 51: Creates min heap for upper half
  this.minHeap = new MinHeap();  // Step 3: Upper half

  // Step 52: Insert function to add new value to stream
  this.insert = function (x) {
    // Step 53: Add to maxHeap
    this.maxHeap.insert(x);  // Step 4: Add to maxHeap
    // Step 54: Pass max of lower to minHeap
    this.minHeap.insert(this.maxHeap.extractMax());  // Step 5: Pass max of lower to minHeap
    // Step 55: Balance: maxHeap should be >= minHeap
    if (this.maxHeap.size < this.minHeap.size) {  // Step 6: Balance: maxHeap should be >= minHeap
      // Step 56: Move min of upper to maxHeap
      this.maxHeap.insert(this.minHeap.extractMin());  // Step 7: Move min of upper to maxHeap
    }
  };

  // Step 57: Get median function to return median of stream
  this.getMedian = function () {
    // Step 58: If maxHeap is empty, return null
    if (this.maxHeap.size === 0) return null;
    // Step 59: If maxHeap size is greater than minHeap size, return max of lower
    if (this.maxHeap.size > this.minHeap.size) {
      // Step 60: Odd count → max of lower
      return this.maxHeap.getMax();  // Step 8: Odd count → max of lower
    }
    // Step 61
    return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;  // Step 9: Even → avg of two middles
  };
}

// Execution: stream 5, 15, 1, 3
// insert(5):  maxHeap=[5], minHeap=[] → pass 5 to minHeap → maxHeap=[], minHeap=[5] → balance: maxHeap=[5], minHeap=[]
// insert(15): maxHeap=[15,5], minHeap=[] → pass 15 to minHeap → maxHeap=[5], minHeap=[15] → balanced
// insert(1):  maxHeap=[5,1], minHeap=[15] → pass 5 → maxHeap=[1], minHeap=[5,15] → balance: maxHeap=[5,1], minHeap=[15]
// insert(3):  maxHeap=[5,1,3], minHeap=[15] → pass 5 → maxHeap=[3,1], minHeap=[5,15] → balanced
let stream = new MedianStreamOptimal();
stream.insert(5);
console.log(stream.getMedian());  // 5
stream.insert(15);
console.log(stream.getMedian());  // 10
stream.insert(1);
console.log(stream.getMedian());  // 5
stream.insert(3);
console.log(stream.getMedian());  // 4
