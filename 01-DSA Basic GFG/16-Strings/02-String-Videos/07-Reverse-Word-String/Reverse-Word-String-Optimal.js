// Problem: Reverse the order of words in a string - Optimal Solution
// Example: "Hello World welcome to the world" → "world the to welcome World Hello"
// Approach:
//   1. Reverse each word individually
//   2. Reverse the entire string
//   3. This reverses the word order

// reverse(str, l, h): Helper function to reverse characters between indices l and h
// Time Complexity: O(n) where n is the length of substring
function reverse(str, l, h) {
  // Step 1: Convert string to array of characters
  // split("") splits string into individual characters
  let arr = str.split("");

  // Step 2: Reverse characters between indices l and h using two pointers
  while (l < h) {
    // Step 3: Swap characters at positions l and h using destructuring
    [arr[l], arr[h]] = [arr[h], arr[l]];
    // Step 4: Move pointers towards center
    l++;
    h--;
  }

  // Step 5: Join array back to string
  // BUG FIX: Changed from join(" ") to join("")
  // join(" ") would insert spaces between every character, destroying word structure
  // join("") correctly joins characters without adding spaces
  str = arr.join("");
  return str;
}

// reverseWordString(str): Optimal O(n) solution using in-place reversal
// Time Complexity: O(n) where n is the length of string
// Space Complexity: O(n) for character array
// Algorithm:
//   1. Reverse each word individually (when we encounter a space)
//   2. Reverse the last word (after loop ends)
//   3. Reverse the entire string (reverses word order)
function reverseWordString(str) {
  // Step 1: Initialize start pointer to track beginning of current word
  let start = 0;
  // Step 2: Get length of string
  let n = str.length;

  // Step 3: Traverse through the string
  for (let end = 0; end < n; end++) {
    // Step 4: Check if we encountered a space (word boundary)
    if (str[end] === " ") {
      // Step 5: Reverse the current word (from start to end-1)
      // This reverses characters within the word
      str = reverse(str, start, end - 1);
      // Step 6: Update start to beginning of next word (after space)
      start = end + 1;
    }
  }

  // Step 7: Reverse the last word (no space after it, so handle separately)
  str = reverse(str, start, n - 1);

  // Step 8: Reverse the entire string
  // This reverses the order of words (which are already reversed individually)
  // Result: Words are in correct order but reversed, then entire string reversed = correct word order
  return reverse(str, 0, n - 1);
}
// ========== TEST CODE EXECUTION ==========

// Test Case:
//   str = "Hello World welcome to the world"
// Reverse the order of words
let str = "Hello World welcome to the world";

// Execution trace (step-by-step):
//
// ===== FUNCTION CALL: reverseWordString("Hello World welcome to the world") =====
//
// Initial: str = "Hello World welcome to the world"
//          n = 30, start = 0
//
// String: "Hello World welcome to the world"
// Indices: 0123456789012345678901234567890
//          Hello World welcome to the world
//
// ===== FIRST PASS: Reverse individual words =====
//
// Iteration 1: end = 0, str[0] = 'H' (not space), continue
// Iteration 2: end = 1, str[1] = 'e' (not space), continue
// Iteration 3: end = 2, str[2] = 'l' (not space), continue
// Iteration 4: end = 3, str[3] = 'l' (not space), continue
// Iteration 5: end = 4, str[4] = 'o' (not space), continue
// Iteration 6: end = 5, str[5] = ' ' (SPACE FOUND!)
//   - Reverse word from start(0) to end-1(4): "Hello"
//     → reverse("Hello World welcome to the world", 0, 4)
//     → arr = ['H','e','l','l','o',' ','W',...]
//     → Swap arr[0]↔arr[4]: ['o','e','l','l','H',' ','W',...]
//     → Swap arr[1]↔arr[3]: ['o','l','l','e','H',' ','W',...]
//     → arr[2] stays (center)
//     → Join: "olleH World welcome to the world"
//   - str = "olleH World welcome to the world"
//   - start = 6 (next word starts after space)
//
// Iteration 7-11: end = 6-10, traverse "World" (no space), continue
// Iteration 12: end = 11, str[11] = ' ' (SPACE FOUND!)
//   - Reverse word from start(6) to end-1(10): "World"
//     → reverse("olleH World welcome to the world", 6, 10)
//     → arr = ['o','l','l','e','H',' ','W','o','r','l','d',' ',...]
//     → Swap arr[6]↔arr[10]: ['o','l','l','e','H',' ','d','o','r','l','W',' ',...]
//     → Swap arr[7]↔arr[9]: ['o','l','l','e','H',' ','d','l','r','o','W',' ',...]
//     → arr[8] stays (center)
//     → Join: "olleH dlroW welcome to the world"
//   - str = "olleH dlroW welcome to the world"
//   - start = 12
//
// Iteration 13-19: end = 12-19, traverse "welcome" (no space), continue
// Iteration 20: end = 20, str[20] = ' ' (SPACE FOUND!)
//   - Reverse word from start(12) to end-1(19): "welcome"
//     → reverse("olleH dlroW welcome to the world", 12, 19)
//     → Result: "olleH dlroW emoclew to the world"
//   - str = "olleH dlroW emoclew to the world"
//   - start = 21
//
// Iteration 21-22: end = 21-22, traverse "to" (no space), continue
// Iteration 23: end = 23, str[23] = ' ' (SPACE FOUND!)
//   - Reverse word from start(21) to end-1(22): "to"
//     → reverse("olleH dlroW emoclew to the world", 21, 22)
//     → Result: "olleH dlroW emoclew ot the world"
//   - str = "olleH dlroW emoclew ot the world"
//   - start = 24
//
// Iteration 24-26: end = 24-26, traverse "the" (no space), continue
// Iteration 27: end = 27, str[27] = ' ' (SPACE FOUND!)
//   - Reverse word from start(24) to end-1(26): "the"
//     → reverse("olleH dlroW emoclew ot the world", 24, 26)
//     → Result: "olleH dlroW emoclew ot eht world"
//   - str = "olleH dlroW emoclew ot eht world"
//   - start = 28
//
// Iteration 28-33: end = 28-33, traverse "world" (no space), continue
// Loop ends
//
// Step 7: Reverse last word from start(28) to n-1(33): "world"
//   → reverse("olleH dlroW emoclew ot eht world", 28, 33)
//   → Result: "olleH dlroW emoclew ot eht dlrow"
//   - str = "olleH dlroW emoclew ot eht dlrow"
//
// ===== SECOND PASS: Reverse entire string =====
//
// Step 8: Reverse entire string from 0 to 29
//   → reverse("olleH dlroW emoclew ot eht dlrow", 0, 29)
//   → This reverses: "olleH dlroW emoclew ot eht dlrow"
//   → Result: "world the to welcome World Hello"
//
// Final Result: "world the to welcome World Hello" ✓
//
// Explanation:
//   Step 1: Reverse each word → "olleH dlroW emoclew ot eht dlrow"
//   Step 2: Reverse entire string → "world the to welcome World Hello"
//   This gives us the reversed word order!

console.log(reverseWordString(str));
// Expected Output: "world the to welcome World Hello"
