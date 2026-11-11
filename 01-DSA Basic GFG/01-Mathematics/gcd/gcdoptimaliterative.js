function gcdoptimaliterative(a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
}
let a = 23;
let b = 34;
console.log(gcdoptimaliterative(a, b));
