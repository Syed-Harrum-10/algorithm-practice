// #1

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        return newNode;
     }
    print(node = this.root) {
        if(node === null) {
            return (node.left, node.right)
        }
     }
}

// #2

function isBST(node, min = -Infinity, max = Infinity) {
    if(node === null) return;

    if(min < max) {
        return true;
    }else {
        return false;
    }
}

// #3

function levelOrder(root) {
    if (!root) return;
    
    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    console.log(result.join(' '));
}

// #4

function lca(node, val1, val2) {
    if (!node) return null;

    if (node.val > val1 && node.val > val2) {
        return lca(node.left, val1, val2);
    }

    if (node.val < val1 && node.val < val2) {
        return lca(node.right, val1, val2);
    }

    return node;
}

// #5

function isBalanced(node) {
    function checkHeight(current) {
        if (!current) return 0;

        let leftHeight = checkHeight(current.left);
        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(current.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(node) !== -1;
}


console.log(isBST(tree.root))

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(15);
tree.insert(7);
tree.print()