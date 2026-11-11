/*
 * ========== PROBLEM STATEMENT ==========
 * K-SORTED ARRAY
 * Given an array where each element is at most K positions away from its sorted position,
 * sort the array efficiently.
 *
 * Example: arr = [6, 5, 3, 2, 8, 10, 9], k = 3
 * Sorted:  [2, 3, 5, 6, 8, 9, 10]
 *
 * Approach:
 * 1) Build min-heap with first (k+1) elements.
 * 2) For each next element: extract min → put at current index; insert new element.
 * 3) Empty the heap into remaining positions.
 * Time: O(n log k)
 */

function MinHeap(initialArr) {
  this.arr = []; // Step 1: Heap storage array
  this.size = 0; // Step 2: Number of elements

  this.insert = function (val) {
    this.arr.push(val); // Step 3: Add at end
    this.size++; // Step 4: Increment size
    this.heapifyUp(this.size - 1); // Step 5: Bubble up to restore min-heap
  };

  this.extractMin = function () {
    if (this.size === 0) return undefined; // Step 6: Empty heap check
    let min = this.arr[0]; // Step 7: Store root (min)
    this.arr[0] = this.arr[this.size - 1]; // Step 8: Replace root with last
    this.arr.pop(); // Step 9: Remove last
    this.size--; // Step 10: Decrement size
    if (this.size > 0) this.heapifyDown(0); // Step 11: Bubble down
    return min; // Step 12: Return extracted min
  };

  this.heapifyUp = function (index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2); // Step 13: Get parent index
      if (this.arr[index] < this.arr[parent]) {
        // Step 14: If child < parent
        [this.arr[index], this.arr[parent]] = [
          this.arr[parent],
          this.arr[index],
        ];
        index = parent; // Step 15: Move up to parent
      } else break;
    }
  };

  this.heapifyDown = function (index) {
    while (index < this.size) {
      let left = 2 * index + 1; // Step 16: Left child index
      let right = 2 * index + 2; // Step 17: Right child index
      let smallest = index;
      if (left < this.size && this.arr[left] < this.arr[smallest])
        smallest = left;
      if (right < this.size && this.arr[right] < this.arr[smallest])
        smallest = right;
      if (smallest === index) break; // Step 18: Heap property satisfied
      [this.arr[index], this.arr[smallest]] = [
        this.arr[smallest],
        this.arr[index],
      ];
      index = smallest; // Step 19: Move down to smaller child
    }
  };

  if (Array.isArray(initialArr)) {
    for (let i = 0; i < initialArr.length; i++) {
      this.insert(initialArr[i]); // Step 20: Build heap from first (k+1) elements
    }
  }
}

function kSortedArray(arr, k) {
  let h = new MinHeap(arr.slice(0, k + 1)); // Step 21: Heap = [6,5,3,2] → [2,3,5,6]
  let index = 0;
  for (let i = k + 1; i < arr.length; i++) {
    // Step 22: i=4,5,6 (process 8,10,9)
    arr[index] = h.extractMin(); // Step 23: Put min at arr[0], arr[1], ...
    index++;
    h.insert(arr[i]); // Step 24: Add next element (8, 10, 9) to heap
  }
  while (h.size > 0) {
    arr[index] = h.extractMin(); // Step 25: Empty heap into rest of arr
    index++;
  }
  return arr;
}

// Execution: arr=[6,5,3,2,8,10,9], k=3
// heap init: [6,5,3,2] → min-heap [2,3,5,6]
// i=4: extractMin=2 → arr[0]=2, insert 8 → heap=[3,5,6,8]
// i=5: extractMin=3 → arr[1]=3, insert 10 → heap=[5,6,8,10]
// i=6: extractMin=5 → arr[2]=5, insert 9 → heap=[6,8,9,10]
// empty: extractMin 6,8,9,10 → arr[3..6] = [6,8,9,10] → [2,3,5,6,8,9,10]
let arr = [6, 5, 3, 2, 8, 10, 9];
let k = 3;
console.log(kSortedArray(arr, k)); // [2, 3, 5, 6, 8, 9, 10]
