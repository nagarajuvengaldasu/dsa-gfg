/**
 * Count Frequencies in a Sorted Array
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Print frequency of each distinct element in a sorted array.
 * Since the array is sorted, same elements appear consecutively.
 *
 * Algorithm:
 * 1. Traverse the array using pointer i
 * 2. For each distinct element, count how many times it appears
 * 3. Print element and its frequency
 * 4. Skip to the next distinct element
 */
function frequencies(arr, n) {
  // Step 1: Initialize pointer i to start of array
  //   We'll traverse the array from left to right
  let i = 0;

  // Step 2: Process all elements in the array
  //   Continue until we've processed all elements
  while (i < n) {
    // Step 3: Initialize pointer j to check consecutive same elements
    //   Start from the next position after current element
    //   Example: arr = [10, 10, 10, 20, 20, 30], i = 0
    //   j = i + 1 = 1 (start checking from index 1)
    let j = i + 1;

    // Step 4: Initialize frequency counter to 1
    //   Current element appears at least once (at position i)
    //   Example: freq = 1 (for element at index i)
    let freq = 1;

    // Step 5: Count consecutive occurrences of current element
    //   While elements at position j match current element, increment frequency
    //   Example: arr = [10, 10, 10, 20, 20, 30], i = 0, arr[i] = 10
    //   j = 1: arr[1] = 10 === arr[0] = 10? Yes → freq = 2, j = 2
    //   j = 2: arr[2] = 10 === arr[0] = 10? Yes → freq = 3, j = 3
    //   j = 3: arr[3] = 20 === arr[0] = 10? No → break
    while (j < n) {
      if (arr[i] === arr[j]) {
        // Current element matches, increment frequency
        freq++;
        j++; // Move to next position
      } else {
        // Found a different element, stop counting
        break;
      }
    }

    // Step 6: Print element and its frequency
    //   Example: arr[i] = 10, freq = 3
    //   Output: "10 3"
    console.log(arr[i] + " " + freq);

    // Step 7: Move pointer i to the next distinct element
    //   j now points to the first position with a different element
    //   Set i = j to start processing the next distinct element
    //   Example: After processing 10 (i=0 to j=3), set i = 3 (next distinct element: 20)
    i = j;
  }
}

// Step-by-step execution for frequencies([10, 10, 10, 20, 20, 30], 6):
//   Input: arr = [10, 10, 10, 20, 20, 30], n = 6
//
//   Iteration 1: i = 0, arr[i] = 10
//     j = i + 1 = 1
//     freq = 1
//     Inner loop: j < 6
//       j = 1: arr[1] = 10 === arr[0] = 10? Yes
//         freq = 2, j = 2
//       j = 2: arr[2] = 10 === arr[0] = 10? Yes
//         freq = 3, j = 3
//       j = 3: arr[3] = 20 === arr[0] = 10? No → break
//     Print: "10 3"
//     i = j = 3 (move to next distinct element)
//
//   Iteration 2: i = 3, arr[i] = 20
//     j = i + 1 = 4
//     freq = 1
//     Inner loop: j < 6
//       j = 4: arr[4] = 20 === arr[3] = 20? Yes
//         freq = 2, j = 5
//       j = 5: arr[5] = 30 === arr[3] = 20? No → break
//     Print: "20 2"
//     i = j = 5 (move to next distinct element)
//
//   Iteration 3: i = 5, arr[i] = 30
//     j = i + 1 = 6
//     freq = 1
//     Inner loop: j < 6? No (j = 6, condition false)
//     Print: "30 1"
//     i = j = 6 (move to next distinct element)
//
//   Iteration 4: i = 6, i < 6? No → exit loop
//
//   Output:
//     10 3
//     20 2
//     30 1

let arr = [10, 10, 10, 20, 20, 30];
let n = arr.length;
frequencies(arr, n);
