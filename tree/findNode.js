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

  function findNode(tree,node){
    if(tree !== null){
       
        if(tree.data == node){
            return true;
        } 
       
       return findNode(tree.left,node) || findNode(tree.right,node) || false;
    }
 
  }

  const tree = formTree();
console.log(findNode(tree,12))