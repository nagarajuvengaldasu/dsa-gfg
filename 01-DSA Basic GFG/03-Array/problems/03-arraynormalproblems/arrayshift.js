function arrayshift(arr){
  //remove from the beginning of the array
  arr.shift();
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(arrayshift(arr));