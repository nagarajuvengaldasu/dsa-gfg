function stockSpan(arr) {
  let st = [];
  st.push(0);
  console.log(1);
  for (let i = 1; i < arr.length; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
      st.pop();
    }
    let span = st.length === 0 ? i + 1 : i - st[st.length - 1];
    console.log(span);
    st.push(i);
  }
}
let arr = [18, 12, 13, 14, 11, 16];
stockSpan(arr);
