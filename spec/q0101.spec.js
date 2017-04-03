import {Solution, SolutionWithoutSymbolTable} from '../src/q0101.js'

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('should return false for string with duplicates', function() {
        expect(solution.allUniqueChars('pp')).toBe(false);
    });
});

describe('Solution without symbol table', function() {
    let solution;
    beforeEach(function() {
        solution = new SolutionWithoutSymbolTable();
    });
    it('should return false for string with duplicates', function() {
        expect(solution.allUniqueChars('pp')).toBe(false);
    });
});
