import BinaryTree from '../src/binary-tree.js'

class Solution {
    findCommonAncestor(tree, v1, v2) {
        let res = find(tree.root, v1, v2);
        return res && res.value;    
    }
}

function find(subtree, v1, v2) {
    let res = {};
    if (subtree) {
        res.found1 = subtree.data === v1;
        res.found2 = subtree.data === v2;

        let auxl = find(subtree.left, v1, v2),
            auxr;
        if (!auxl.found1 || !auxl.found2) {
            auxr = find(subtree.right, v1, v2);
        }
        if (auxl.found1 && auxl.found2) {
            res = auxl;
        } else if (auxr.found1 && auxr.found2) {
            res = auxr;
        } else {
            res = {
                found1: auxl.found1 || auxr.found1 || res.found1,
                found2: auxl.found2 || auxr.found2 || res.found2
            };
            if (res.found1 && res.found2) {
                res.value  = subtree.data;    
            }
        }  
    }
    return res;
}

export default Solution;
