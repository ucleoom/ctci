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
        let fnMap = new Map([['max', Math.max]]);
        return doDepth(this.root, fnMap).get('max'); 
    }

    balanced() {
        let fnMap = new Map([['max', Math.max], ['min', Math.min]]),
            res = doDepth(this.root, fnMap);

        return res.get('max') - res.get('min') <= 1;
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

function doDepth(node, fnMap) {
    var res = new Map();
    for (let [key, fn] of fnMap) {
        res.set(key, -1);
    }
    
    if (node) {
        for(let [key, fn] of fnMap) {
            res.set(key, fn.call(null, doDepth(node.left, fnMap).get(key), doDepth(node.right, fnMap).get(key)) + 1);
        }
    }
    return res;
}


export default BinaryTree;
