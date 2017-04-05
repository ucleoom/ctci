import BinaryTree from '../src/binary-tree.js'

describe('BinaryTree', function() {
    let tree;
    beforeEach(function() {
        tree = new BinaryTree();
    });
    it('depth() should return 0 for a one node tree.', function() {
        tree.put('f');

        expect(tree.depth()).toBe(0);
    });

    it('balanced() should return true for a one node tree', function() {
        tree.put('f');

        expect(tree.balanced()).toBe(true);
    });

    it('depth() should return -1 for an empty tree.', function() {
        expect(tree.depth()).toBe(-1);
    });
    
    it('balanced() should return true for an empty tree.', function() {
        expect(tree.balanced()).toBe(true);
    });

    it('depth() should return 2 for an unbalanced tree', function() {
        tree.put('z');
        tree.put('m');
        tree.put('a');

        expect(tree.depth()).toBe(2);
    });
    
    it('balanced() should return false for an unbalanced tree', function() {
        tree.put('z');
        tree.put('m');
        tree.put('a');

        expect(tree.balanced()).toBe(false);
    });
});
