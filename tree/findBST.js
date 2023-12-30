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
    newTree.right = new Tree(12);
    newTree.right.left = new Tree(10);
    newTree.right.right = new Tree(15);
    return newTree;
  }

  const tree = formTree();

  function findBST(tree,value){
    if(tree !== null){
        if(tree.data == value) {
            return true;
        }
        if(tree.data > value){
            return findBST(tree.left,value)
        }
        if(tree.data < value){
           return findBST(tree.right,value)
        }
    }
    return false
  }

  console.log(findBST(tree,7000));