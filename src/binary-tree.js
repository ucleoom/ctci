class Node {
    constructor(data) {
        this.data = data;
    }
}

class BinaryTree {    
    put(key) {
        this.root = doPut(this.root, key);
    }

    depth() {
        return doDepth(this.root); 
    }

    balanced() {
    }
}

function doPut(node, key) {
    let res = node;
    if (!node) {
        res = new Node(key);
    } else if (key < node.data) {
        node.left = doPut(node.left, key);
    } else {
        node.right = doPut(node.right, key);
    }
    
    return res;
}

function doDepth(node) {
    let depth = -1;
    
    if (node) {
        depth = Math.max(doDepth(node.left), doDepth(node.right)) + 1;
    }
    return depth;
}

function minmax(node) {
}

export default BinaryTree;
