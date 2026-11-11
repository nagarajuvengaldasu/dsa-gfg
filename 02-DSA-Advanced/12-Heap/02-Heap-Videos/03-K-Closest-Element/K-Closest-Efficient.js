/*
 * ========== PROBLEM STATEMENT ==========
 * K CLOSEST ELEMENTS
 * Given array arr, target X, and K: find K elements in arr closest to X.
 *
 * Example: arr = [10, 30, 31, 38, 80], x = 35, K = 3 → [30, 31, 38]
 *
 * Approach (Max Heap of K pairs [diff, index]):
 * 1) Build max-heap of first K pairs [|arr[i]-x|, i].
 * 2) For remaining: if |arr[i]-x| < heap root (max diff), replace root with [diff, i].
 * 3) Return arr at indices stored in heap.
 * Time: O(k + (n-k) log k)
 */

function MaxHeapByDiff(initialArr) {
  this.arr = []; // Step 1: Each element is [diff, index]; compare by diff
  this.size = 0;
  // Step 2: Insert function to add new pair to heap

  this.insert = function (pair) {
    this.arr.push(pair);
    // Step 3: Increments size
    this.size++;
    // Step 4: Bubbles up to maintain heap property
    this.heapifyUp(this.size - 1); // Step 2: Bubble up (max diff at root)
  };

  // Step 5: Get max function to return max value from heap
  this.getMax = function () {
    // Step 6: If heap is empty, returns undefined
    return this.size > 0 ? this.arr[0] : undefined;
  };

  this.extractMax = function () {
    // Step 7: If heap is empty, returns undefined
    if (this.size === 0) return undefined;
    // Step 8: Stores maximum value
    let max = this.arr[0];
    // Step 9: Replaces root with last element
    this.arr[0] = this.arr[this.size - 1];
    // Step 10: Removes last element
    this.arr.pop();
    // Step 11: Decrements size
    this.size--;
    // Step 12: Bubbles down to maintain heap property
    if (this.size > 0) this.heapifyDown(0); // Step 3: Bubble down
    return max;
  };

  this.heapifyUp = function (index) {
    // Step 13: Bubbles up to maintain heap property
    while (index > 0) {
      // Step 14: Gets parent index
      let parent = Math.floor((index - 1) / 2);
      if (this.arr[index][0] > this.arr[parent][0]) {
        // Step 4: Compare diff
        // Step 15: Swaps current value with parent
        [this.arr[index], this.arr[parent]] = [
          this.arr[parent],
          this.arr[index],
        ];
        // Step 16: Moves to parent index
        index = parent;
      } else break;
    }
  };

  this.heapifyDown = function (index) {
    // Step 17: Bubbles down to maintain heap property
    while (index < this.size) {
      // Step 18: Gets left and right child indices
      let left = 2 * index + 1,
        right = 2 * index + 2,
        largest = index;
      // Step 19: If left child is greater than largest, updates largest
      if (left < this.size && this.arr[left][0] > this.arr[largest][0])
        largest = left;
      // Step 20: If right child is greater than largest, updates largest
      if (right < this.size && this.arr[right][0] > this.arr[largest][0])
        largest = right;
      if (largest === index) break;
      // Step 21: Swaps current value with largest
      [this.arr[index], this.arr[largest]] = [
        this.arr[largest],
        this.arr[index],
      ];
      // Step 22: Moves to largest index
      index = largest;
    }
  };

  // Step 23: If initial array is not empty, inserts all elements into heap
  if (Array.isArray(initialArr) && initialArr.length > 0) {
    for (let i = 0; i < initialArr.length; i++) this.insert(initialArr[i]);
  }
}

function kClosestEfficient(arr, x, k) {
  if (k <= 0 || arr.length === 0) return [];
  if (k >= arr.length) return [...arr];

  // Step 24: Creates new max heap
  let h = new MaxHeapByDiff();
  // Step 25: Inserts first K [diff, index] into heap
  for (let i = 0; i < k; i++) {
    h.insert([Math.abs(arr[i] - x), i]); // Step 5: Heap = first K [diff, index]
  }

  // Step 26: For remaining elements, if closer than farthest in K-closest, replace farthest
  for (let i = k; i < arr.length; i++) {
    // Step 27: Calculates diff for arr[i]
    let diff = Math.abs(arr[i] - x); // Step 6: diff for arr[i]
    if (diff < h.arr[0][0]) {
      // Step 7: If closer than farthest in K-closest
      // Step 28: Removes max diff (farthest)
      h.extractMax(); // Step 8: Remove max diff (farthest)
      // Step 29: Adds this element
      h.insert([diff, i]); // Step 9: Add this element
    }
  }

  // Step 30: Creates empty result array
  let result = [];
  // Step 31: Maps heap indices back to values
  for (let i = 0; i < k; i++) {
    result.push(arr[h.arr[i][1]]); // Step 10: Map heap indices back to values
  }
  return result;
}

// Execution: arr=[10,30,31,38,80], x=35, k=3
// Step 32: Creates new max heap
// heap init: [[25,0],[5,1],[4,2]] → max-heap by diff
// Step 33: Inserts first 3 [diff, index] into heap
// i=3: diff=3 < 25 → replace [25,0] with [3,3]
// Step 34: For remaining elements, if closer than farthest in K-closest, replace farthest
// i=4: diff=45 > root → ignore
// Step 35: Returns result array
let arr = [10, 30, 31, 38, 80];
let x = 35;
let k = 3;
console.log(kClosestEfficient(arr, x, k)); // [30, 31, 38] (order may vary)

// Same as naive example
console.log(kClosestEfficient([10, 30, 40, 38, 80], 35, 3)); // [38, 30, 40] or similar
// i=4: diff=45 > root → ignore
// heap has [3,3],[5,1],[4,2] → result = [38,30,31]
