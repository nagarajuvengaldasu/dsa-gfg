/**
 * POSSIBLE WORDS FROM PHONE DIGITS
 * Problem: Generate all possible letter combinations from phone keypad digits
 * 
 * Approach: Backtracking/Recursion
 * 1. Create a mapping of digits to letters (old phone keypad)
 * 2. For each digit, try all possible letters it can represent
 * 3. Recursively build combinations
 * 4. When all digits are processed, add the combination to result
 * 
 * Time Complexity: O(4^n) where n is number of digits (worst case: digit 7 or 9 has 4 letters)
 * Space Complexity: O(n) for recursion stack + O(4^n) for result array
 * 
 * OPTIMIZATION: Using array instead of string concatenation
 * - String concatenation: Creates new string objects (immutable), O(n) per operation
 * - Array push/pop: O(1) operations, join only at the end
 * - This reduces time complexity from O(4^n × n^2) to O(4^n × n) for string building
 */

/**
 * APPROACH EXPLANATION:
 * 
 * Step 1: Create keypad mapping
 *   - Map each digit (2-9) to its corresponding letters
 *   - 2 -> "abc", 3 -> "def", 4 -> "ghi", etc.
 * 
 * Step 2: Recursive function
 *   - Base case: If we've processed all digits (index == n), add current string to result
 *   - Recursive case: For current digit, try each possible letter
 *     - Get letters for current digit
 *     - For each letter, append it to current string and recurse for next digit
 * 
 * Step 3: Backtracking
 *   - After trying a letter, we naturally backtrack when recursion returns
 *   - The current string is built incrementally as we go deeper
 */

function possibleWords(arr, n) {
    // Step 1: Create keypad mapping
    // Maps each digit to its corresponding letters on phone keypad
    const keypad = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
        // 0 and 1 don't map to any letters
    };
    
    // Step 2: Result array to store all possible words
    const result = [];
    
    // OPTIMIZED VERSION: Use array instead of string concatenation
    // This is more efficient because:
    // - String concatenation creates new strings (immutable in JavaScript)
    // - Array push/pop is O(1) and we join only at the end
    // Step 3: Recursive helper function
    // index: current position in arr
    // current: array to build current string (more efficient than string concatenation)
    function generateWords(index, current) {
        // Base Case: If we've processed all digits
        // Join the array to form string and add to result
        if(index === n) {
            result.push(current.join(""));
            return;
        }
        
        // Get current digit
        const digit = arr[index];
        
        // Skip if digit is 0 or 1 (no letters mapped)
        if(digit === 0 || digit === 1) {
            // Move to next digit without adding any letter
            generateWords(index + 1, current);
            return;
        }
        
        // Get letters for current digit
        const letters = keypad[digit];
        
        // For each letter, try it and recurse
        for(let i = 0; i < letters.length; i++) {
            // Push current letter to array (O(1) operation)
            current.push(letters[i]);
            // Recurse for next digit
            generateWords(index + 1, current);
            // Backtrack: Remove the letter we just added (O(1) operation)
            current.pop();
        }
    }
    
    // Step 4: Start recursion from index 0 with empty array
    generateWords(0, []);
    
    // Step 5: Return all possible words
    return result;
}

// ALTERNATIVE: Original version with string concatenation
// This works but is slightly less efficient due to string immutability
// function possibleWords(arr, n) {
//     const keypad = {
//         2: "abc", 3: "def", 4: "ghi", 5: "jkl",
//         6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"
//     };
//     const result = [];
//     
//     function generateWords(index, current) {
//         if(index === n) {
//             result.push(current);
//             return;
//         }
//         const digit = arr[index];
//         if(digit === 0 || digit === 1) {
//             generateWords(index + 1, current);
//             return;
//         }
//         const letters = keypad[digit];
//         for(let i = 0; i < letters.length; i++) {
//             generateWords(index + 1, current + letters[i]);
//         }
//     }
//     
//     generateWords(0, "");
//     return result;
// }

