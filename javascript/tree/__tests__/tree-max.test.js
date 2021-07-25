
const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;

describe('get max numeric ...', () => {
  
  let binary = new BinaryTree();

  let node1 = new Node(1);
  let node2 = new Node(0);
  let node3 = new Node(2);
  let node4 = new Node(15);
  let node5 = new Node(5);
  let node6 = new Node(70);
  let node7 = new Node(35);
  let node8 = new Node(7);
  let node9 = new Node(1);


  binary.root = node1;
  binary.root.left = node2;
  binary.root.right = node3;
  binary.root.left.left = node4;
  binary.root.left.right = node5;
  binary.root.right.left = node6;
  binary.root.right.right = node7;
  binary.root.left.left.left = node8;
  binary.root.left.left.right = node9;


  test('get the max numeric ...', () => {
    expect(binary.getMaxNumber()).toBe(70);
  })
  test('  error an empty tree',()=>{
    let binaryEmpty = new BinaryTree();
    expect(binaryEmpty.getMaxNumber()).toBe('empty tree');
})
})