import {Solution, Solution0} from '../src/q0805.js';

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution0();
    });
    it('base case', function() {
        expect(solution.parenthesis(1)).toEqual(["()"]);
    });
    it('2', function() {
        expect(solution.parenthesis(2)).toEqual(["()()", "(())"]);
    });
    it('3', function() {
        expect(solution.parenthesis(3).sort()).toEqual(["()()()", "()(())", "(())()", "(()())", "((()))" ].sort());
    });
    it('4', function() {
        //console.log(solution.parenthesis(4).sort());
    });
});

describe('Full solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });

    it('1', function() {
        expect(solution.parenthesis(1)).toEqual(["()"]);
    });
    it('2', function() {
        expect(solution.parenthesis(2)).toEqual(['(())', '()()']);
    });
    it('3', function() {
        expect(solution.parenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
    });
    it('4', function() {

        expect(solution.parenthesis(4)).toEqual(['(((())))', '((()()))', '((())())', '((()))()', '(()(()))', '(()()())', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()']);
    });
});