// Step-by-step execution example:
// Input: arr = [2, 3], n = 2
//
// Call: possibleWords([2, 3], 2)
//   Create keypad mapping
//   result = []
//   Call: generateWords(0, "")
//     index=0, current="", digit=arr[0]=2
//     letters = keypad[2] = "abc"
//     
//     Loop: i=0, letter='a'
//       newCurrent = "" + "a" = "a"
//       Call: generateWords(1, "a")
//         index=1, current="a", digit=arr[1]=3
//         letters = keypad[3] = "def"
//         
//         Loop: i=0, letter='d'
//           newCurrent = "a" + "d" = "ad"
//           Call: generateWords(2, "ad")
//             index=2, n=2
//             Check: index === n? Yes (BASE CASE)
//             result.push("ad") → result = ["ad"]
//             Return
//         
//         Loop: i=1, letter='e'
//           newCurrent = "a" + "e" = "ae"
//           Call: generateWords(2, "ae")
//             result.push("ae") → result = ["ad", "ae"]
//         
//         Loop: i=2, letter='f'
//           newCurrent = "a" + "f" = "af"
//           Call: generateWords(2, "af")
//             result.push("af") → result = ["ad", "ae", "af"]
//     
//     Loop: i=1, letter='b'
//       newCurrent = "" + "b" = "b"
//       Call: generateWords(1, "b")
//         ... generates "bd", "be", "bf"
//         result = ["ad", "ae", "af", "bd", "be", "bf"]
//     
//     Loop: i=2, letter='c'
//       newCurrent = "" + "c" = "c"
//       Call: generateWords(1, "c")
//         ... generates "cd", "ce", "cf"
//         result = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
//
// Result: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// Visual representation of recursion tree:
//                           generateWords(0, "")
//                          /        |        \
//                    'a' /         | 'b'      \ 'c'
//         generateWords(1,"a")  generateWords(1,"b")  generateWords(1,"c")
//        /      |      \        /      |      \        /      |      \
//    'd'|'e'|'f'    'd'|'e'|'f'    'd'|'e'|'f'
//    "ad" "ae" "af"  "bd" "be" "bf"  "cd" "ce" "cf"

// Test cases
let arr1 = [2, 3];
console.log("Input: [2, 3]");
console.log("Output:", possibleWords(arr1, arr1.length));
// Expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

let arr2 = [2];
console.log("\nInput: [2]");
console.log("Output:", possibleWords(arr2, arr2.length));
// Expected: ["a", "b", "c"]

let arr3 = [7, 9];
console.log("\nInput: [7, 9]");
console.log("Output:", possibleWords(arr3, arr3.length));
// Expected: All combinations of "pqrs" and "wxyz" (4 x 4 = 16 words)

// OPTIMIZATION ANALYSIS:
//
// IS THE CODE OPTIMAL?
// ✅ YES - The algorithm is optimal for generating ALL combinations
//
// 1. TIME COMPLEXITY: O(4^n)
//    - We MUST visit all nodes in the recursion tree to generate all combinations
//    - This is the best possible time complexity for this problem
//    - Cannot be improved further
//
// 2. SPACE COMPLEXITY: O(n) recursion + O(4^n) result
//    - Recursion stack: O(n) - necessary for recursion
//    - Result array: O(4^n) - necessary to store all combinations
//    - Both are optimal and cannot be reduced
//
// 3. STRING BUILDING OPTIMIZATION:
//    ORIGINAL (String concatenation):
//      - current + letters[i] creates new string each time
//      - Each concatenation: O(k) where k is current string length
//      - Total: O(4^n × n^2) for string operations
//    
//    OPTIMIZED (Array with push/pop):
//      - current.push(letters[i]): O(1)
//      - current.pop(): O(1)
//      - current.join(""): O(n) only at base case
//      - Total: O(4^n × n) for string operations
//    - Improvement: Reduces string building from O(n^2) to O(n) per combination
//
// 4. WHY THIS IS OPTIMAL:
//    - We need to generate ALL combinations - no way to skip any
//    - Each combination must be stored - result array is necessary
//    - Backtracking is the most efficient way to explore all paths
//    - Array-based string building is more efficient than string concatenation
//
// CONCLUSION: The code is OPTIMAL ✅
// - Time: O(4^n) - best possible
// - Space: O(4^n) - necessary for result
// - Implementation: Uses efficient array-based string building

