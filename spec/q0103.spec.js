import Solution from '../src/q0103.js';

describe('Solution', function() {
    let solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it('removeDuplicates should return the parameter string without duplicates', function() {
        expect(solution.removeDuplicates(['a', 'n', 'a'])).toEqual(['a', 'n']);
    });
    
    it('removeDuplicates should work for string without duplicates', function() {
        expect(solution.removeDuplicates(['a', 'r', 'b', 'o', 'l'])).toEqual(['a', 'r', 'b', 'o', 'l']);
    });
    
    it('removeDuplicates should work for strings with many dupes', function() {
        expect(solution.removeDuplicates(['a', 'n', 'a', 'n', 'a', 'a'])).toEqual(['a', 'n']);
    });
});
