function smallestposbetter(arr, n) {
  // we create a new set to store the array elements
  let newset = new Set(arr);
  // we iterate from 1 to n+1 because the 
  // smallest positive missing number is always between 1 and n+1
  for(let i=1;i<=n+1;i++){
    // we check if the current number is in the set
    // if it is not, we return the current number
    if(!newset.has(i)){
      // we return the current number
      return i;
    }
  }
  // if no number is found, we return n+1
  return n+1;
}
let arr = [0, -10, -20, 1, 2, 3];
let n = arr.length;
console.log(smallestposbetter(arr, n));