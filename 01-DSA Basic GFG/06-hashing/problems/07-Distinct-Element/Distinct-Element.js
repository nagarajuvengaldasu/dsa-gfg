/**
 * Count occurrance of distinct elements
 * output: { a : 2 , b : 2 , c : 2 , d : 1 , e : 1 , f : 1 }
 */

const arr = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];

// why we use the reduce function inthe js\avascritp?
// reduce function is used to reduce the array to a single value.

const result = arr.reduce(
  (acc, cur) =>
    cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
  {}
);
// we are using the ...acc spread operator in the javascript code?
// ...acc is used to spread the acc object and add the new key-value pair to it.
// ...acc is create a new object every time the function is called.
console.log(result);



const res = arr.reduce((acc , cur) =>cur in acc ? { [cur]: acc[cur] + 1} : { [cur]: 1},{})
// if won't use the ...acc then we will get the first element only?
console.log(res);


