import BinaryTree from '../src/binary-tree.js'

class Solution {
    createLists(tree) {
        let res = [],
            queue = [];
        if (tree.root) {
            queue.push({node: tree.root, level: 0});
        }
        bfs(queue, res);
        
        return res;
    }
}

function bfs(queue, lists) {
    let level = -1,
        current = [];
    while (queue.length) {
        let elem = queue.shift();

        if (elem.level !== level) {
            level = elem.level;
            if (current.length) {
                lists.push(current);
            }
            current = [];
        }
        current.push(elem.node.data);
        if (elem.node.left) {
            queue.push({node: elem.node.left, level: level + 1});
        }
        if (elem.node.right) {
            queue.push({node: elem.node.right, level: level + 1});
        }
    }
    if (current.length) {
        lists.push(current);
    }
}

export default Solution;
