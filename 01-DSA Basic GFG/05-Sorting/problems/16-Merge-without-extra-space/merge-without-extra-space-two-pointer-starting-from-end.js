function mergewithoutextraspace(a, b, n, m) {
  let i = n - 1;
  let j = m - 1;
  let k = n + m - 1;

  
  while (i >= 0 && j >= 0) {
    if (a[i] > b[j]) {
      a[k] = a[i];
      k--;
      i--;
    }
    else{
      a[k] = b[j];
      k--;
      j--;
    }
  }
  while(j>=0){
    a[k] = b[j];
    k--;
    j--;
  }
  return a;
}
let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let n = a.length;
let m = b.length;
console.log(mergewithoutextraspace(a, b, n, m));
