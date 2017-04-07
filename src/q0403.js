import BinaryTree from '../src/binary-tree.js'

class Solution {
    buildTree(arr) {
        let t = new BinaryTree();

        return makeTree(t, arr, 0, arr.length);        
    }
}

function makeTree(t, arr, start, end) {
    if (start < end) {
        let m = Math.floor((end + start) / 2);
        t.put(arr[m]);
        makeTree(t, arr, start, m);
        makeTree(t, arr, m + 1, end);
    }
    return t;
}

export default Solution;
