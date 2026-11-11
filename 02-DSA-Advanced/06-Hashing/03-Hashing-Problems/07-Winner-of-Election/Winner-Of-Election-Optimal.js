/*
 * PROBLEM STATEMENT:
 * Given an array of vote strings, return the winner (max votes). On tie, return
 * lexicographically smaller name. Return [name, voteCount].
 *
 * OPTIMAL APPROACH: One pass to build frequency map, one pass over map for max.
 *
 * STEP-BY-STEP (arr=[john,johnny,jackie,...]):
 * map = {john:4, johnny:4, jackie:2, jamie:3}
 * Iterate map: john 4 → max. johnny 4 → tie, "john"<"johnny" keep john.
 * return ["john", "4"]
 *
 * EXAMPLE: [john,johnny,jackie,...] → ["john","4"]
 * EXAMPLE: [andy,blake,clark] → ["andy","1"]
 * Time: O(n) | Space: O(n)
 */

function winner(arr, n) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const name = arr[i];
    map.set(name, (map.get(name) || 0) + 1);
    // EXECUTION: One pass builds vote count. map {john:4, johnny:4, jackie:2, jamie:3}.
  }

  let maxVotes = 0;
  let winnerName = "";

  for (const [name, count] of map) {
    if (
      count > maxVotes ||
      (count === maxVotes && (winnerName === "" || name < winnerName))
    ) {
      maxVotes = count;
      winnerName = name;
      // WHY: More votes wins. Tie → pick lex smaller (john < johnny).
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
