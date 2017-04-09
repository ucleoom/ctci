import Solution from '../src/q0801.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('fibonacci values', function() {
        expect(solution.fibonacci(0)).toBe(0);
        expect(solution.fibonacci(1)).toBe(1);
        expect(solution.fibonacci(2)).toBe(1);
        expect(solution.fibonacci(3)).toBe(2);
        expect(solution.fibonacci(4)).toBe(3);
        
    });
});
