
const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const BinaryAddSearchTree = require('../index').BinaryAddSearchTree;

describe('tree test',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    });

    test('Can successfully instantiate a tree with a single root node',()=>{
        let tree = new BinaryTree();
        let head = new Node(9);
        tree.root=head;
        expect(tree.root.value).toBe(9);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    });
    test('Can successfully add a left child and right child to a single root node',()=>{
        let tree = new BinaryAddSearchTree();
        tree.add(8);
        tree.add(17);
        tree.add(3);
        expect(tree.root.value).toBe(8);
        expect(tree.root.right.value).toBe(17);
        expect(tree.root.left.value).toBe(3);
    });

    test('Can successfully return a collection from a preorder traversal',()=>{
        let tree = new BinaryAddSearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.preOrder()).toEqual([10,5,7,15,13,12,20]);
        expect(tree.inOrder()).toEqual([5,7,10,12,13,15,20]);
        expect(tree.postOrder()).toEqual([7,5,12,13,20,15,10]);
    });

    test('Can successfully return a collection from a inorder traversal',()=>{
        let tree = new BinaryAddSearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.inOrder()).toEqual([5,7,10,12,13,15,20]);
    })
    test('Can successfully return a collection from a postorder traversal',()=>{
        let tree = new BinaryAddSearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.postOrder()).toEqual([7,5,12,13,20,15,10]);
    })
})