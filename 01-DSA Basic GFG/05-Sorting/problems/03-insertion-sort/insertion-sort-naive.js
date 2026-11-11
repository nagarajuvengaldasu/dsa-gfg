function insertionSort(arr) {
  let n = arr.length;
  // insertion sort algorithm
  // outer loop for passes
  for(let i=1;i<n;i++){
    // inner loop for comparisons
    // store the current element in a variable
    let key = arr[i];
    // initialize the index of the previous element
    let j= i-1;
    // comparison logic if the current element is greater than the next element then swap
    while(j>=0 &&  arr[j] > key){
      // shift the elements to the right
      arr[j+1] = arr[j];  
      // update the index
      j--;
    }
    // insert the key at the correct position
    arr[j+1] = key;
  }
  return arr;
  }
let arr = [2, 3, 6, 5, 4, 8];
console.log("insertion sort ", insertionSort(arr));