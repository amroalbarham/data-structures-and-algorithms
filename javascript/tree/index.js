class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = null;
  }
  preOrder() {
    const result = [];
    const _move = (node) => {
      result.push(node.value);
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
      result.push(node.value);
    };
    _move(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      result.push(node.value);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }

  getMaxNumber() {
    if (this.root == null) {
      return ('empty tree');
    }
    let max = this.root.value;
    const _check = (node) => {
      if (node.value >= max) {
        max = node.value
      }
      if (node.left) _check(node.left);
      if (node.right) _check(node.right);
    }
    _check(this.root);
    return max;
  }

}
class BinaryAddSearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }
  add(value) {
    let node = new Node(value);
    let curr = this.root;
    const _add = (node) => {
      if (!this.root) {
        this.root = node;
      } else if (node.value > curr.value) {
        if (curr.right) {
          curr = curr.right;
          // console.log('asdf')F
          _add(node)
        } else {
          curr.right = node;
        }
      } else if (node.value < curr.value) {
        if (curr.left) {
          curr = curr.left;
          // console.log('less than')
          _add(node)
        } else {

          curr.left = node;
        }
      }
    }
    _add(node);
  }


search(value){
 let orderList= tree.inOrder()
 if(orderList.includes(value)){
   return true;
 }
 else{
   return false
 }
}

}
let tree = new BinaryAddSearchTree();
tree.add(10);
tree.add(15);
tree.add(5);
tree.add(7);
tree.add(20);
tree.add(13);
tree.add(12);
tree.add(3);
tree.add(1);
console.log(tree.inOrder());
tree.search(1)


module.exports = { Node, BinaryTree, BinaryAddSearchTree }





