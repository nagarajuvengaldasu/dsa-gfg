/**
 * POWER SET USING RECURSION
 * Problem: Generate all possible subsets (power set) of a given string
 * 
 * Approach: Backtracking/Recursion
 * For each character, we have two choices:
 * 1. Include the character in the current subset
 * 2. Exclude the character from the current subset
 * 
 * Time Complexity: O(2^n) where n is the length of string
 *   - We generate 2^n subsets (each element can be included or excluded)
 *   - Each subset takes O(n) to build → Total: O(2^n × n)
 * Space Complexity: O(n) for recursion stack + O(2^n) for result array
 * 
 * KEY INSIGHT: This is similar to generating all combinations
 * - At each position, we make a binary choice: include or exclude
 * - This naturally generates all 2^n possible subsets
 */

/**
 * OPTIMAL APPROACH EXPLANATION:
 * 
 * Step 1: Recursive function with two choices
 *   - Base case: When we've processed all characters, add current subset to result
 *   - Recursive case: For current character, try both:
 *     a) Include it → add to current subset, recurse for next character
 *     b) Exclude it → skip it, recurse for next character
 * 
 * Step 2: Backtracking
 *   - After including a character and recursing, we need to remove it
 *   - This allows us to try the "exclude" path
 *   - Use array push/pop for efficient backtracking
 * 
 * Step 3: Result collection
 *   - When all characters are processed, convert array to string
 *   - Add to result array
 */

function powerSet(s) {
    // Step 1: Convert string to array for easier manipulation
    const chars = s.split("");
    const n = chars.length;
    
    // Step 2: Result array to store all subsets
    const result = [];
    
    // Step 3: Recursive helper function
    // index: current position in the string
    // current: array building the current subset
    function generateSubsets(index, current) {
        // Base Case: If we've processed all characters
        // Convert array to string and add to result
        if(index === n) {
            result.push(current.join(""));
            return;
        }
        
        // Choice 1: EXCLUDE current character
        // Don't add chars[index] to current subset
        // Recurse for next character
        generateSubsets(index + 1, current);
        
        // Choice 2: INCLUDE current character
        // Add chars[index] to current subset
        current.push(chars[index]);
        // Recurse for next character
        generateSubsets(index + 1, current);
        // Backtrack: Remove the character we just added
        // This allows us to explore the exclude path
        current.pop();
    }
    
    // Step 4: Start recursion from index 0 with empty array
    generateSubsets(0, []);
    
    // Step 5: Return all subsets (power set)
    return result;
}

