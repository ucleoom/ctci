import Solution from '../src/q0802.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('2', function() {
        expect(solution.pathCount(2)).toBe(2);
    });
    it('3', function() {
        expect(solution.pathCount(3)).toBe(6);
    });
});
