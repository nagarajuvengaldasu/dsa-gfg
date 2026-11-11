// Time: O(n log k) | Space: O(k)
// problem statement: Given k sorted arrays of size n, merge them into a single sorted array.
// example:
// Input: arr = [[1, 3, 5, 7], [2, 4, 6, 8], [0, 9, 10, 11]]
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// explanation: The merged array is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// approach: Use a min heap to merge the arrays.
// 1. Push the first element of each array into the heap.
// 2. Pop the smallest element from the heap and push the next element of the same array into the heap.
// 3. Repeat the process until all elements are merged.
//
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // step 1: push the node into the heap
  push(node) {
    // step 2: push the node into the heap
    this.heap.push(node);
    // step 3: heapify the heap
    this.heapifyUp();
  }
  // step 1: pop the smallest element from the heap
  // step 2: pop the smallest element from the heap
  // step 3: heapify the heap
  pop() {
    // step 4: if the heap has only one element, return the element
    if (this.heap.length == 1) {
      return this.heap.pop();
    }
    // step 5: store the smallest element
    const top = this.heap[0];
    // step 6: replace the smallest element with the last element
    this.heap[0] = this.heap.pop();
    // step 7: heapify the heap
    this.heapifyDown();
    return top;
  }

    heapifyUp() {
    // step 1: get the index of the last element
    let index = this.heap.length - 1;
    while (index > 0) {
      // step 2: get the index of the parent element
      let parent = Math.floor((index - 1) / 2);
      // step 3: if the parent element is smaller than the current element, break
      if (this.heap[parent][0] <= this.heap[index][0]) break;
      // step 4: swap the parent element and the current element
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      // step 5: update the index of the current element
      index = parent;
    }
  }
  heapifyDown() {
    // step 1: get the index of the current element
    let index = 0;
    // step 2: get the length of the heap
    let length = this.heap.length;
    while (true) {
      // step 3: get the index of the left child element
      let left = 2 * index + 1;
      // step 4: get the index of the right child element
      let right = 2 * index + 2;
      // step 5: get the index of the smallest element
      let smallest = index;
      // step 6: if the left child element is smaller than the smallest element, update the smallest element
      if (left < length && this.heap[left][0] < this.heap[smallest][0])
        smallest = left;
      // step 7: if the right child element is smaller than the smallest element, update the smallest element
      if (right < length && this.heap[right][0] < this.heap[smallest][0])
        smallest = right;
      // step 8: if the smallest element is the current element, break
      if (smallest === index) break;
      // step 9: swap the current element and the smallest element
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      // step 10: update the index of the current element
      index = smallest;
    }
  }
  size() {
    // step 1: return the length of the heap
    return this.heap.length;
  }
}
class Solution {
  // step 1: merge the k sorted arrays
  mergeKSortedArrays(arr) {

    let n = arr.length;
    // step 2: create a result array
    let result = [];
    // step 3: create a min heap
    let minHeap = new MinHeap();
    for (let i = 0; i < n; i++) {
      // step 4: if the current array is not empty, push the first element of the array into the heap
      if (arr[i].length > 0) {
        // step 5: push the first element of the array into the heap
        minHeap.push([arr[i][0], i, 0]);
      }
    }
    // step 6: while the heap is not empty, pop the smallest element from the heap
    while (minHeap.size() > 0) {
      // step 7: pop the smallest element from the heap
      let [value, row, col] = minHeap.pop();
      // step 8: push the smallest element into the result array
      result.push(value);
      // step 9: if the current column is not the last column of the current array, push the next element of the current array into the heap
      if (col < arr[row].length - 1) {
        minHeap.push([arr[row][col + 1], row, col + 1]);
      }
    }
    // step 10: return the result array
    return result;
  }
}

let arr = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [0, 9, 10, 11],
];
let solution = new Solution();
console.log(solution.mergeKSortedArrays(arr));
