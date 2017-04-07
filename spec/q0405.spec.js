import Solution from '../src/q0404.js';
import BinaryTree from '../src/binary-tree.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should solve the problem', function() {
        let tree = new BinaryTree(),
            lists;

        tree.put(2);
        tree.put(3);
        tree.put(1);

        lists = solution.createLists(tree);

        expect(lists.length).toBe(2);
        expect(lists[0]).toEqual([2]);
        expect(lists[1]).toEqual([1, 3]);
    });
});
