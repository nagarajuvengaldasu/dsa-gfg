/*
 * PROBLEM STATEMENT:
 * Given an array of vote strings (candidate names), return the winner: the
 * candidate with maximum votes. On tie, return lexicographically smaller name.
 * Return [name, voteCount] as strings.
 *
 * NAIVE APPROACH: Get distinct names, for each count votes by scanning full array.
 *
 * STEP-BY-STEP (arr=[john,johnny,jackie,...]):
 * distinct = [john, johnny, jackie, jamie]
 * john: count=4, maxVotes=4, winner=john
 * johnny: count=4, tie but "john" < "johnny" → keep john
 * jackie: count=2, jamie: count=3 → john wins with 4
 * return ["john", "4"]
 *
 * EXAMPLE: [john,johnny,jackie,...] → ["john","4"]
 * EXAMPLE: [andy,blake,clark] → ["andy","1"]
 * Time: O(n*U) | Space: O(U)
 */

function winner(arr, n) {
  const distinct = [];
  for (let i = 0; i < n; i++) {
    if (!distinct.includes(arr[i])) {
      distinct.push(arr[i]);
      // EXECUTION: Collect unique names. john,johnny,jackie,jamie (no duplicates).
    }
  }

  let maxVotes = 0;
  let winnerName = "";

  for (let i = 0; i < distinct.length; i++) {
    const name = distinct[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === name) count++;
      // EXECUTION: Count votes for this candidate. john appears 4 times.
    }

    if (
      count > maxVotes ||
      (count === maxVotes && (winnerName === "" || name < winnerName))
    ) {
      maxVotes = count;
      winnerName = name;
      // WHY: Update if more votes, or tie → pick lexicographically smaller (john < johnny).
    }
  }

  return [winnerName, String(maxVotes)];
}

// Example:
// console.log(winner(["john","johnny","jackie","johnny","john","jackie","jamie","jamie","john","johnny","jamie","johnny","john"], 13)); // ["john", "4"]
// console.log(winner(["andy","blake","clark"], 3)); // ["andy", "1"]

let arr = [
  "john",
  "johnny",
  "jackie",
  "johnny",
  "john",
  "jackie",
  "jamie",
  "jamie",
  "john",
  "johnny",
  "jamie",
  "johnny",
  "john",
];
console.log(winner(arr, arr.length));
