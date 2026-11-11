function josephusProblem(n, k){
  if(n === 1){
    return 1;
  }
  return ((josephusProblem(n-1 , k) + k - 1) % n) + 1;
}
let n = 5;
let k = 2;
console.log(josephusProblem(n, k));