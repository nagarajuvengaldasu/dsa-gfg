function arrayspread(arr, array) {
  //spread the array
  //what is the spread operator will do ?
  //it will copy the array and return a new array
  let demoarray = [...arr];
  console.log("demo array", demoarray);

  // without lopp we are comninig the two loops in one line
  let newarray = [...arr, ...array];
  console.log("combined array with spread operator", newarray);
}

let arr = [1, 2, 3, 4, 5];
let array = [6, 7, 8, 9, 10];

arrayspread(arr, array);
