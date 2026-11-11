class Solution {
  // Returns maximum XOR over all subarrays of `arr`.
  maxsubarrayxor(arr, n) {
    // If there are no elements, max XOR of any subarray is 0.
    if (n === 0) return 0;

    // `prefixxor[i]` will store XOR of first i elements (arr[0]..arr[i-1]).
    const prefixxor = new Array(n + 1);
    // XOR of zero elements is 0.
    prefixxor[0] = 0;
    // Build prefix XORs: prefixxor[i + 1] = prefixxor of first (i + 1) elements.
    for (let i = 0; i < n; i++) {
      prefixxor[i + 1] = prefixxor[i] ^ arr[i];
    }

    // Root node of the binary trie. Each node has two children: bit 0 and bit 1.
    const root = { children: [null, null] };
    // Track the best XOR value found so far.
    let maxxor = 0;

    // Insert number 0 into trie so that single prefixxor values are also considered.
    let curr = root;
    // We assume 32‑bit signed integers; go from most significant bit to least.
    for (let i = 31; i >= 0; i--) {
      // Bit `i` of the number 0 is always 0.
      const bit = (0 >> i) & 1;
      // Create node for this bit if it does not exist.
      if (!curr.children[bit]) {
        curr.children[bit] = { children: [null, null] };
      }
      // Move down to the corresponding child.
      curr = curr.children[bit];
    }

    // For every prefix XOR value, try to find the best counterpart in the trie.
    for (let i = 1; i <= n; i++) {
      // Current prefix XOR value.
      const num = prefixxor[i];
      // Start traversing from the root of the trie.
      curr = root;
      // Will accumulate the maximum XOR we can make with `num` using the trie.
      let currentxor = 0;

      // Try to maximize XOR bit by bit, from MSB to LSB.
      for (let j = 31; j >= 0; j--) {
        // Current bit of `num` at position j.
        const bit = (num >> j) & 1;
        // To maximize XOR, we prefer the opposite bit (1 - bit).
        const desired = 1 - bit;

        // If a child with the opposite bit exists, go there and set this bit in result.
        if (curr.children[desired]) {
          // Set bit j in `currentxor` because we matched opposite bits.
          currentxor = currentxor | (1 << j);
          curr = curr.children[desired];
        } else {
          // Otherwise, we are forced to go down the same‑bit child (if present).
          curr = curr.children[bit];
        }
      }

      // Update the global maximum XOR if the current candidate is better.
      maxxor = Math.max(maxxor, currentxor);

      // Now insert this prefix XOR (`num`) into the trie for future iterations.
      curr = root;
      for (let j = 31; j >= 0; j--) {
        // Extract bit j of `num`.
        const bit = (num >> j) & 1;
        // Create child node for this bit if it is absent.
        if (!curr.children[bit]) {
          curr.children[bit] = { children: [null, null] };
        }
        // Move down to that child.
        curr = curr.children[bit];
      }
    }

    // After processing all prefix XORs, `maxxor` is the maximum subarray XOR.
    return maxxor;
  }
}

// -------- Local test driver code below (not part of the GFG submission) --------
// Create an instance of the Solution class.
let sol = new Solution();
// Example array for testing the maximum subarray XOR.
let arr = [8, 1, 2, 12];
// Length of the array.
let n = arr.length;
// Compute and print the maximum subarray XOR for the example.
console.log(sol.maxsubarrayxor(arr, n));
