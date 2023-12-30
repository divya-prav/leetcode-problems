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

  const tree = formTree();
  function treeHeight(tree){
    if(tree === null) return 0;
    return Math.max((treeHeight(tree.left),treeHeight(tree.right)))+1;
  }

  console.log(treeHeight(tree));
  

