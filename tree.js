class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function formTree() {
  let newTree = new Tree(2);
  newTree.left = new Tree(1);
  newTree.right = new Tree(4);
  newTree.right.left = new Tree(3);
  newTree.right.right = new Tree(5);
  return newTree;
}

let t = formTree();
let sum = 0;
function inOrder(t) {    
  if (t !== null) {
    inOrder(t.left);
   sum += t.data;
    inOrder(t.right);
  }
}

function preOrder(t) {
  if (t !== null) {
    console.log(t.data);
    preOrder(t.left);

    preOrder(t.right);
  }
}

function postOrder(t) {
  if (t !== null) {
    postOrder(t.left);

    postOrder(t.right);
    console.log(t.data);
  }
}
console.log("InOrder:");
inOrder(t);
console.log(sum);
console.log("PreOrder:");
preOrder(t);
console.log("PostOrder:");
postOrder(t)
