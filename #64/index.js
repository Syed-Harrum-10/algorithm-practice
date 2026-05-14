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

    // #1

    insert(value, current = this.root) {
        this.insert(current = value);
    };

    // #2

    print(node = this.root) {
        if(node === null) return;
        return this.print(node.left, node.right)
    };    

}
// #3
function isBST(node, min = -Infinity, max = Infinity) {
    if(node === null) return;
    
    if (node.val <= min || node.val >= max) return false;

    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}
// #4
function levelOrder(root) {
    if (!root) return;

    function traverse(queue, result) {
        if (queue.length === 0) return result;

        let current = queue.shift();
        result.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);

        return traverse(queue, result);
    }

    let finalOutput = traverse([root], []);
    console.log(finalOutput.join(" "));
}
// #5
function lca(node, val1, val2) {
    if (node === null) return null;


    if (node.val > val1 && node.val > val2) {
        return lca(node.left, val1, val2);
    }


    if (node.val < val1 && node.val < val2) {
        return lca(node.right, val1, val2);
    }


    return node;
}


const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);