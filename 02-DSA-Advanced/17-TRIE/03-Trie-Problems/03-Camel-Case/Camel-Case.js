class Solution {
  findAllWords(dict, pattern) {
    const result = [];
    for (let i = 0; i < dict.length; i++) {
      const word = dict[i];
      let abbr = "";
      for (let j = 0; j < word.length; j++) {
        const ch = word[j];
        if (ch >= "A" && ch <= "Z") {
          abbr += ch;
        }
      }
      if (abbr.startsWith(pattern)) {
        result.push(word);
      }
    }
    if (result.length === 0) {
      console.log("No words found");
      return;
    }
    result.sort((a, b) => {
      let abbrA = "";
      let abbrB = "";
      for (let i = 0; i < a.length; i++) {
        if (a[i] >= "A" && a[i] <= "Z") {
          abbrA += a[i];
        }
      }
      for (let i = 0; i < b.length; i++) {
        if (b[i] >= "A" && b[i] <= "Z") {
          abbrB += b[i];
        }
      }
      if (abbrA < abbrB) {
        return -1;
      }
      if (abbrA > abbrB) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}
let sol = new Solution();
  let dict = ["Hello", "World", "Hi", "How", "Are", "You"];
let pattern = "H";
sol.findAllWords(dict, pattern);
