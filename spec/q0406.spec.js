import Solution from '../src/q0406.js';
import BinaryTree from '../src/binary-tree.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    
    it('should solve the easiest case', function() {
        let tree = new BinaryTree();

        tree.put(2);
        tree.put(3);
        tree.put(1);

        expect(solution.findCommonAncestor(tree, 3, 1)).toBe(2);
    });

    it('should work for values at different level', function() {
        let tree = new BinaryTree();

        tree.put(1);
        tree.put(2);

        expect(solution.findCommonAncestor(tree, 1, 2)).toBe(1);
    });

    it('should work for many levels', function() {
        let tree = new BinaryTree();

        tree.put(5);
        tree.put(8);
        tree.put(9);
        tree.put(6);
        tree.put(7);
        tree.put(3);
        tree.put(2);
        tree.put(1);

        expect(solution.findCommonAncestor(tree, 2, 6)).toBe(5);
        expect(solution.findCommonAncestor(tree, 7, 6)).toBe(6);
    });
});
