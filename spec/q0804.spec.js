import Solution from '../src/q0804.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should return all permutations', function() {
        expect(solution.permutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);

        expect(solution.permutations('abcdef').length).toBe(720);
    });
});
