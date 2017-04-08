import Solution from '../src/q0405.js';
import BinaryTree from '../src/binary-tree.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('root node, just two children', function() {
        let tree = new BinaryTree();

        tree.put(2);
        tree.put(3);
        tree.put(1);

        expect(solution.next(tree, 2)).toBe(3);
    });
    it('left node', function() {
        let tree = new BinaryTree();

        tree.put(2);
        tree.put(3);
        tree.put(1);

        expect(solution.next(tree, 1)).toBe(2);
    });
    it('no sucessor', function() {
        let tree = new BinaryTree();

        tree.put(2);
        tree.put(3);
        tree.put(1);

        expect(solution.next(tree, 3)).toBeUndefined();
    });

    it('go up', function() {
        let tree = new BinaryTree();

        tree.put(5);
        tree.put(6);
        tree.put(3);
        tree.put(4);
        tree.put(2);

        expect(solution.next(tree, 4)).toBe(5);
    });
});
