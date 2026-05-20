// #1 
// Binary Tree Preorder Traversal


// var preorderTraversal = function(root) {

//     if (root === null) return [];


//     return [
//         root.val, 
//         ...preorderTraversal(root.left), 
//         ...preorderTraversal(root.right)
//     ];
// };

// #2
// Binary Tree Postorder Traversal


// var preorderTraversal = function(root) {

//     if (root === null) return [];


//     return [
 
//         ...preorderTraversal(root.left), 
//         ...preorderTraversal(root.right),
//         root.val,
//     ];
// };

// #3
// Find Mode in Binary Search Tree


// var findMode = function(root) {
//     if(root === null) return [];

//     function flatten(node) {
//         if (node === null) return [];
//         return [node.val, ...flatten(node.left), ...flatten(node.right)];
//     }
//     let arr = flatten(root); 

//     let maxCount = 0;
//     let modes = [];

//     for(let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 count++;
//             }
//         }
        
//         if (count > maxCount) {
//             maxCount = count;
//             modes = [arr[i]];
//         } else if (count === maxCount && !modes.includes(arr[i])) {
//             modes.push(arr[i]);
//         }
//     }

//     return modes;
// };

// #4 
// Minimum Absolute Difference in BST


// var getMinimumDifference = function(root) {
//     let minDiff = Infinity;
//     let prev = null;

//     function inorder(node) {
//         if (node === null) return;

//         inorder(node.left);

//         if (prev !== null) {
//             minDiff = Math.min(minDiff, node.val - prev.val);
//         }
//         prev = node;

//         inorder(node.right);
//     }

//     inorder(root);
//     return minDiff;
// };
