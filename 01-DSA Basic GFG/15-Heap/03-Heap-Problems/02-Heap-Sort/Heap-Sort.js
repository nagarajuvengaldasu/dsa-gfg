class HeapSort {
  /**
   * Function to sort an array using Heap Sort
   * Heap Sort is an in-place sorting algorithm with O(n log n) time complexity
   * @param {number[]} arr - The array to be sorted
   */
  heapSort(arr) {
    const n = arr.length;

    // Step 1: Build a max heap from the array
    // Start from the last non-leaf node and heapify all nodes bottom-up
    // Last non-leaf node is at index (n/2 - 1)
    // We build heap from bottom to top to ensure heap property is maintained
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    // After building max heap, the largest element is at root (index 0)
    // We'll move it to the end and reduce heap size
    for (let i = n - 1; i > 0; i--) {
      // Step 2a: Move current root (maximum) to end
      // Swap root with last element
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // Step 2b: Call heapify on the reduced heap
      // Now heap size is reduced by 1, and we need to restore heap property
      // We heapify from root (index 0) with new heap size (i)
      this.heapify(arr, i, 0);
    }
    // After this loop, array is sorted in ascending order
  }

  /**
   * Heapify function to maintain max-heap property
   * This function assumes that the subtrees are already heaps,
   * but the root might violate the heap property
   * @param {number[]} arr - The array representing the heap
   * @param {number} n - Size of the heap
   * @param {number} i - Index of the root node to heapify
   */
  heapify(arr, n, i) {
    // Step 1: Initialize largest as root
    let largest = i;

    // Step 2: Calculate indices of left and right children
    let left = 2 * i + 1; // Left child index
    let right = 2 * i + 2; // Right child index

    // Step 3: Compare root with left child
    // If left child exists and is greater than root, update largest
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // Step 4: Compare largest so far with right child
    // If right child exists and is greater than largest, update largest
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // Step 5: If largest is not root, swap and recursively heapify
    if (largest !== i) {
      // Swap root with the largest child
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Recursively heapify the affected subtree
      // The subtree where we swapped now needs to be heapified
      this.heapify(arr, n, largest);
    }
    // If largest === i, then heap property is already satisfied
  }
}
let arr = [10, 5, 20, 2, 4, 8];
let sol = new HeapSort();
sol.heapSort(arr);
console.log(arr);
