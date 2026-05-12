// #1 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// function print(node) {
//     if(node === null) return;
//     print(node.left);
//     print(node.right);
// }

// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(3);
// root.left.right = new Node(7);

// print(root)

// #2

// function findMax(node) {

//     if (node === null) return -Infinity;


//     let max = node.value;
//     let leftMax = findMax(node.left);
//     let rightMax = findMax(node.right);

//     if (leftMax > max) max = leftMax;
//     if (rightMax > max) max = rightMax;

//     return max;
// }

// console.log(findMax(root));

// #3

// function countNodes(node) {
//     if (node === null) return 0;

//     return countNodes(node.left) + countNodes(node.right) + 1;
// }

// console.log(countNodes(root));

// #4

// function search(node, target) {

//     if (node === null) return false;

//     if (node.value === target) return true;

//     return search(node.left, target) || search(node.right, target);
// }

// console.log(search(root, 7));  
// console.log(search(root, 99)); 

// #5 

// function treeHeight(node) {
//     if(node === null) return;
//     return treeHeight(node.left + node.right) 
// }
// console.log(treeHeight(root))
