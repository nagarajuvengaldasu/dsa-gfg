class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Vertical order traversal: group nodes by horizontal distance (hd) from root
function vTraversal(root) {
  // Map: hd -> array of node values at that vertical line
  let mp = new Map();
  // Queue for BFS: each element is [node, hd]
  let q = [[root, 0]];

  while (q.length > 0) {
    let pair = q.shift(); // remove front element
    let curr = pair[0]; // current node
    let hd = pair[1]; // its horizontal distance

    if (mp.has(hd)) {
      let arr = mp.get(hd); // existing array for this hd
      arr.push(curr.data); // add current node's value
      mp.set(hd, arr); // store back (not strictly needed for arrays)
    } else {
      mp.set(hd, [curr.data]); // first node at this hd
    }

    // left child has hd - 1
    if (curr.left !== null) {
      q.push([curr.left, hd - 1]);
    }
    // right child has hd + 1
    if (curr.right !== null) {
      q.push([curr.right, hd + 1]);
    }
  }

  // Sort by horizontal distance so we print from leftmost to rightmost
  mp = new Map([...mp.entries()].sort((a, b) => a[0] - b[0]));
  for (let x of mp.values()) {
    console.log(x); // each x is an array of nodes in that vertical line
  }
}

// Sample tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
vTraversal(root);
