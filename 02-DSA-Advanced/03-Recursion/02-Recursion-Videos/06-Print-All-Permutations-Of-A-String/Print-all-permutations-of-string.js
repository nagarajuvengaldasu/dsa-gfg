/**
 * PRINT ALL PERMUTATIONS OF A STRING
 * Problem: Generate and print all permutations of a given string
 * 
 * Time Complexity: O(n × n!) - n! permutations, each takes O(n) to print
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: Use backtracking - fix each position and recursively generate
 * permutations for the remaining positions. Swap elements to try different arrangements.
 */

function permutation(str , i =0){
  let n = str.length;
  
  // Step 1: Base Case - If we've fixed all positions (i == n-1)
  // We've generated a complete permutation, so print it
  // Example: i=2, n=3 → we've fixed all 3 positions, print the permutation
  if(i == n-1){
    console.log(str.join(""));
    return;
  }
  
  // Step 2: Recursive Case - For each position from i to n-1
  // Try placing each remaining character at position i
  for(let j=i;j<n;j++){
    // Step 2.1: Swap str[i] with str[j] to place str[j] at position i
    // This is the CORRECT swap: exchange the values
    // IMPORTANT: Must be [str[i], str[j]] = [str[j], str[i]] (swap)
    // BUG: If it was [str[i], str[j]] = [str[i], str[j]], it wouldn't swap!
    // Example: str=['A','B','C'], i=0, j=1
    //   Before: str[0]='A', str[1]='B'
    //   After: str[0]='B', str[1]='A' → str=['B','A','C']
    [str[i] , str[j]] = [str[j] , str[i]];
    
    // Step 2.2: Recursively generate permutations for remaining positions
    // Move to next position (i+1) and generate all permutations
    // Example: After swapping, generate permutations starting from position 1
    permutation(str, i + 1);
    
    // Step 2.3: Backtrack - Swap back to restore original state
    // This is crucial for backtracking - we need to undo the swap
    // so we can try the next character at position i
    // Example: After exploring all permutations with 'B' at position 0,
    //   swap back to try 'C' at position 0
    [str[i], str[j]] = [str[j], str[i]];
  }
}

// Step-by-step execution example:
// Input: str = "ABC" → ['A', 'B', 'C'], i = 0
//
// Call: permutation(['A','B','C'], 0)
//   n=3, i=0
//   Check: i == n-1? (0 == 2)? No
//   
//   Loop: j from 0 to 2
//   
//   j=0: Place 'A' at position 0
//     Swap: [str[0], str[0]] = [str[0], str[0]]
//       ['A','B','C'] → ['A','B','C'] (no change, j==i)
//     Call: permutation(['A','B','C'], 1)
//       n=3, i=1
//       Check: i == n-1? (1 == 2)? No
//       
//       Loop: j from 1 to 2
//       
//       j=1: Place 'B' at position 1
//         Swap: [str[1], str[1]] = [str[1], str[1]]
//           ['A','B','C'] → ['A','B','C'] (no change)
//         Call: permutation(['A','B','C'], 2)
//           n=3, i=2
//           Check: i == n-1? (2 == 2)? Yes (BASE CASE)
//           Print: "ABC" ✅
//           Return
//         Backtrack: [str[1], str[1]] = [str[1], str[1]] (no change)
//       
//       j=2: Place 'C' at position 1
//         Swap: [str[1], str[2]] = [str[2], str[1]]
//           ['A','B','C'] → ['A','C','B']
//         Call: permutation(['A','C','B'], 2)
//           n=3, i=2
//           Check: i == n-1? (2 == 2)? Yes (BASE CASE)
//           Print: "ACB" ✅
//           Return
//         Backtrack: [str[1], str[2]] = [str[2], str[1]]
//           ['A','C','B'] → ['A','B','C']
//       
//       Back to permutation(['A','B','C'], 1): Done
//     Backtrack: [str[0], str[0]] = [str[0], str[0]] (no change)
//   
//   j=1: Place 'B' at position 0
//     Swap: [str[0], str[1]] = [str[1], str[0]]
//       ['A','B','C'] → ['B','A','C']
//     Call: permutation(['B','A','C'], 1)
//       n=3, i=1
//       Check: i == n-1? (1 == 2)? No
//       
//       Loop: j from 1 to 2
//       
//       j=1: Place 'A' at position 1
//         Swap: [str[1], str[1]] = [str[1], str[1]]
//           ['B','A','C'] → ['B','A','C'] (no change)
//         Call: permutation(['B','A','C'], 2)
//           Print: "BAC" ✅
//           Return
//         Backtrack: (no change)
//       
//       j=2: Place 'C' at position 1
//         Swap: [str[1], str[2]] = [str[2], str[1]]
//           ['B','A','C'] → ['B','C','A']
//         Call: permutation(['B','C','A'], 2)
//           Print: "BCA" ✅
//           Return
//         Backtrack: ['B','C','A'] → ['B','A','C']
//       
//       Back to permutation(['B','A','C'], 1): Done
//     Backtrack: [str[0], str[1]] = [str[1], str[0]]
//       ['B','A','C'] → ['A','B','C']
//   
//   j=2: Place 'C' at position 0
//     Swap: [str[0], str[2]] = [str[2], str[0]]
//       ['A','B','C'] → ['C','B','A']
//     Call: permutation(['C','B','A'], 1)
//       n=3, i=1
//       Check: i == n-1? (1 == 2)? No
//       
//       Loop: j from 1 to 2
//       
//       j=1: Place 'B' at position 1
//         Swap: [str[1], str[1]] = [str[1], str[1]]
//           ['C','B','A'] → ['C','B','A'] (no change)
//         Call: permutation(['C','B','A'], 2)
//           Print: "CBA" ✅
//           Return
//         Backtrack: (no change)
//       
//       j=2: Place 'A' at position 1
//         Swap: [str[1], str[2]] = [str[2], str[1]]
//           ['C','B','A'] → ['C','A','B']
//         Call: permutation(['C','A','B'], 2)
//           Print: "CAB" ✅
//           Return
//         Backtrack: ['C','A','B'] → ['C','B','A']
//       
//       Back to permutation(['C','B','A'], 1): Done
//     Backtrack: [str[0], str[2]] = [str[2], str[0]]
//       ['C','B','A'] → ['A','B','C']
//
// Result: All 6 permutations printed:
//   ABC, ACB, BAC, BCA, CBA, CAB

// COMMON BUG TO WATCH OUT FOR:
// If line 8 was: [str[i], str[j]] = [str[i], str[j]]
// This would NOT swap - it assigns str[i] to str[i] and str[j] to str[j] (no-op)
// The algorithm would fail to generate all permutations correctly
//
// Correct version: [str[i], str[j]] = [str[j], str[i]]
// This correctly swaps the values

let str ="Ab";
permutation(str.split("")); // Expected output: ABC, ACB, BAC, BCA, CBA, CAB