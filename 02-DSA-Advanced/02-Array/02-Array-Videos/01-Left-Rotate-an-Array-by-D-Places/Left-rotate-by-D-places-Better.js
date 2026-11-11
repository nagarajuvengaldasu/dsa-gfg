/**
 * Better Approach - Left Rotate Array by D places
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(d) for temporary array
 *
 * Algorithm:
 * 1. Store first D elements in a temporary array
 * 2. Shift remaining elements (from index d to n-1) to positions 0 to n-d-1
 * 3. Place the stored D elements at the end (positions n-d to n-1)
 */
function leftrotate(arr, d, n) {
  // Step 1: Create a temporary array to store first D elements
  //   Example: arr = [1, 2, 3, 4, 5], d = 3, n = 5
  //   temp = new Array(3) = [undefined, undefined, undefined]
  let temp = new Array(d);

  // Step 2: Store first D elements in temp array
  //   Copy elements from index 0 to d-1 into temp
  //   Example: arr = [1, 2, 3, 4, 5], d = 3
  //     i=0: temp[0] = arr[0] = 1 → temp = [1, undefined, undefined]
  //     i=1: temp[1] = arr[1] = 2 → temp = [1, 2, undefined]
  //     i=2: temp[2] = arr[2] = 3 → temp = [1, 2, 3]
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  // Step 3: Shift remaining elements to the left
  //   Move elements from index d to n-1 to positions 0 to n-d-1
  //   Example: arr = [1, 2, 3, 4, 5], d = 3, n = 5
  //     i=3: arr[3-3] = arr[0] = arr[3] = 4 → arr = [4, 2, 3, 4, 5]
  //     i=4: arr[4-3] = arr[1] = arr[4] = 5 → arr = [4, 5, 3, 4, 5]
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  // Step 4: Place stored elements at the end
  //   Copy elements from temp array to positions n-d to n-1
  //   Example: arr = [4, 5, 3, 4, 5], temp = [1, 2, 3], d = 3, n = 5
  //     i=0: arr[5-3+0] = arr[2] = temp[0] = 1 → arr = [4, 5, 1, 4, 5]
  //     i=1: arr[5-3+1] = arr[3] = temp[1] = 2 → arr = [4, 5, 1, 2, 5]
  //     i=2: arr[5-3+2] = arr[4] = temp[2] = 3 → arr = [4, 5, 1, 2, 3]
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }

  return arr;
}

// Step-by-step execution for leftrotate([1, 2, 3, 4, 5], 3, 5):
//   Input: arr = [1, 2, 3, 4, 5], d = 3, n = 5
//
//   Step 1: Create temp array of size d = 3
//     temp = new Array(3) = [undefined, undefined, undefined]
//
//   Step 2: Store first 3 elements
//     i=0: temp[0] = arr[0] = 1 → temp = [1, undefined, undefined]
//     i=1: temp[1] = arr[1] = 2 → temp = [1, 2, undefined]
//     i=2: temp[2] = arr[2] = 3 → temp = [1, 2, 3]
//
//   Step 3: Shift remaining elements left
//     i=3: arr[3-3] = arr[0] = arr[3] = 4 → arr = [4, 2, 3, 4, 5]
//     i=4: arr[4-3] = arr[1] = arr[4] = 5 → arr = [4, 5, 3, 4, 5]
//
//   Step 4: Place temp elements at the end
//     i=0: arr[5-3+0] = arr[2] = temp[0] = 1 → arr = [4, 5, 1, 4, 5]
//     i=1: arr[5-3+1] = arr[3] = temp[1] = 2 → arr = [4, 5, 1, 2, 5]
//     i=2: arr[5-3+2] = arr[4] = temp[2] = 3 → arr = [4, 5, 1, 2, 3]
//
//   Final result: [4, 5, 1, 2, 3]

let arr = [1, 2, 3, 4, 5];
let d = 3;
let n = arr.length;
console.log(leftrotate(arr, d, n));
