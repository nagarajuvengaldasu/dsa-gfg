// problem statement: Given an array of integers, find the median of the stream of numbers.
// The median is the middle value in the sorted list of numbers. If the list has an odd number of elements, the median is the middle element. If the list has an even number of elements, the median is the average of the two middle elements.
// Example:
// Input: [5, 15, 10, 20, 3]
// Output: [5, 10, 10, 15, 10]
// Explanation:
// The median of the stream of numbers is the middle value in the sorted list of numbers.
// The median of the stream of numbers is the middle value in the sorted list of numbers.
class Solution {
  getMedian(arr) {
    // step 1: initialize the result array
    let result = [];
    // step 2: initialize the max heap
    let maxHeap = []; // left (max heap)
    // step 3: initialize the min heap
    let minHeap = []; // right (min heap)

    // step 4: iterate through the array
    for (let num of arr) {
      // step 5: insert the number into the max heap
      // Step 1: Insert into maxHeap
      this.maxHeapPush(maxHeap, num);

      // step 6: move the top of the max heap to the min heap
      this.minHeapPush(minHeap, this.maxHeapPop(maxHeap));

      // step 7: balance the sizes of the max and min heaps
      if (minHeap.length > maxHeap.length) {
        this.maxHeapPush(maxHeap, this.minHeapPop(minHeap));
      }

      // step 8: calculate the median
      if (maxHeap.length === minHeap.length) {
        result.push((maxHeap[0] + minHeap[0]) / 2);
      } else {
        // step 9: if the max heap has more elements than the min heap, push the top of the max heap into the result array
        result.push(maxHeap[0] * 1.0);
      }
    }
    // step 10: return the result array
    return result;
  }
  // step 11: push the value into the max heap

  // ---------- MAX HEAP ----------
  // step 12: push the value into the max heap

  maxHeapPush(heap, val) {
    heap.push(val);
    // step 13: get the index of the last element
    let i = heap.length - 1;
    // step 14: while the index is greater than 0, heapify the heap

    while (i > 0) {
      // step 15: get the index of the parent element
      let parent = Math.floor((i - 1) / 2);
      // step 16: if the parent element is greater than the current element, break
      if (heap[parent] >= heap[i]) break;
      // step 17: swap the parent element and the current element
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      // step 18: update the index to the parent index
      i = parent;
    }
  }

  maxHeapPop(heap) {
    // step 19: get the top element
    let top = heap[0];
    // step 20: get the last element
    let last = heap.pop();

    if (heap.length > 0) {
      // step 21: replace the top element with the last element
      heap[0] = last;
      // step 22: heapify the heap
      this.maxHeapify(heap, 0);
    }

    // step 23: return the top element
    return top;
  }

  maxHeapify(heap, i) {
    // step 24: get the largest element
    let largest = i;
    // step 25: get the left child index
    let left = 2 * i + 1;
    // step 26: get the right child index
    let right = 2 * i + 2;

    // step 27: if the left child is greater than the largest element, update the largest element
    if (left < heap.length && heap[left] > heap[largest]) largest = left;
    // step 28: if the right child is greater than the largest element, update the largest element

    // step 29: if the right child is greater than the largest element, update the largest element
    if (right < heap.length && heap[right] > heap[largest]) largest = right;
    // step 30: if the largest element is not the current element, swap the current element with the largest element
    // step 31: recursively call the max heapify function
    if (largest !== i) {
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      // step 32: recursively call the max heapify function
      this.maxHeapify(heap, largest);
      // step 33: if the largest element is the current element, return
    }
  }

  // ---------- MIN HEAP ----------
  // step 34: push the value into the min heap
  minHeapPush(heap, val) {
    // step 35: push the value into the min heap
    heap.push(val);
    // step 36: get the index of the last element
    let i = heap.length - 1;
    // step 37: while the index is greater than 0, heapify the heap

    while (i > 0) {
      // step 38: get the index of the parent element
      let parent = Math.floor((i - 1) / 2);
      // step 39: if the parent element is less than the current element, break
      if (heap[parent] <= heap[i]) break;
      // step 40: swap the parent element and the current element
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      // step 41: update the index to the parent index
      i = parent;
    }
  }

  minHeapPop(heap) {
    // step 42: get the top element
    let top = heap[0];
    // step 43: get the last element
    let last = heap.pop();

    if (heap.length > 0) {
      // step 44: replace the top element with the last element
      heap[0] = last;
      // step 45: heapify the heap
      this.minHeapify(heap, 0);
    }

    // step 46: return the top element
    return top;
  }

  minHeapify(heap, i) {
    // step 47: get the smallest element
    let smallest = i;
    // step 48: get the left child index
    let left = 2 * i + 1;
    // step 49: get the right child index
    let right = 2 * i + 2;
    // step 50: if the left child is less than the smallest element, update the smallest element

    if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    // step 51: if the right child is less than the smallest element, update the smallest element

    if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
    // step 52: if the smallest element is not the current element, swap the current element with the smallest element
    if (smallest !== i) {
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      // step 53: recursively call the min heapify function
      this.minHeapify(heap, smallest);
      // step 54: if the smallest element is the current element, return
    }
  }
}
// test case:
// Input: [5, 15, 10, 20, 3]
// Output: [5, 10, 10, 15, 10]
// Explanation:
// The median of the stream of numbers is the middle value in the sorted list of numbers.
// The median of the stream of numbers is the middle value in the sorted list of numbers.
let sol = new Solution();
let arr = [5, 15, 10, 20, 3];
console.log(sol.getMedian(arr));
