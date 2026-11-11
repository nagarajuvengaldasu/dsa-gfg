class Solution {
  nearlysorted(arr, k) {
    // step 1: find the length
    let n = arr.length;
    // step 2: create a min heap
    this.heap = [];
    // step 3: push the first k elements into the heap
    for (let i = 0; i <= Math.min(k, n - 1); i++) {
      this.push(arr[i]);
    }
    // step 4: push the next elements into the heap
    let index = 0;
    // step 5: pop the elements from the heap and push the next elements into the heap
    for (let i = k + 1; i < n; i++) {
      // step 6: pop the elements from the heap and push the next elements into the heap
      arr[index++] = this.pop();
      // step 7: push the next elements into the heap
      this.push(arr[i]);
    }
    // step 8: pop the elements from the heap and push the next elements into the heap
    while (this.heap.length > 0) {
      // step 9: pop the elements from the heap and push the next elements into the heap
      arr[index++] = this.pop();
    }
  }
  // min heap;

  push(val) {
    // step 10: push the elements into the heap
    this.heap.push(val);
    this.heapifyUp();
  }
  pop() {
    // step 11: pop the elements from the heap
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    // step 12: pop the elements from the heap
    let top = this.heap[0];
    // step 13: pop the elements from the heap
    this.heap[0] = this.heap.pop();
    // step 14: heapify the heap
    this.heapifyDown();
    return top;
  }
  heapifyUp() {
    // step 15: heapify the heap
    let index = this.heap.length - 1;
    // step 16: heapify the heap
    while (index > 0) {
      // step 17: find the parent
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) {
        // step 18: swap the elements
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      }
      // step 19: if the parent is greater than the index, break
    }
  }
  heapifyDown() {
    // step 20: heapify the heap
    let index = 0;
    let length = this.heap.length;
    while (true) {
      // step 21: find the left child
      let left = 2 * index + 1;
      // step 22: find the right child
      let right = 2 * index + 2;
      // step 23: find the smallest element
      let smallest = index;
      // step 24: if the left child is smaller than the smallest element, update the smallest element
      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      // step 25: if the right child is smaller than the smallest element, update the smallest element
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      // step 26: if the smallest element is the index, break
      if (smallest === index) {
        break;
      }
      // step 27: swap the elements
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      // step 28: update the index
      index = smallest;
    }
  }
}
// execution: arr = [6, 5, 3, 2, 8, 10, 9], k = 3
// step 1: find the length: n = 7
// step 2: create a min heap: this.heap = []
// step 3: push the first k elements into the heap: this.push(6), this.push(5), this.push(3)
// step 4: push the next elements into the heap: this.push(2), this.push(8), this.push(10), this.push(9)
// step 5: pop the elements from the heap and push the next elements into the heap: this.pop(), this.push(2)
// step 6: pop the elements from the heap and push the next elements into the heap: this.pop(), this.push(8)
// step 7: pop the elements from the heap and push the next elements into the heap: this.pop(), this.push(10)
// step 8: pop the elements from the heap and push the next elements into the heap: this.pop(), this.push(9)
// step 9: pop the elements from the heap and push the next elements into the heap: this.pop()
// step 10: return the array: arr = [2, 3, 5, 6, 8, 9, 10]
let arr = [2, 3, 1, 4];
let k = 2;
let solution = new Solution();
solution.nearlysorted(arr, k);
console.log(arr);
