function intersect(a, b) {
  let n = a.length;
  let m = b.length;

  for (let i = 0; i < n; i++) {
    // o(n)
    let flag = 0; // initally that element is not present
    for (let j = 0; j < m; j++) {
      // o(m)
      if (a[i] === b[j]) {
        // if present then make flag 1 and break the loop
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      // o(1)
      console.log(a[i]);
    }
  }
}

const a = [10, 15, 20, 25, 30, 35];
const b = [30, 10, 4, 17, 15];
intersect(a, b);
