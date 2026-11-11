function removeduplicate(arr){
  let n = arr.length;
  // we are using two pointer approach to remove duplicates
  let count = 1;
  for(let i=1;i<n;i++){
    // if the current element is not equal to the previous element, we increment the count and assign the current element to the count index
    if(arr[count -1] !== arr[i]){
      // we assign the current element to the count index
      arr[count] = arr[i];
      // we increment the count
      count++;
    }
  }
  // we return the array up to the count index
  return arr.slice(0, count);
}
let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
console.log(removeduplicate(arr));