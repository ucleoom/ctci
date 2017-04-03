import Solution from '../src/q0104.js';

describe('Solution', function() {
    let solution;

    beforeEach(function() {
        solution = new Solution();
    });

    it('anagrams(\'Tom y Jerry\', \'Jerry y Tom\') should return true', function() {
        expect(solution.anagrams('Tom y Jerry', 'Jerry y Tom')).toBe(true);
    });
});
