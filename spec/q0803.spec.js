import Solution from '../src/q0803.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should return all subsets', function() {
        expect(solution.subsets([1, 2, 3])).toEqual([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
    });
});
