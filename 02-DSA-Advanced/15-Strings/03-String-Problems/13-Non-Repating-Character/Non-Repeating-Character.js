function nonRepeatingCharacter(str) {
  let freq = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - 97;
    freq[index]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str.charCodeAt(i) - 97] === 1) {
      return str[i];
    }
  }
  return "$";
}
console.log(nonRepeatingCharacter("racecar"));
