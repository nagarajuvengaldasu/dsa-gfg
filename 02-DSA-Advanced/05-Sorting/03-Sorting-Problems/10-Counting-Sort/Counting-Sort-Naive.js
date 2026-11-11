// ========== STEP-BY-STEP: Counting Sort (NAIVE using built-in sort) ==========
// Goal: Given a lowercase string, return its characters in lexicographical order.
// Idea: Convert string to array of characters, use built-in sort (O(n log n)), then join back.

function countingSort(str) {
  // Step 1: Convert string to array of chars
  const chars = str.split("");
  // Step 2: Sort using default lexicographic order
  chars.sort();
  // Step 3: Join back to a string
  return chars.join("");
}

// ---------- Example run: str = "geeksforgeeks" ----------
// Step 1: ["g","e","e","k","s","f","o","r","g","e","e","k","s"]
// Step 2: after sort → ["e","e","e","e","f","g","g","k","k","o","r","s","s"]
// Step 3: join → "eeeefggkkorss"
let str = "geeksforgeeks";
console.log(countingSort(str));
