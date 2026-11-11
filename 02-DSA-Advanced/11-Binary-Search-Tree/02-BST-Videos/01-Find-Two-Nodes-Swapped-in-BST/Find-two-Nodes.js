/*
 * PROBLEM: Find two nodes swapped in a BST
 * -----------------------------------------
 * In a BST, exactly two nodes have been swapped. The inorder traversal of a
 * valid BST is a sorted array. So the inorder array is almost sorted except
 * for two misplaced elements.
 *
 * Goal: Given the inorder array (with exactly two elements swapped), find
 * those two values. They are the two that need to be swapped back to restore
 * sorted order.
 *
 * Idea: Scan left to right. Whenever arr[i] < arr[i-1], we have a "dip".
 * - The first dip: the larger of the two swapped values is arr[i-1] → store as "first".
 * - Every dip: the smaller of the two swapped values is arr[i] → keep updating "second".
 * So first = larger misplaced value, second = smaller misplaced value.
 */

function findtwo(arr) {
  // Larger of the two swapped values (first dip: element before the drop)
  let first = null;
  // Smaller of the two swapped values (element at the drop; update on every dip)
  let second = null;

  for (let i = 1; i < arr.length; i++) {
    // Found a violation of sorted order: arr[i] should not be less than arr[i-1]
    if (arr[i] < arr[i - 1]) {
      if (first === null) {
        // First violation: the bigger misplaced value is the one on the left
        first = arr[i - 1];
      }
      // The smaller misplaced value is on the right; keep updating in case there are two dips
      second = arr[i];
    }
  }
  console.log(first);
  console.log(second);
}

// Example: sorted would be [10,20,40,50,60]. Swapped 60 and 40 → [10,20,60,40,50]
let arr = [10, 20, 60, 40, 50];
findtwo(arr);
