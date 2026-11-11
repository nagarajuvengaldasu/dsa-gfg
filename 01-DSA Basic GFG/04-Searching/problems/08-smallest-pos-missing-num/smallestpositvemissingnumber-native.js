function smallestpositvemissingnumber(arr, n) {
  // we iterate from 1 to n+1 because the 
  // smallest positive missing number is always between 1 and n+1
  for (let i = 1; i <= n + 1; i++) {
    // we check if the current number is in the array
    let flag = false;
    // we iterate through the array to 
    // check if the current number is in the array
    for (let j = 0; j < n; j++) {
      // if it is, we set the flag to true and break the loop
      if (arr[j] === i) {
        flag = true;
        break;
      }
    }
    // if the flag is false, we return the current number
    if (flag === false) {
      return i;
    }
  }
  // if no number is found, we return n+1
  return n + 1;
}
let arr = [0, -10, -20, 1, 2, 3];
let n = arr.length;
console.log(smallestpositvemissingnumber(arr, n));
