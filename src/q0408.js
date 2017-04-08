import BinaryTree from '../src/binary-tree.js'

class Solution {
    pathWithSum(tree, n) {
        let res = [],
            current = [];

        dfs(tree.root, 0, res, current, n);
        return res;
    }
}

function dfs(subtree, sum, res, current, n) {
    if (subtree) {
        let arr = copy(current);
        arr.push(subtree.data);

        if (sum + subtree.data === n) {
            res.push(arr);
        } 
        dfs(subtree.left, sum + subtree.data, res, arr, n);
        dfs(subtree.right, sum + subtree.data, res, arr, n);
        
            dfs(subtree.left, 0, res, [], n);
            dfs(subtree.right, 0, res, [], n);
    }
}

function copy(arr) {
    let res = [];

    for(let elem of arr) {
        res.push(elem);
    }
    return res;
}

export default Solution;
