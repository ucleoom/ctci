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
        let aux = current.concat([subtree.data]);

        if (sum + subtree.data === n) {
            res.push(aux);
        } else {
            let subs = 0;
            for(let i = 0; i < aux.length - 1; i++) {
                subs += current[i];
                if (sum + subtree.data - subs === n) {
                    res.push(aux.slice(i + 1));
                }
            }
        }
        dfs(subtree.left, sum + subtree.data, res, aux, n);
        dfs(subtree.right, sum + subtree.data, res, aux, n);
       
    } 
}

export default Solution;
