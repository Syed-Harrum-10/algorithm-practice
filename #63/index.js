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
    insert(value) {
        let Node = new Node(value);

        if (this.root === null) {
            this.root = Node;
            return this
        }
    }
    // #2
    search(value, current = this.root) {
        if (current === null) return false;
        if (current.value === value) return true;

        if (value < current.value) {
            return this.search(value, current.left);
        } else {
            return this.search(value, current.right);
        }
    }
    // #3
    findMin(current = this.root) {
        if (current === null) return null;
        if (current.left === null) return current.value;

        return this.findMin(current.left);
    }
    // #4
    findMax(current = this.root) {
        if (current === null) return null;
        if (current.right === null) return current.value;

        return this.findMax(current.right);
    }
    // #5
    print(node = this.root) {
        if (node === null) return;
        this.print(node.left);
        console.log(node.value);
        this.print(node.right);
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
