class Solution0 {
    parenthesis(n) {
        var res = [];
        if (n === 1) {
            res.push("()");
        } else {
            for(let p of this.parenthesis(n - 1)) {
                res.push("()" + p);
                if ("()" + p !== p + "()") {
                    res.push(p + "()");
                }
                res.push("(" + p + ")");
            }
        }

        return res;
    }
}

class Solution {
    parenthesis(n) { 
        let results = [];

        doParenthesis(n, n, n, '', results);

        return results;
    }
}

function doParenthesis(l, r, n, s, results) {
    if (l === 0 && r === 0) {
        results.push(s);
    } else {
        if (l > 0) {
            doParenthesis(l - 1, r, n, s + '(', results);
        }
        if (n - l > n - r) {
            doParenthesis(l, r - 1, n, s + ')', results);
        }
    }
}

export {Solution0, Solution};
export default Solution;
