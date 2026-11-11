class MinHeap {
  constructor(cap) {
    // Step 1: Initialize heap with capacity
    this.heap_size = 0; // Current number of elements in heap
    this.capacity = cap; // Maximum capacity of heap
    this.harr = new Array(cap); // Array to store heap elements
  }

  // Helper function: Get parent index of node at index i
  parent(i) {
    // Formula: parent(i) = (i-1)/2 (integer division)
    return Math.floor((i - 1) / 2);
  }

  // Helper function: Get left child index of node at index i
  left(i) {
    // Formula: left(i) = 2*i + 1
    return 2 * i + 1;
  }

  // Helper function: Get right child index of node at index i
  right(i) {
    // Formula: right(i) = 2*i + 2
    return 2 * i + 2;
  }

  // You need to write code for below three functions
  /**
   * Extract and return the minimum element from the heap
   * @return {number} Minimum element or -1 if heap is empty
   */
  extractMin() {
    // Step 1: Check if heap is empty
    // If no elements exist, return -1 as per problem requirements
    if (this.heap_size === 0) {
      return -1;
    }

    // Step 2: Handle case when only one element exists
    // Simply return that element and decrement heap_size
    if (this.heap_size === 1) {
      this.heap_size--;
      return this.harr[0];
    }

    // Step 3: Store the minimum element (always at root, index 0)
    let min = this.harr[0];

    // Step 4: Replace root with the last element in the heap
    // This maintains the complete binary tree property
    this.harr[0] = this.harr[this.heap_size - 1];

    // Step 5: Decrease heap size (effectively removing last element)
    this.heap_size--;

    // Step 6: Restore min-heap property by heapifying from root
    // This will bubble down the new root to its correct position
    this.MinHeapify(0);

    // Step 7: Return the minimum element that was extracted
    return min;
  }

  /**
   * Insert a new key into the min-heap
   * @param {number} k - The value to insert
   */
  insertKey(k) {
    // Step 1: Check if heap is at full capacity
    // If full, cannot insert more elements
    if (this.heap_size === this.capacity) {
      return;
    }

    // Step 2: Increment heap size to accommodate new element
    this.heap_size++;

    // Step 3: Insert new element at the last position
    // This maintains the complete binary tree property (left-aligned)
    let i = this.heap_size - 1;
    this.harr[i] = k;

    // Step 4: Bubble up (heapify up) to maintain min-heap property
    // Continue swapping with parent until:
    //   - We reach root (i === 0), OR
    //   - Parent is smaller than current node (heap property satisfied)
    while (i !== 0 && this.harr[this.parent(i)] > this.harr[i]) {
      // Swap current node with its parent
      let temp = this.harr[i];
      this.harr[i] = this.harr[this.parent(i)];
      this.harr[this.parent(i)] = temp;

      // Move up to parent position for next iteration
      i = this.parent(i);
    }
    // After this loop, the new element is at its correct position
  }

  /**
   * Delete the element at index i from the heap
   * @param {number} i - Index of the element to delete
   */
  deleteKey(i) {
    // Step 1: Validate the index
    // Check if index is out of bounds (negative or beyond heap size)
    if (i < 0 || i >= this.heap_size) {
      return;
    }

    // Step 2: Check if heap is empty (redundant check, but safe)
    if (this.heap_size === 0) {
      return;
    }

    // Step 3: Strategy to delete element at arbitrary position
    // We cannot directly delete from middle of heap, so we:
    //   a) Decrease the key to negative infinity (smallest possible value)
    //   b) This will bubble it up to become the root (minimum element)
    //   c) Then extract it using extractMin()
    this.decreaseKey(i, Number.MIN_SAFE_INTEGER);

    // Step 4: Extract the minimum (which is now the element we want to delete)
    // This removes it from the heap and restores heap property
    this.extractMin();
  }

  /**
   * Decrease the value at index i to new_val
   * This operation helps in deleting elements by moving them to root
   * @param {number} i - Index of the element to decrease
   * @param {number} new_val - New (smaller) value to assign
   */
  decreaseKey(i, new_val) {
    // Step 1: Update the value at index i to the new (smaller) value
    this.harr[i] = new_val;

    // Step 2: Bubble up to maintain min-heap property
    // Since we decreased the value, it might violate heap property with its parent
    // Continue swapping with parent until:
    //   - We reach root (i === 0), OR
    //   - Parent is smaller than current node (heap property satisfied)
    while (i !== 0 && this.harr[this.parent(i)] > this.harr[i]) {
      // Swap current node with its parent
      let temp = this.harr[i];
      this.harr[i] = this.harr[this.parent(i)];
      this.harr[this.parent(i)] = temp;

      // Move up to parent position for next iteration
      i = this.parent(i);
    }
    // After this loop, the decreased element is at its correct position
  }

  /* You may call below MinHeapify function in
      above codes. Please do not delete this code
      if you are not writing your own MinHeapify */
  /**
   * Heapify (bubble down) operation to restore min-heap property
   * Assumes subtrees are already valid heaps, but node i might violate heap property
   * @param {number} i - Index of the node to heapify
   */
  MinHeapify(i) {
    // Step 1: Get indices of left and right children
    let l = this.left(i);
    let r = this.right(i);

    // Step 2: Find the smallest among node i and its children
    // Start by assuming node i is the smallest
    let smallest = i;

    // Step 3: Compare with left child
    // Check if left child exists and is smaller than current node
    if (l < this.heap_size && this.harr[l] < this.harr[i]) {
      smallest = l; // Left child is smaller
    }

    // Step 4: Compare with right child
    // Check if right child exists and is smaller than the smallest so far
    if (r < this.heap_size && this.harr[r] < this.harr[smallest]) {
      smallest = r; // Right child is the smallest
    }

    // Step 5: If node i is not the smallest, swap and recursively heapify
    if (smallest != i) {
      // Swap node i with the smallest child
      let temp = this.harr[i];
      this.harr[i] = this.harr[smallest];
      this.harr[smallest] = temp;

      // Step 6: Recursively heapify the subtree where we swapped
      // This ensures the entire subtree maintains heap property
      this.MinHeapify(smallest);
    }
    // If smallest == i, then heap property is already satisfied, so we're done
  }
}