// ============================================================================
// DETAILED STEP-BY-STEP EXPLANATION OF WHAT I DID:
// ============================================================================
//
// STEP 1: CREATE KEYPAD MAPPING
//   - I created an object that maps each digit (2-9) to its letters
//   - Example: digit 2 → "abc", digit 3 → "def"
//   - This is like the old phone keypad where each number has letters
//
// STEP 2: CREATE RESULT ARRAY
//   - I created an empty array to store all generated words
//   - This will hold the final answer
//
// STEP 3: CREATE RECURSIVE HELPER FUNCTION
//   - Function name: generateWords(index, current)
//   - index: Which digit we're currently processing (0, 1, 2, ...)
//   - current: An ARRAY that builds the current word (not a string!)
//
// STEP 4: BASE CASE
//   - When index === n (we've processed all digits)
//   - Convert the array to string using join("")
//   - Add it to result array
//   - Return (stop recursion)
//
// STEP 5: HANDLE CURRENT DIGIT
//   - Get the digit at current index: arr[index]
//   - If digit is 0 or 1: Skip it (no letters), move to next digit
//   - Otherwise: Get letters for that digit from keypad mapping
//
// STEP 6: TRY EACH LETTER (THE CORE LOGIC)
//   For each letter that the digit can represent:
//     a) PUSH the letter to current array
//     b) RECURSE to process next digit
//     c) POP the letter (backtrack) to try next letter
//
// STEP 7: START THE RECURSION
//   - Call generateWords(0, []) with empty array
//   - This starts building words from the first digit
//
// STEP 8: RETURN RESULT
//   - After recursion completes, return the result array
//   - It contains all possible word combinations
//
// ============================================================================
// VISUAL EXAMPLE: How it works for arr = [2, 3]
// ============================================================================
//
// Initial Call: generateWords(0, [])
//   index=0, current=[], digit=2, letters="abc"
//
//   Try 'a':
//     current.push('a') → current = ['a']
//     Call: generateWords(1, ['a'])
//       index=1, current=['a'], digit=3, letters="def"
//       
//       Try 'd':
//         current.push('d') → current = ['a', 'd']
//         Call: generateWords(2, ['a', 'd'])
//           index=2, n=2 → BASE CASE!
//           result.push(['a','d'].join("")) → result = ["ad"]
//           Return
//         current.pop() → current = ['a'] (backtrack)
//       
//       Try 'e':
//         current.push('e') → current = ['a', 'e']
//         Call: generateWords(2, ['a', 'e'])
//           result.push("ae") → result = ["ad", "ae"]
//         current.pop() → current = ['a']
//       
//       Try 'f':
//         current.push('f') → current = ['a', 'f']
//         Call: generateWords(2, ['a', 'f'])
//           result.push("af") → result = ["ad", "ae", "af"]
//         current.pop() → current = ['a']
//     
//     current.pop() → current = [] (backtrack to try 'b')
//
//   Try 'b':
//     current.push('b') → current = ['b']
//     ... generates "bd", "be", "bf"
//     current.pop() → current = []
//
//   Try 'c':
//     current.push('c') → current = ['c']
//     ... generates "cd", "ce", "cf"
//     current.pop() → current = []
//
// Final result: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
//
// ============================================================================
// KEY OPTIMIZATION: Why use ARRAY instead of STRING?
// ============================================================================
//
// STRING APPROACH (Less Efficient):
//   current = current + letters[i]  // Creates NEW string each time
//   Example: "" + "a" = "a" (new string)
//            "a" + "d" = "ad" (another new string)
//   Problem: Each concatenation creates a copy → O(n) per operation
//   Total: O(4^n × n^2) for all string operations
//
// ARRAY APPROACH (More Efficient - What I Used):
//   current.push(letters[i])  // O(1) - just adds to array
//   current.pop()             // O(1) - just removes from array
//   current.join("")          // O(n) - only at base case
//   Total: O(4^n × n) for all operations
//
// Improvement: Reduced from O(n^2) to O(n) per combination!
//
// ============================================================================
// WHY BACKTRACKING WORKS:
// ============================================================================
//
// The magic is in the push-pop pattern:
//   1. Push letter → Try it → Recurse deeper
//   2. When recursion returns → Pop letter → Try next letter
//
// This automatically explores ALL possible combinations:
//   - We try each letter at each position
//   - After trying all letters at a position, we backtrack
//   - This naturally explores the entire tree of possibilities
//
// ============================================================================