// Step-by-step execution example:
// Input: s = "abc"
// Expected output: ["", "a", "b", "ab", "c", "ac", "bc", "abc"]
//
// Call: powerSet("abc")
//   chars = ['a', 'b', 'c'], n = 3
//   result = []
//   Call: generateSubsets(0, [])
//     index=0, current=[], char='a'
//     
//     Choice 1: EXCLUDE 'a'
//     Call: generateSubsets(1, [])
//       index=1, current=[], char='b'
//       
//       Choice 1.1: EXCLUDE 'b'
//       Call: generateSubsets(2, [])
//         index=2, current=[], char='c'
//         
//         Choice 1.1.1: EXCLUDE 'c'
//         Call: generateSubsets(3, [])
//           index=3, n=3 → BASE CASE!
//           result.push([].join("")) → result = [""] ✅
//         
//         Choice 1.1.2: INCLUDE 'c'
//         current.push('c') → current = ['c']
//         Call: generateSubsets(3, ['c'])
//           result.push("c") → result = ["", "c"] ✅
//         current.pop() → current = []
//       
//       Choice 1.2: INCLUDE 'b'
//       current.push('b') → current = ['b']
//       Call: generateSubsets(2, ['b'])
//         index=2, current=['b'], char='c'
//         
//         Choice 1.2.1: EXCLUDE 'c'
//         Call: generateSubsets(3, ['b'])
//           result.push("b") → result = ["", "c", "b"] ✅
//         
//         Choice 1.2.2: INCLUDE 'c'
//         current.push('c') → current = ['b', 'c']
//         Call: generateSubsets(3, ['b', 'c'])
//           result.push("bc") → result = ["", "c", "b", "bc"] ✅
//         current.pop() → current = ['b']
//       current.pop() → current = []
//     
//     Choice 2: INCLUDE 'a'
//     current.push('a') → current = ['a']
//     Call: generateSubsets(1, ['a'])
//       index=1, current=['a'], char='b'
//       
//       Choice 2.1: EXCLUDE 'b'
//       Call: generateSubsets(2, ['a'])
//         index=2, current=['a'], char='c'
//         
//         Choice 2.1.1: EXCLUDE 'c'
//         Call: generateSubsets(3, ['a'])
//           result.push("a") → result = ["", "c", "b", "bc", "a"] ✅
//         
//         Choice 2.1.2: INCLUDE 'c'
//         current.push('c') → current = ['a', 'c']
//         Call: generateSubsets(3, ['a', 'c'])
//           result.push("ac") → result = ["", "c", "b", "bc", "a", "ac"] ✅
//         current.pop() → current = ['a']
//       
//       Choice 2.2: INCLUDE 'b'
//       current.push('b') → current = ['a', 'b']
//       Call: generateSubsets(2, ['a', 'b'])
//         index=2, current=['a', 'b'], char='c'
//         
//         Choice 2.2.1: EXCLUDE 'c'
//         Call: generateSubsets(3, ['a', 'b'])
//           result.push("ab") → result = ["", "c", "b", "bc", "a", "ac", "ab"] ✅
//         
//         Choice 2.2.2: INCLUDE 'c'
//         current.push('c') → current = ['a', 'b', 'c']
//         Call: generateSubsets(3, ['a', 'b', 'c'])
//           result.push("abc") → result = ["", "c", "b", "bc", "a", "ac", "ab", "abc"] ✅
//         current.pop() → current = ['a', 'b']
//       current.pop() → current = ['a']
//     current.pop() → current = []
//
// Result: ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
// (Order may vary, but all 2^3 = 8 subsets are present)

// Visual representation of recursion tree:
//                           generateSubsets(0, [])
//                          /                      \
//                  EXCLUDE 'a'                    INCLUDE 'a'
//         generateSubsets(1, [])          generateSubsets(1, ['a'])
//        /              \                /              \
//  EXCLUDE 'b'    INCLUDE 'b'    EXCLUDE 'b'      INCLUDE 'b'
//  generateSubsets(2, [])  generateSubsets(2, ['b'])  generateSubsets(2, ['a'])  generateSubsets(2, ['a','b'])
//    /      \      /      \      /      \      /      \
// EX 'c' IN 'c' EX 'c' IN 'c' EX 'c' IN 'c' EX 'c' IN 'c'
//  ""    "c"    "b"    "bc"   "a"    "ac"   "ab"   "abc"

// Test cases
let s1 = "a";
console.log("Input: s = 'a'");
console.log("Output:", powerSet(s1));
// Expected: ["", "a"]

let s2 = "abc";
console.log("\nInput: s = 'abc'");
console.log("Output:", powerSet(s2));
// Expected: ["", "a", "b", "ab", "c", "ac", "bc", "abc"] (order may vary)

// WHY THIS APPROACH IS OPTIMAL:
//
// 1. TIME COMPLEXITY: O(2^n × n)
//    - We generate 2^n subsets (each element: include or exclude)
//    - Each subset takes O(n) to build and store
//    - This is optimal - we MUST generate all 2^n subsets
//    - Cannot be improved further
//
// 2. SPACE COMPLEXITY: O(n) recursion + O(2^n) result
//    - Recursion stack: O(n) - necessary for recursion
//    - Result array: O(2^n) - necessary to store all subsets
//    - Both are optimal and cannot be reduced
//
// 3. BACKTRACKING EFFICIENCY:
//    - Using array push/pop: O(1) operations
//    - Join only at base case: O(n) per subset
//    - More efficient than string concatenation
//
// 4. WHY TWO CHOICES WORK:
//    - For each character, we have exactly 2 choices: include or exclude
//    - This naturally generates all 2^n possible combinations
//    - No duplicates, no missing subsets
//
// CONCLUSION: This is the OPTIMAL approach ✅
// - Time: O(2^n × n) - best possible (must generate all subsets)
// - Space: O(2^n) - necessary for result
// - Implementation: Efficient backtracking with array-based building
