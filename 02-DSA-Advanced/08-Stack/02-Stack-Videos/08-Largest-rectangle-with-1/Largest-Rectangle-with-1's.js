function maxrectList(arr) {
  let st = [];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      let tp = st.pop();
      let curr = arr[tp] * (st.length === 0 ? i : i - st[st.length - 1] - 1);
      res = Math.max(res, curr);
    }
    st.push(i);
  }
  while (st.length > 0) {
    let tp = st.pop();
    let curr =
      arr[tp] *
      (st.length === 0 ? arr.length : arr.length - st[st.length - 1] - 1);
    res = Math.max(res, curr);
  }
  return res;
}
function largestRectangularAreaHistogram(mat) {
  let res = maxrectList(mat[0]);
  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        mat[i][j] += mat[i - 1][j];
      }
    }
    res = Math.max(res, maxrectList(mat[i]));
  }
  return res;
}
let mat = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
console.log(largestRectangularAreaHistogram(mat));
