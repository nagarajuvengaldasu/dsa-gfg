function unionofunsortedarray(a, b) {
  // create a set to store the unique elements
  let result = new Set(a);
  // add the elements of the second array to the set
  for (let i = 0; i < b.length; i++) {
    result.add(b[i]);
  }
  return result.size; 
  // return the size of the set which is the number of unique elements
}
let a = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6];
let b = [2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
console.log(unionofunsortedarray(a, b)); // output: 8
