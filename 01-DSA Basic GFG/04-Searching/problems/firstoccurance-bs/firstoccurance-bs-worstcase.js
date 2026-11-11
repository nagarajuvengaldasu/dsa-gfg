function binarysearchworstcase(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  // iterate through the array
  while (low <= high) {
    // find the middle index
    let mid = Math.floor((low + high) / 2);
    // check if the element is the target
    if (arr[mid] === x) {
      // traverse towards left of i to find the first occurance continue till arr[mid-1] is not equal to x
      while(arr[mid-1] === x){
        mid--;
      }
      return mid;
      
    } else if (arr[mid] > x) {
      // if the element is greater than the target, move the high pointer to the left
      high = mid - 1;
    } else {
      // if the element is less than the target, move the low pointer to the right
      low = mid + 1;
    }
  }
  // if the element is not found, return -1
  return -1;
}
let arr = [1,1,1,1,1,1,1,1,1,1,2, 2, 2, 2, 2, 2, 2];
let x = 2;
console.log(binarysearchworstcase(arr, x));
