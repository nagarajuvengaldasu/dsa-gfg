//Fractional Knapsack Problem
//Time Complexity: O(n log n)
//Space Complexity: O(1)
//Approach: Greedy Approach
//Sort the items by value/weight in descending order
//Take the item with the highest value/weight ratio first
//If the item can be taken completely, take it completely
//If the item cannot be taken completely, take a fraction of it
//Return the maximum value that can be obtained

//Class to represent an item in the knapsack
class knapsack {
  constructor(weight, value) {
    //Weight of the item
    this.weight = weight;
    //Value of the item
    this.value = value;
  }
}
//Function to calculate the maximum value that can be obtained
function fractionalKnapsack(arr, W) {
  //Sort the items by value/weight in descending order
  arr.sort((a, b) => b.value * a.weight - a.value * b.weight);
  //Initialize the result to 0
  let res = 0;
  //Iterate through the items
  for (let i = 0; i < arr.length; i++) {
    //If the item can be taken completely, take it completely
    if (arr[i].weight <= W) {
      //Add the value of the item to the result
      res += arr[i].value;
      //Subtract the weight of the item from the remaining weight
      W -= arr[i].weight;
    }
    //If the item cannot be taken completely, take a fraction of it
    else {
      //If the item cannot be taken completely, take a fraction of it
      let q = W / arr[i].weight;
      //Add the fraction of the item to the result
      res += q * arr[i].value;
      //Break out of the loop
      break;
    }
  }
  //Return the maximum value that can be obtained
  return res;
}
//Create an array of items
let arr = [
  new knapsack(10, 60),
  new knapsack(20, 100),
  new knapsack(30, 120),
  new knapsack(40, 40),
];
let W = 50;
console.log(fractionalKnapsack(arr, W));
