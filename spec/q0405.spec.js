import Solution from '../src/q0405.js';
import BinaryTree from '../src/binary-tree.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should solve the problem', function() {
        let tree = new BinaryTree();

        tree.put(2);
        tree.put(3);
        tree.put(1);

        expect(solution.next(tree, 2)).toBe(3);
    });
});
