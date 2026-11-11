function matchstickgame(n) {
  const modresult = n % 5n;
  if (modresult === 0n) {
    return -1;
  } else {
    return Number(modresult);
  }
}
let n = 15;
console.log(matchstickgame(n));
