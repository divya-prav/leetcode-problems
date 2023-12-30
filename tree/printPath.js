class Tree {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function formTree() {
    let newTree = new Tree(7);
    newTree.left = new Tree(3);
    newTree.right = new Tree(15);
    newTree.right.left = new Tree(10);
    newTree.right.right = new Tree(12);
    return newTree;
  }


let updatedPath = "";

function printPath(root, path) {
  if (root !== null) {
    updatedPath = path + root.data + "-";
    if (root.left === null && root.right === null) {
      console.log(updatedPath);
    }
    printPath(root.left, updatedPath);
    printPath(root.right, updatedPath);
  }
}

const tree = formTree();
printPath(tree,"")


export default formTree;