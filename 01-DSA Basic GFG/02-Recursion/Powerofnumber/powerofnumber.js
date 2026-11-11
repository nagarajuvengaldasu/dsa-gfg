// Function to calculate power of a number
function power(base, exponent) {
  if (exponent === 0) return 1;
  else if (exponent === 1) {
    return base;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Function to reverse a number
function reverseNumber(n) {
  let rev = 0;
  let temp = n;
  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return rev;
}
// Main function for reverse exponentiation
function reverseExponentiation(n) {
  const rev = reverseNumber(n);
  const result = power(n, rev);
  console.log(result);
}

let n = 12;
console.log(reverseExponentiation(n));
