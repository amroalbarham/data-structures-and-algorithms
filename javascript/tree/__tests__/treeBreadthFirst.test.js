const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const treeBreadthFirst = require('../index').treeBreadthFirst;
describe('breadth first....', () => {
  let tree = new BinaryTree();
  let node1 = new Node(3);
  let node2 = new Node(8);
  let node3 = new Node(13);
  let node4 = new Node(99);
  let node5 = new Node(24);
  let node6 = new Node(1);
  let node7 = new Node(64);
  let node8 = new Node(77);
  let node9 = new Node(2);

  tree.root = node1;
  tree.root.left = node2;
  tree.root.right = node3;
  tree.root.left.left = node4;
  tree.root.left.right = node5;
  tree.root.right.left = node6;
  tree.root.right.right = node7;
  tree.root.right.right.left = node8;
  tree.root.right.right.right = node9;
  let tree2 = new BinaryTree();
  test('can successfully return an array of all values in the tree', () => {
    expect(treeBreadthFirst(tree)).toEqual([3, 8, 13, 99, 24, 1, 64, 77, 2]);
  });
  test('if empty tree', () => {
    expect(treeBreadthFirst(tree2)).toEqual('Empty Tree...');
  });
})