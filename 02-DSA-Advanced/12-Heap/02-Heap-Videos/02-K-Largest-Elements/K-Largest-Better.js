/*
 * ========== PROBLEM STATEMENT ==========
 * K LARGEST ELEMENTS
 * Given an array and integer K, return the K largest elements in any order.
 *
 * Example: arr = [5, 15, 10, 20, 8], K = 2 → [20, 15]
 *
 * Approach (Max Heap):
 * 1) Build a Max Heap of all elements.
 * 2) Extract the maximum element K times.
 * Time: O(n + k log n)
 */

function MaxHeap(initialArr) {
  this.arr = [];   // Step 1: Heap storage
  this.size = 0;

  this.insert = function (val) {
    this.arr.push(val);
    this.size++;
    this.heapifyUp(this.size - 1);  // Step 2: Bubble up (child > parent)
  };

  this.extractMax = function () {
    if (this.size === 0) return undefined;
    let max = this.arr[0];                  // Step 3: Store root (max)
    this.arr[0] = this.arr[this.size - 1];  // Step 4: Replace root with last
    this.arr.pop();
    this.size--;
    if (this.size > 0) this.heapifyDown(0);  // Step 5: Bubble down
    return max;
  };

  this.heapifyUp = function (index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.arr[index] > this.arr[parent]) {  // Step 6: Max-heap: child > parent
        [this.arr[index], this.arr[parent]] = [this.arr[parent], this.arr[index]];
        index = parent;
      } else break;
    }
  };

  this.heapifyDown = function (index) {
    while (index < this.size) {
      let left = 2 * index + 1, right = 2 * index + 2, largest = index;
      if (left < this.size && this.arr[left] > this.arr[largest]) largest = left;
      if (right < this.size && this.arr[right] > this.arr[largest]) largest = right;
      if (largest === index) break;
      [this.arr[index], this.arr[largest]] = [this.arr[largest], this.arr[index]];
      index = largest;  // Step 7: Move down to larger child
    }
  };

  if (Array.isArray(initialArr) && initialArr.length > 0) {
    this.arr = [...initialArr];
    this.size = this.arr.length;
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);  // Step 8: Build max-heap from array (heapify all non-leaves)
    }
  }
}

function kLargestBetter(arr, k) {
  let h = new MaxHeap(arr);  // Step 9: Build max-heap of all elements
  let result = [];
  for (let i = 0; i < k && h.size > 0; i++) {
    result.push(h.extractMax());  // Step 10: Extract max K times
  }
  return result;
}

// Examples
let arr1 = [5, 15, 10, 20, 8];
let k1 = 2;
console.log(kLargestBetter(arr1, k1));  // [20, 15]

let arr2 = [8, 6, 4, 10, 9];
let k2 = 3;
console.log(kLargestBetter(arr2, k2));  // [10, 9, 8]

let arr3 = [30, 40, 20];
let k3 = 1;
console.log(kLargestBetter(arr3, k3));  // [40]
