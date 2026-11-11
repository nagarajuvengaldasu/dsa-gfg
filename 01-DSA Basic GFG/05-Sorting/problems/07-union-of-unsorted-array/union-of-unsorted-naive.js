function unionofunsortedarray(a, b) {
  let n = a.length;
  let m = b.length;
  let res = [];
  // push data to result array
  for (let i = 0; i < n; i++) {
    res.push(a[i]);
  }
  // push data to result array
  for (let i = 0; i < m; i++) {
    res.push(b[i]);
  }
  // find the unique element count in the result array by using the hashmap
  let map = new Map();
  for (let i = 0; i < res.length; i++) {
    //what is these map.set(res[i], true);
    //this is a hashmap and it is used to store the unique elements in the result array
    //the key is the element and the value is true
    //the value is true because we want to store the unique elements in the result array
    map.set(res[i], true);
  }
  return map.size; // return the size of the hashmap
}
let a = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6];
let b = [2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
console.log(unionofunsortedarray(a, b));
