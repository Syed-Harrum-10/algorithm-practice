// // #1

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function print(node) {
//     if (node === null) return;
//     console.log(node.value);
//     print(node.left);
//     print(node.right);
// }

// // #2

// function findMax(node) {
//     if (node === null) return -Infinity;
//     return Math.max(node.value, findMax(node.left), findMax(node.right));
// }

// // #3

// function countNodes(node) {
//     if (node === null) return 0;
//     return 1 + countNodes(node.left) + countNodes(node.right);
// }

// // #4

// function search(node, target) {
//     if (node === null) return false;
//     if (node.value === target) return true;
//     return search(node.left, target) || search(node.right, target);
// }

// // #5

// function treeHeight(node) {
//     if (node === null) return 0;
//     return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
// }

// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(2);

// print(root);
// console.log(findMax(root));
// console.log(countNodes(root));
// console.log(search(root, 5));
// console.log(treeHeight(root));
