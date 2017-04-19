import Solution from '../src/q0807.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('makeChange(1)', function() {
        expect(solution.makeChange(1)).toBe(1);
    });
    it('makeChange(2)', function() {
        expect(solution.makeChange(2)).toBe(1);
    });
    it('makeChange(5)', function() {
        expect(solution.makeChange(5)).toBe(2);
    });
    it('makeChange(10)', function() {
        expect(solution.makeChange(10)).toBe(2);
    });
});
