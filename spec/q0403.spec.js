import Solution from '../src/q0403.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should solve the problem', function() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        expect(solution.buildTree(arr).depth()).toBe(4);
    });
});
