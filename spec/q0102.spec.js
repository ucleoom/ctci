import Solution from '../src/q0102.js';

describe('Solution', function() {
    let solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it('revert should revert a C-Style string', function() {
        expect(solution.revert(['b', 'y', 'e', 0])).toEqual(['e', 'y', 'b', 0]);
    });
});
