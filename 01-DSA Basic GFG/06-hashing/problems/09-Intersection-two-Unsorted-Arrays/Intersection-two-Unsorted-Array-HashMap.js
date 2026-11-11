function intersect(a, b) {
  let n = a.length;
  let m = b.length;

  const result = {};

  for (let i = 0; i < m; i++) {
    // o(m) operations
    result[b[i]] = 1;
  }

  for (let j = 0; j < n; j++) {
    // o(n) operations
    if (result[a[j]] === 1) {
      console.log(a[j]);
    }
  }
}

const a = [10, 15, 20, 25, 30, 35];
const b = [30, 10, 4, 17, 15];
intersect(a, b);
