/*
 * ========== PROBLEM STATEMENT ==========
 * MERGE K SORTED ARRAYS
 * Given K sorted arrays, merge them into one sorted array.
 *
 * Example: arr = [[10, 20], [5, 15], [30]] → [5, 10, 15, 20, 30]
 *
 * Approach (Min-Heap): Heap entry [value, arrayIndex, elementIndex]
 * 1) Insert first element of each array.
 * 2) While heap not empty: extractMin → push to res; insert next from same array if exists.
 * Time: O(N log k), N = total elements, k = number of arrays
 */

function MinHeapForMerge() {
  // Step 1: Creates empty array to store heap elements
  this.arr = [];
  // Step 2: Initializes size to 0
  this.size = 0;

  this.insert = function (item) {
    // Step 3: Adds new item to heap
    this.arr.push(item);
    // Step 4: Increments size
    this.size++;
    // Step 5: Bubbles up to maintain heap property
    this.heapifyUp(this.size - 1); // Step 1: Bubble up by value (item[0])
  };

  this.extractMin = function () {
    // Step 6: If heap is empty, returns undefined
    if (this.size === 0) return undefined;
    // Step 7: Stores minimum value
    let min = this.arr[0];
    // Step 8: Replaces root with last element
    this.arr[0] = this.arr[this.size - 1];
    // Step 9: Removes last element
    this.arr.pop();
    // Step 10: Decrements size
    this.size--;
    // Step 11: Bubbles down to maintain heap property
    if (this.size > 0) this.heapifyDown(0); // Step 2: Bubble down
    return min;
  };

  this.heapifyUp = function (index) {
    // Step 12: Bubbles up to maintain heap property
    while (index > 0) {
      // Step 13: Gets parent index
      let parent = Math.floor((index - 1) / 2);
      if (this.arr[index][0] < this.arr[parent][0]) {
        // Step 3: Compare by value
        // Step 14: Swaps current value with parent
        [this.arr[index], this.arr[parent]] = [
          this.arr[parent],
          this.arr[index],
        ];
        // Step 15: Moves to parent index
        index = parent;
      } else break;
    }
  };

  this.heapifyDown = function (index) {
    // Step 16: Bubbles down to maintain heap property
    while (index < this.size) {
      // Step 17: Gets left and right child indices
      let left = 2 * index + 1,
        right = 2 * index + 2,
        smallest = index;
      // Step 18: If left child is smaller than smallest, updates smallest
      if (left < this.size && this.arr[left][0] < this.arr[smallest][0])
        smallest = left;
      // Step 19: If right child is smaller than smallest, updates smallest
      if (right < this.size && this.arr[right][0] < this.arr[smallest][0])
        smallest = right;
      if (smallest === index) break;
      [this.arr[index], this.arr[smallest]] = [
        this.arr[smallest],
        this.arr[index],
      ];
      // Step 20: Moves to smallest index
      index = smallest;
    }
  };
}

function mergeKSortedEfficient(arr) {
  // Step 21: Creates new min heap
  let h = new MinHeapForMerge();
  // Step 22: Creates empty result array
  let res = [];

  // Step 23: Inserts first element of each array into heap
  for (let i = 0; i < arr.length; i++) {
    // Step 24: If array is not empty, inserts first element into heap
    if (arr[i].length > 0) {
      h.insert([arr[i][0], i, 0]); // Step 4: Insert [value, arrayIdx, elemIdx] for each first elem
    }
  }

  // Step 25: While heap is not empty, extracts smallest element and inserts next from same array
  while (h.size > 0) {
    // Step 26: Extracts smallest element from heap
    let item = h.extractMin(); // Step 5: Get smallest
    let value = item[0],
      ai = item[1],
      ei = item[2];
    // Step 27: Adds value to result array
    res.push(value); // Step 6: Add to result
    // Step 28: If next element exists in same array, inserts next element into heap
    if (ei + 1 < arr[ai].length) {
      // Step 29: Inserts next element from same array into heap
      h.insert([arr[ai][ei + 1], ai, ei + 1]); // Step 7: Insert next from same array
    }
  }
  // Step 30: Returns result array
  return res;
}

// Example from notes: arr = [[30], [1, 40]] → [1, 30, 40]
// Step 31: Merges [[30], [1, 40]] into [1, 30, 40]
console.log(mergeKSortedEfficient([[30], [1, 40]])); // [1, 30, 40]

// Example: [[10, 20], [5, 15], [30]]
// Step 32: Merges [[10, 20], [5, 15], [30]] into [5, 10, 15, 20, 30]
console.log(mergeKSortedEfficient([[10, 20], [5, 15], [30]])); // [5, 10, 15, 20, 30]

// Example: [[2, 3, 6], [1, 5, 10], [4, 11]]
// Step 33: Merges [[2, 3, 6], [1, 5, 10], [4, 11]] into [1, 2, 3, 4, 5, 6, 10, 11]
console.log(
  mergeKSortedEfficient([
    [2, 3, 6],
    [1, 5, 10],
    [4, 11],
  ]),
); // [1, 2, 3, 4, 5, 6, 10, 11]
