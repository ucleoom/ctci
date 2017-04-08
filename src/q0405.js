import BinaryTree from '../src/binary-tree.js'

class Solution {
    next(tree, value) {
        let node = find(tree.root, value),
            sucessor;

        if (node) {
            if (node.parent && node.parent.left === node) {
                sucessor = node.parent.data;
            } else if (node.right) {
                sucessor = leftMost(node.right);
            } else if (node.parent && node.parent.right === node) {
                sucessor = findLeftSibling(node);
            }
        }

        return sucessor;
    }
}

function find(subtree, value) {
    let res = null;
    if (subtree) {
        if (subtree.data === value) {
            res = subtree;
        } else {
            res = find(subtree.left, value) || find(subtree.right, value);
        }         
    }
    return res;
}

function leftMost(subtree) {
    let res;
    if (subtree) {
        if (subtree.left) {
            res = leftMost(subtree.left);
        } else {
            res = subtree.data;
        }
    }
    return res;
}

function findLeftSibling(subtree) {
    let res;
    if (subtree && subtree.parent) {
        if (subtree.parent.left === subtree) {
            res = subtree.parent.data;
        } else {
            res = findLeftSibling(subtree.parent);
        }
    }
    return res;
}


export default Solution;
