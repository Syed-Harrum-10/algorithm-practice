// #1 
// Binary Tree Inorder Traversal

// var inorderTraversal = function(root) {
//     let result = [];
    
//     function traverse(node) {
//         if (node === null) return;
        
//         traverse(node.left);   
//         result.push(node.val);
//         traverse(node.right);  
//     }
    
//     traverse(root);
//     return result;
// };

// #2 
// Balanced Binary Tree

// var isBalanced = function(root) {
//     if (root === null) return true;
    
//     let left = isBalanced(root.left);
//     let right = isBalanced(root.right);


//     if (left === false || right === false || Math.abs(left - right) > 1) {
//         return false;
//     }


//     return Math.max(left, right) + 1;
// };

// #3 
// Minimum Depth of Binary Tree

// var minDepth = function(root) {
//     if (root === null) return 0;
    
//     let left = minDepth(root.left);
//     let right = minDepth(root.right);
    

//     if (root.left === null) return right + 1;
    

//     if (root.right === null) return left + 1;
    

//     return Math.min(left, right) + 1;
// };

// #4
// Path Sum

// var hasPathSum = function(root, targetSum) {

//     if (root === null) return false;


//     if (root.left === null && root.right === null) {
//         return targetSum === root.val;
//     }


//     let remainingSum = targetSum - root.val;


//     return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
// };

// #5
// Binary Tree Paths

// var binaryTreePaths = function(root) {
//     if (root === null) return [];
    

//     if (root.left === null && root.right === null) {
//         return [root.val.toString()];
//     }
    
//     let paths = [];
    

//     if (root.left !== null) {
//         for (let path of binaryTreePaths(root.left)) {
//             paths.push(root.val + "->" + path);
//         }
//     }
    

//     if (root.right !== null) {
//         for (let path of binaryTreePaths(root.right)) {
//             paths.push(root.val + "->" + path);
//         }
//     }
    
//     return paths;
// };
