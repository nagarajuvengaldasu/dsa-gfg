function deleteMid(s) {
  let n = s.length;
  // Middle element position (1-based from bottom)
  let midPos = Math.floor((n + 1) / 2);

  // Helper function to recursively remove middle element
  const removeMid = (currentPos) => {
    // Base case: if we've reached the middle position, remove it
    if (currentPos === midPos) {
      s.pop();
      return;
    }

    // Store the current top element
    let top = s.pop();

    // Recursively process the rest
    removeMid(currentPos - 1);

    // Push back the element (except the middle one)
    s.push(top);
  };

  // Start from the top (position n, 1-based from bottom)
  removeMid(n);

  return s;
}

// Test cases
let s1 = [10, 20, 30, 40, 50];
console.log("Input:", s1);
deleteMid(s1);
console.log("Output (top to bottom):", s1.slice().reverse()); // [50, 40, 20, 10]
console.log("Array state:", s1); // [10, 20, 40, 50]

let s2 = [10, 20, 30, 40];
console.log("\nInput:", s2);
deleteMid(s2);
console.log("Output (top to bottom):", s2.slice().reverse()); // [40, 30, 10]
console.log("Array state:", s2); // [10, 30, 40]

let s3 = [5, 8, 6, 7, 6, 6, 5, 10, 12, 9];
console.log("\nInput:", s3);
deleteMid(s3);
console.log("Output (top to bottom):", s3.slice().reverse()); // [9, 12, 10, 5, 6, 7, 6, 8, 5]
console.log("Array state:", s3); // [5, 8, 6, 7, 6, 5, 10, 12, 9]
