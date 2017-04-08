import Solution from '../src/q0408.js';
import BinaryTree from '../src/binary-tree.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('Should find paths from root', function() {
        let tree = new BinaryTree();
        
        tree.put(2);
        tree.put(2);
        tree.put(1);
        tree.put(1);
        tree.put(3);
        tree.put(4);

        console.log(solution.pathWithSum(tree, 4));
    });
});
