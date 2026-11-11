function luckynumber(pos, pass) {
  if (pass > pos) return true;
  else if (pos % pass === 0) return false;
  else {
    pos = pos - Math.floor(pos / pass);
    pass++;
    return luckynumber(pos, pass);
  }
}
let pos = 5;
let pass = 2;
console.log(luckynumber(pos, pass));





class Solution {
  isLucky(n) {
    // Start with pass = 2
    return this.checkLucky(n, 2);
  }

  checkLucky(n, pass) {
    // Base case: if pass exceeds n, number is lucky
    if (pass > n) return true;

    // If n is divisible by current pass, it's not lucky
    if (n % pass === 0) return false;

    // Calculate new position and check recursively
    n = n - Math.floor(n / pass);
    return this.checkLucky(n, pass + 1);
  }
}
