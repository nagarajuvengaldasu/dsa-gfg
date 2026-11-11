function arrayToDeque(arr) {
  // In JavaScript, arrays can act as deques
  // We'll create a new array and add all elements
  let deque = [];

  // Add each element to the back of deque (to preserve order)
  for (let i = 0; i < arr.length; i++) {
    deque.push(arr[i]); // push adds to the end
  }

  return deque;
}

// Test cases
console.log(arrayToDeque([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(arrayToDeque([1])); // [1]
console.log(arrayToDeque([])); // []
