// #1 

// function maxDepth(node) {
//     if(node === null) return;

//     let left = maxDepth(node.left)
//     let right = maxDepth(node.right)
//     return Math.max(left, rigth) + 1;
// }

// console.log(maxDepth(root))

// #2

// function sumTree(node) {

//     if (node === null) return 0;
    

//     let leftSum = sumTree(node.left);
//     let rightSum = sumTree(node.right);
    

//     return node.val + leftSum + rightSum;
// }

// #3

// function countLeaves(node) {

//     if (node === null) return 0;
    

//     if (node.left === null && node.right === null) return 1;
    

//     let leftLeaves = countLeaves(node.left);
//     let rightLeaves = countLeaves(node.right);
    
//     return leftLeaves + rightLeaves;
// }

// #4

function pathSum(node, target) {

    if (node === null) return false;
    

    if (node.left === null && node.right === null) {
        return target === node.val;
    }
    

    let remainingSum = target - node.val;
    return pathSum(node.left, remainingSum) || pathSum(node.right, remainingSum);
}
