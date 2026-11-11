function mergewithoutextraspace(a,b,n,m){
  // first i need to add the arr2 elements to the arr1 ending then i need to sort?
  for(let i=0;i<m;i++){
    a.push(b[i]);
  }
  a.sort((a,b)=>a-b);
  return a;
}
let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let n = a.length;
let m = b.length;
console.log(mergewithoutextraspace(a, b, n, m));